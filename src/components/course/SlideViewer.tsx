import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Maximize2, Minimize2 } from 'lucide-react'
import { Button } from '../ui'
import { getSlideImage } from '../../utils/imageAssets'

interface Slide {
  id: string
  title: string
  content: string
  image?: string
  type: 'title' | 'content' | 'image' | 'code' | 'summary'
  notes?: string
}

interface SlideViewerProps {
  markdownContent: string
  onSlideChange?: (slideIndex: number) => void
  onComplete?: () => void
}

const SlideViewer: React.FC<SlideViewerProps> = ({ 
  markdownContent, 
  onSlideChange,
  onComplete 
}) => {
  const [slides, setSlides] = useState<Slide[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timeout | null>(null)

  // 解析 Markdown 內容為投影片
  useEffect(() => {
    const parseMarkdownToSlides = (content: string): Slide[] => {
      const slides: Slide[] = []
      const sections = content.split(/^##\s+/m).filter(section => section.trim())
      
      sections.forEach((section, index) => {
        const lines = section.split('\n')
        const title = lines[0]?.replace(/^#\s+/, '').trim() || `投影片 ${index + 1}`
        
        // 提取圖片
        const imageMatch = section.match(/!\[.*?\]\((.*?)\)/)
        const image = imageMatch ? imageMatch[1] : getSlideImageForSlide(index, title)
        
        // 移除圖片標記後的內容
        const contentWithoutImages = section.replace(/!\[.*?\]\(.*?\)/g, '')
        
        // 分割內容為段落
        const paragraphs = contentWithoutImages
          .split('\n\n')
          .filter(p => p.trim() && !p.startsWith('#'))
          .slice(0, 3) // 限制每張投影片最多3段內容
        
        // 判斷投影片類型
        let slideType: Slide['type'] = 'content'
        if (index === 0) slideType = 'title'
        else if (section.includes('```')) slideType = 'code'
        else if (title.includes('總結') || title.includes('結論')) slideType = 'summary'
        else if (imageMatch) slideType = 'image'
        
        slides.push({
          id: `slide-${index}`,
          title,
          content: paragraphs.join('\n\n'),
          image,
          type: slideType,
          notes: extractNotes(section)
        })
      })
      
      return slides
    }

    if (markdownContent) {
      const parsedSlides = parseMarkdownToSlides(markdownContent)
      setSlides(parsedSlides)
    }
  }, [markdownContent])

  // 獲取投影片配圖
  const getSlideImageForSlide = (index: number, title: string): string => {
    return getSlideImage(title)
  }

  // 提取筆記內容
  const extractNotes = (content: string): string => {
    const noteMatch = content.match(/```\s*note\s*([\s\S]*?)```/i)
    return noteMatch ? noteMatch[1].trim() : ''
  }

  // 自動播放控制
  useEffect(() => {
    if (isAutoPlay && slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => {
          if (prev >= slides.length - 1) {
            setIsAutoPlay(false)
            onComplete?.()
            return prev
          }
          return prev + 1
        })
      }, 5000) // 每5秒切換
      
      setAutoPlayInterval(interval)
      return () => clearInterval(interval)
    } else if (autoPlayInterval) {
      clearInterval(autoPlayInterval)
      setAutoPlayInterval(null)
    }
  }, [isAutoPlay, slides.length, onComplete])

  // 投影片變更回調
  useEffect(() => {
    onSlideChange?.(currentSlide)
  }, [currentSlide, onSlideChange])

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete?.()
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  const resetSlides = () => {
    setCurrentSlide(0)
    setIsAutoPlay(false)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (slides.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">正在準備投影片...</p>
        </div>
      </div>
    )
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className={`bg-white rounded-lg shadow-lg ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* 控制欄 */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleAutoPlay}
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={resetSlides}
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          
          <span className="text-sm text-gray-600">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* 投影片內容 */}
      <div className={`relative ${isFullscreen ? 'h-screen' : 'h-96 md:h-[500px]'}`}>
        <div className="absolute inset-0 flex">
          {/* 左側：圖片區域 */}
          <div className="w-1/2 relative overflow-hidden">
            <img
              src={currentSlideData.image}
              alt={currentSlideData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
          </div>
          
          {/* 右側：內容區域 */}
          <div className="w-1/2 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="space-y-4">
              {/* 投影片標題 */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {currentSlideData.title}
              </h2>
              
              {/* 投影片內容 */}
              <div className="prose prose-lg max-w-none">
                {currentSlideData.content.split('\n\n').map((paragraph, index) => (
                  <div key={index} className="mb-4">
                    {paragraph.startsWith('```') ? (
                      <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{paragraph.replace(/```\w*\n?/g, '').replace(/```$/g, '')}</code>
                      </pre>
                    ) : paragraph.startsWith('- ') || paragraph.startsWith('* ') ? (
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className="text-base">
                            {item.replace(/^[-*]\s+/, '')}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 text-base leading-relaxed">
                        {paragraph}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              
              {/* 筆記區域 */}
              {currentSlideData.notes && (
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>💡 重點提示：</strong> {currentSlideData.notes}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 進度條 */}
      <div className="px-4 py-2 border-t border-gray-200">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* 投影片縮圖導航 */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex space-x-2 overflow-x-auto">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-20 h-12 rounded-lg border-2 transition-all ${
                index === currentSlide
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-white hover:border-gray-400'
              }`}
            >
              <img
                src={slide.image}
                alt={`投影片 ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlideViewer 