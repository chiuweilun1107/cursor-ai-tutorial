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

  // 輪播內容 - AI應用平台的5個核心頁面
  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "AI應用時代",
      subtitle: "重新定義開發者的工作方式",
      description: "不只是代碼補全，而是完整的AI工作流程。掌握Cursor、ChatGPT、Claude的深度整合，讓AI成為你的智能工作夥伴。生產力提升66%，開啟7兆美元的AI應用市場。",
      bgGradient: "from-slate-900 via-blue-900 to-indigo-800",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      badge: "AI應用革命"
    },
    {
      id: 2,
      title: "Model Context Protocol",
      subtitle: "AI工具的連接標準",
      description: "Anthropic最新開源的MCP協議，讓AI工具像USB-C一樣通用。連接數據庫、API、檔案系統，打造真正強大的AI應用。支援GitHub、Slack、PostgreSQL等企業系統。",
      bgGradient: "from-purple-900 via-violet-800 to-blue-800",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      badge: "MCP技術深度"
    },
    {
      id: 3,
      title: "Cursor Rules",
      subtitle: "讓AI理解你的項目邏輯",
      description: "不只是代碼補全，而是讓AI深度理解你的項目架構、編碼風格、業務邏輯。透過Rules配置，打造專屬的AI開發助手。程式設計師效能提升126%。",
      bgGradient: "from-emerald-900 via-teal-800 to-cyan-800",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      badge: "超越代碼補全"
    },
    {
      id: 4,
      title: "AI工具生態",
      subtitle: "Cursor + ChatGPT + Claude",
      description: "學會整合多個AI工具的優勢：Cursor處理代碼、ChatGPT解決問題、Claude深度分析。建立個人AI工具鏈，40%的專業開發者都在使用多AI工具策略。",
      bgGradient: "from-orange-900 via-red-800 to-pink-800",
      image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      badge: "多AI工具整合"
    },
    {
      id: 5,
      title: "企業級AI應用",
      subtitle: "從個人效率到團隊協作",
      description: "企業如何系統性地導入AI工具，建立AI工作流程，提升整個團隊的協作效率和技術能力。92%的企業正在增加AI投資，搶佔先機。",
      bgGradient: "from-indigo-900 via-purple-800 to-pink-800",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      badge: "企業AI轉型"
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
    </section>
  )
}

export default HeroCarousel