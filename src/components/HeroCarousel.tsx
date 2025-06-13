import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  bgGradient: string
  badge: string
  stats: {
    users: string
    projects: string
    satisfaction: string
  }
}

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // 輪播內容 - 5個精心設計的頁面
  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "Cursor AI",
      subtitle: "讓AI成為你的程式設計夥伴",
      description: "學習最先進的AI輔助程式開發工具，從基礎操作到進階技巧，提升70%開發效率，成為AI時代的優秀開發者",
      bgGradient: "from-blue-600 via-purple-600 to-pink-500",
      badge: "掌握AI程式編輯器的未來",
      stats: { users: "10,000+", projects: "50+", satisfaction: "95%" }
    },
    {
      id: 2,
      title: "AI輔助開發",
      subtitle: "效率提升70%的秘密",
      description: "專業開發者都在使用的AI工具，讓代碼編寫變得更智能、更快速。從簡單的自動完成到複雜的架構設計",
      bgGradient: "from-emerald-600 via-teal-600 to-cyan-500",
      badge: "開發效率革命性提升",
      stats: { users: "節省時間", projects: "智能建議", satisfaction: "即時回饋" }
    },
    {
      id: 3, 
      title: "未來技能",
      subtitle: "掌握AI時代的核心競爭力",
      description: "不只是工具，更是思維方式的轉變。學會與AI協作，成為新時代的技術領導者，開啟職業生涯新篇章",
      bgGradient: "from-orange-600 via-red-600 to-pink-600",
      badge: "未來已來，你準備好了嗎？",
      stats: { users: "技能升級", projects: "職涯躍進", satisfaction: "競爭優勢" }
    },
    {
      id: 4,
      title: "完整課程",
      subtitle: "從入門到精通的學習之路",
      description: "三階段完整課程設計，初級基礎操作、中級進階技巧、高級企業應用。每個階段都有實作專案，學以致用",
      bgGradient: "from-violet-600 via-purple-600 to-indigo-600",
      badge: "系統化學習路徑設計",
      stats: { users: "初級篇", projects: "中級篇", satisfaction: "高級篇" }
    },
    {
      id: 5,
      title: "學習社群",
      subtitle: "與萬名開發者一起成長",
      description: "加入活躍的學習社群，與同好交流心得、分享專案、解決問題。導師定期答疑，同儕互助學習",
      bgGradient: "from-pink-600 via-rose-600 to-red-600",
      badge: "與10,000+開發者共同學習",
      stats: { users: "活躍社群", projects: "互助學習", satisfaction: "導師指導" }
    }
  ]

  const SLIDE_DURATION = 6000 // 6秒切換
  const TRANSITION_DURATION = 800 // 0.8秒轉場

  // 進度條計算
  useEffect(() => {
    let progressTimer: NodeJS.Timeout
    
    if (isAutoPlay && !isPaused) {
      progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0
          }
          return prev + (100 / (SLIDE_DURATION / 100))
        })
      }, 100)
    }

    return () => {
      if (progressTimer) clearInterval(progressTimer)
    }
  }, [isAutoPlay, isPaused, currentSlide])

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
    setProgress(0)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }, [isTransitioning, heroSlides.length])

  // 切換到上一張
  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setProgress(0)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }, [isTransitioning, heroSlides.length])

  // 跳轉到指定頁面
  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return
    
    setIsTransitioning(true)
    setProgress(0)
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

  // 切換自動播放
  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
    setProgress(0)
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
        case ' ':
          event.preventDefault()
          toggleAutoPlay()
          break
        case 'Escape':
          setIsAutoPlay(false)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <section 
      className="relative h-screen overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="主要輪播內容"
      role="region"
    >
      {/* 背景漸變 */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          aria-hidden={index !== currentSlide}
        >
          {/* 漸變背景 */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />
          
          {/* 動態背景元素 */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-40 right-1/3 w-64 h-64 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-white/6 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>
        </div>
      ))}

      {/* 主要內容 */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            
            {/* 左側內容 */}
            <div className="text-left lg:text-left">
              {/* 徽章 */}
              <div 
                className={`inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20 transition-all duration-1000 ${
                  isTransitioning ? 'animate-slide-in-left' : 'animate-fade-in'
                }`}
              >
                {heroSlides[currentSlide].badge}
              </div>
              
              {/* 主標題 */}
              <h1 
                className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
                  isTransitioning ? 'animate-slide-up' : 'animate-fade-in'
                }`}
              >
                {heroSlides[currentSlide].title}
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mt-2">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>
              
              {/* 描述 */}
              <p 
                className={`text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed transition-all duration-1000 delay-200 ${
                  isTransitioning ? 'animate-fade-in-up' : 'animate-fade-in'
                }`}
              >
                {heroSlides[currentSlide].description}
              </p>
              
              {/* 按鈕群組 */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-400 ${
                  isTransitioning ? 'animate-fade-in-up' : 'animate-fade-in'
                }`}
              >
                <Link
                  to="/courses"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center hover-lift"
                >
                  開始學習
                </Link>
                <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
                  觀看介紹影片
                </button>
              </div>
            </div>

            {/* 右側統計卡片 */}
            <div 
              className={`hidden lg:flex flex-col justify-center space-y-6 transition-all duration-1000 delay-600 ${
                isTransitioning ? 'animate-slide-in-right' : 'animate-fade-in'
              }`}
            >
              <div className="grid grid-cols-1 gap-6">
                {Object.entries(heroSlides[currentSlide].stats).map(([key, value], index) => (
                  <div 
                    key={key}
                    className={`bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 transform hover:scale-105 transition-all duration-300 hover-lift delay-${index * 100}`}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{value}</div>
                      <div className="text-white/80 text-sm">
                        {key === 'users' ? '學習者 / 功能特色' : 
                         key === 'projects' ? '專案 / 優勢' : 
                         '滿意度 / 成果'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 手機版統計 */}
          <div className="lg:hidden mt-8 grid grid-cols-3 gap-4 animate-fade-in-up">
            {Object.entries(heroSlides[currentSlide].stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-white/80 text-xs">
                  {key === 'users' ? '學習者' : key === 'projects' ? '專案' : '滿意度'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 導航箭頭 */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group hidden md:block disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="上一張"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group hidden md:block disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="下一張"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* 點狀指示器 */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`relative w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
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

      {/* 進度條 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-white via-yellow-300 to-white transition-all duration-100 ease-linear"
          style={{
            width: `${progress}%`,
            transform: `translateX(${isTransitioning ? '-100%' : '0%'})`,
          }}
        />
      </div>

      {/* 控制面板 */}
      <div className="absolute top-8 right-8 z-20 flex items-center space-x-4">
        {/* 暫停指示器 */}
        {isPaused && (
          <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/30 flex items-center">
            已暫停
          </div>
        )}
        
        {/* 自動播放切換 */}
        <button
          onClick={toggleAutoPlay}
          className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm"
          aria-label={isAutoPlay ? '暫停自動播放' : '開始自動播放'}
        >
          {isAutoPlay ? '暫停' : '播放'}
        </button>
      </div>

      {/* 鍵盤提示 */}
      <div className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-sm text-white/70 px-3 py-2 rounded-lg text-xs hidden md:block">
        ← → 切換 • 空格鍵暫停
      </div>
    </section>
  )
}

export default HeroCarousel