import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  bgGradient: string
  image: string
  badge: string
}

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // 輪播內容 - 5個精心設計的頁面，添加圖片
  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "Cursor AI",
      subtitle: "讓AI成為你的程式設計夥伴",
      description: "學習最先進的AI輔助程式開發工具，從基礎操作到進階技巧，提升開發效率，成為AI時代的優秀開發者。",
      bgGradient: "from-slate-900 to-slate-800",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: "最新技術"
    },
    {
      id: 2,
      title: "AI輔助開發",
      subtitle: "效率提升的秘密",
      description: "專業開發者都在使用的AI工具，讓代碼編寫變得更智能、更快速。從簡單的自動完成到複雜的架構設計。",
      bgGradient: "from-blue-900 to-indigo-800",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: "效率提升"
    },
    {
      id: 3,
      title: "未來技能",
      subtitle: "掌握AI時代的核心競爭力",
      description: "不只是工具，更是思維方式的轉變。學會與AI協作，成為新時代的技術領導者，開啟職業生涯新篇章。",
      bgGradient: "from-purple-900 to-pink-800",
      image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: "未來技能"
    },
    {
      id: 4,
      title: "完整課程",
      subtitle: "從入門到精通的學習之路",
      description: "三階段完整課程設計，初級基礎操作、中級進階技巧、高級企業應用。每個階段都有實作專案，學以致用。",
      bgGradient: "from-emerald-900 to-teal-800",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: "系統化學習"
    },
    {
      id: 5,
      title: "學習社群",
      subtitle: "與開發者一起成長",
      description: "加入活躍的學習社群，與同好交流心得、分享專案、解決問題。導師定期答疑，同儕互助學習。",
      bgGradient: "from-orange-900 to-red-800",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: "社群學習"
    }
  ]

  const SLIDE_DURATION = 5000 // 5秒切換
  const TRANSITION_DURATION = 600 // 0.6秒轉場

  // 自動播放控制
  useEffect(() => {
    let timer: NodeJS.Timeout
    
    if (isAutoPlay && !isPaused) {
      timer = setTimeout(() => {
        nextSlide()
      }, SLIDE_DURATION)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isAutoPlay, isPaused, currentSlide])

  // 切換到下一張
  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }, [isTransitioning, heroSlides.length])

  // 切換到上一張
  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }, [isTransitioning, heroSlides.length])

  // 跳轉到指定頁面
  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return
    
    setIsTransitioning(true)
    setCurrentSlide(index)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }, [isTransitioning, currentSlide])

  // 滑鼠懸停暫停
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  // 鍵盤導航
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          prevSlide()
          break
        case 'ArrowRight':
          event.preventDefault()
          nextSlide()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <section 
      className="relative h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 背景圖片 - 佈滿整個輪播區 */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* 背景圖片 */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          {/* 深色覆蓋層，讓文字更清晰 */}
          <div className="absolute inset-0 bg-black/40" />
          {/* 漸變覆蓋層 */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-60`} />
        </div>
      ))}

      {/* 文字內容 - 浮現在圖片之上 */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* 徽章 */}
            {heroSlides[currentSlide].badge && (
              <div 
                className={`inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30 transition-all duration-1000 ${
                  isTransitioning ? 'animate-fade-in-up' : 'animate-fade-in'
                }`}
              >
                {heroSlides[currentSlide].badge}
              </div>
            )}
            
            {/* 主標題 */}
            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
                isTransitioning ? 'animate-slide-up' : 'animate-fade-in'
              }`}
            >
              {heroSlides[currentSlide].title}
            </h1>
            
            {/* 副標題 */}
            <h2 
              className={`text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                isTransitioning ? 'animate-fade-in-up' : 'animate-fade-in'
              }`}
            >
              {heroSlides[currentSlide].subtitle}
            </h2>
            
            {/* 描述 */}
            <p 
              className={`text-lg md:text-xl text-white/80 mb-10 max-w-3xl leading-relaxed transition-all duration-1000 delay-400 ${
                isTransitioning ? 'animate-fade-in-up' : 'animate-fade-in'
              }`}
            >
              {heroSlides[currentSlide].description}
            </p>
            
            {/* 按鈕群組 */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                isTransitioning ? 'animate-fade-in-up' : 'animate-fade-in'
              }`}
            >
              <Link
                to="/courses"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                開始學習
              </Link>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 text-center">
                觀看介紹影片
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 導航箭頭 */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 點狀指示器 */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
            aria-label={`跳轉到第 ${index + 1} 張`}
          >
            {index === currentSlide && (
              <div 
                className="absolute inset-0 bg-white/30 rounded-full scale-150 animate-ping"
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>

      {/* 控制面板 */}
      <div className="absolute top-8 right-8 z-20 flex items-center space-x-4">
        {/* 暫停指示器 */}
        {(isPaused || !isAutoPlay) && (
          <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/30">
            已暫停
          </div>
        )}
      </div>

      {/* 鍵盤提示 */}
      <div className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-sm text-white/70 px-3 py-2 rounded-lg text-xs hidden md:block">
        ← → 切換頁面
      </div>
    </section>
  )
}

export default HeroCarousel