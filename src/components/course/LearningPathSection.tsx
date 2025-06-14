import React, { useState } from 'react'
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
      image: "/images/ai-tools-expert.jpg",
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
      image: "/images/pexels-mikael-blomkvist-6476808.jpg",
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
  const cardWidth = 320 // 卡片寬度 (w-80 = 320px) + gap
  const maxSlides = courses.length - 3 // 最多滑動到只剩3張卡片可見
  const maxIndex = Math.max(0, maxSlides)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-20 pb-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              從零基礎到系統架構師
            </h2>
            <p className="text-lg text-gray-600">
              五個階段的漸進式學習體系
            </p>
          </div>
          <Link 
            to="/courses" 
            className="text-blue-600 hover:text-blue-700 font-medium text-lg"
          >
            查看所有課程 &gt;
          </Link>
        </div>
      </div>

      {/* Carousel Container - 完全無邊界限制 */}
      <div className="relative w-full overflow-x-hidden">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {/* Right Arrow */}
        {currentIndex < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {/* Cards Container - 完全無邊界，左右可以延伸 */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6 pl-16"
            style={{ 
              transform: `translateX(-${currentIndex * cardWidth}px)`
            }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-80 bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Image Container - Apple style with larger image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {course.title}
                  </h3>

                  {/* Instructor - smaller and lighter */}
                  <p className="text-gray-500 text-sm mb-4">
                    by {course.instructor}
                  </p>

                  {/* Learning Content Description - 移除募資倒數區塊 */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Price Section - 兩行佈局 */}
                  <div className="mb-5">
                    {/* 第一行：現價 */}
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-gray-900">
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 text-center block text-lg"
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