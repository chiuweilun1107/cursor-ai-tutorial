import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { imageAssets } from '../../utils/imageAssets'

interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  price: string
  originalPrice: string
  progress: number
  daysLeft: number
  isHot: boolean
  isLimited: boolean
  instructor: string
  category: string
}

const LearningPathSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // 檢測螢幕大小
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const courses: Course[] = [
    {
      id: "stage1-beginner",
      title: "零基礎啟蒙",
      subtitle: "AI輔助開發入門，從零開始學習",
      description: "掌握AI對話技巧、學會使用ChatGPT與HTML、完成第一個網站專案",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center",
      price: "NT$ 2,999",
      originalPrice: "NT$ 4,999",
      progress: 125,
      daysLeft: 46,
      isHot: true,
      isLimited: true,
      instructor: "AI 教學團隊",
      category: "課程"
    },
    {
      id: "stage2-intermediate",
      title: "AI工具熟練",
      subtitle: "深度整合三大AI工具，建立工作流程",
      description: "配置Cursor Rules、整合ChatGPT API與Claude、建立AI開發工作流程",
      image: "/src/assets/images/heroes/hero-ai-tools.jpg",
      price: "NT$ 4,999",
      originalPrice: "NT$ 7,999",
      progress: 56,
      daysLeft: 32,
      isHot: true,
      isLimited: true,
      instructor: "資深AI工程師",
      category: "課程"
    },
    {
      id: "stage3-fullstack",
      title: "全端開發能力",
      subtitle: "現代Web應用開發，前後端完整技術棧",
      description: "掌握React、TypeScript、Node.js，建置完整全端應用專案",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=center",
      price: "NT$ 7,999",
      originalPrice: "NT$ 12,999",
      progress: 89,
      daysLeft: 26,
      isHot: true,
      isLimited: true,
      instructor: "全端架構師",
      category: "課程"
    },
    {
      id: "stage4-enterprise",
      title: "企業級技能",
      subtitle: "MCP協議與企業系統整合",
      description: "掌握MCP協議、Docker容器化、微服務架構設計與企業級開發實戰",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
      price: "NT$ 12,999",
      originalPrice: "NT$ 19,999",
      progress: 23,
      daysLeft: 18,
      isHot: true,
      isLimited: true,
      instructor: "企業架構師",
      category: "課程"
    },
    {
      id: "stage5-architect",
      title: "系統架構師",
      subtitle: "大型系統設計與技術領導",
      description: "系統架構設計、AI策略制定、團隊領導能力與技術決策實戰訓練",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=center",
      price: "NT$ 19,999",
      originalPrice: "NT$ 29,999",
      progress: 8,
      daysLeft: 12,
      isHot: true,
      isLimited: true,
      instructor: "技術總監",
      category: "課程"
    }
  ]

  // 計算可以滑動的最大索引，避免最後留白
  const cardWidth = isMobile ? 280 : 320 // 響應式卡片寬度
  const visibleCards = isMobile ? 1 : 3 // 手機顯示1張，桌面顯示3張
  const maxSlides = courses.length - visibleCards
  const maxIndex = Math.max(0, maxSlides)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  // 觸控事件處理
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return
    setIsDragging(true)
    setStartPos(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isMobile) return
    
    const currentPos = e.touches[0].clientX
    const diff = startPos - currentPos
    
    // 阻止默認滾動行為
    e.preventDefault()
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging || !isMobile) return
    
    setIsDragging(false)
    const endPos = e.changedTouches[0].clientX
    const diff = startPos - endPos
    
    // 滑動閾值
    const threshold = 50
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < maxIndex) {
        nextSlide()
      } else if (diff < 0 && currentIndex > 0) {
        prevSlide()
      }
    }
  }

  // 鼠標拖拽事件處理（桌面版）
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return
    setIsDragging(true)
    setStartPos(e.clientX)
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isMobile) return
    e.preventDefault()
    
    const x = e.clientX
    const diff = x - startPos
    
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - diff
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <section className="py-20 pb-60 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              從零基礎到系統架構師
            </h2>
            <p className="text-lg text-gray-600">
              五個階段的漸進式學習體系
            </p>
          </div>
          <Link 
            to="/courses" 
            className="text-blue-600 hover:text-blue-700 font-medium text-lg self-start md:self-auto"
          >
            查看所有課程 &gt;
          </Link>
        </div>
      </div>

      {/* Carousel Container - 優化滾動條和觸控 */}
      <div className="relative w-full">
        {/* Desktop Navigation Arrows - 只在非手機設備顯示 */}
        {!isMobile && currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {!isMobile && currentIndex < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {/* Cards Container - 優化溢出和滾動 */}
        <div 
          ref={carouselRef}
          className="overflow-hidden scrollbar-hide"
        >
          
          <div 
            className={`flex smooth-transform gap-4 md:gap-6 no-select ${
              isMobile ? 'mobile-spacing' : 'pl-8 md:pl-16'
            }`}
            style={{ 
              transform: `translateX(-${currentIndex * (cardWidth + (isMobile ? 16 : 24))}px)`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className={`flex-shrink-0 bg-white rounded-3xl shadow-md course-card-transition overflow-hidden group cursor-pointer no-select`}
                style={{ 
                  width: isMobile ? '280px' : '320px'
                }}
              >
                {/* Image Container - Apple style with larger image */}
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                  />
                  
                  {/* Limited Time Badge */}
                  {course.isLimited && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                      限時優惠
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {course.category}
                  </div>
                </div>

                {/* Content - More compact Apple style */}
                <div className="p-4 md:p-5">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                    {course.title}
                  </h3>

                  {/* Instructor - smaller and lighter */}
                  <p className="text-gray-500 text-sm mb-2 md:mb-3">
                    by {course.instructor}
                  </p>

                  {/* Learning Content Description */}
                  <div className="mb-3 md:mb-4">
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  {/* Price Section - 兩行佈局 */}
                  <div className="mb-3 md:mb-4">
                    {/* 第一行：現價 */}
                    <div className="mb-1">
                      <span className="text-2xl md:text-3xl font-bold text-gray-900">
                        {course.price}
                      </span>
                    </div>
                    
                    {/* 第二行：原價 + 熱門標籤 */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400 line-through">
                        {course.originalPrice}
                      </span>
                      {course.isHot && (
                        <div className="bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                          🔥 熱門
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Button - Apple style */}
                  <Link
                    to={course.id === 'stage1-beginner' ? `/course/${course.id}` : `/under-development/${course.id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-6 rounded-2xl transition-colors duration-200 text-center block text-base md:text-lg"
                  >
                    {course.id === 'stage1-beginner' ? '立即加入' : '即將推出'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default LearningPathSection