import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Edit3, Layers, Zap, TrendingUp, Clock, Users, BookOpen, Star, Play, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // 輪播內容
  const heroSlides = [
    {
      id: 1,
      title: "Cursor AI",
      subtitle: "讓AI成為你的程式設計夥伴",
      description: "學習最先進的AI輔助程式開發工具，從基礎操作到進階技巧，提升70%開發效率，成為AI時代的優秀開發者",
      bgGradient: "from-blue-600 via-purple-600 to-pink-500",
      badge: "🚀 掌握AI程式編輯器的未來",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      title: "AI輔助開發",
      subtitle: "效率提升70%的秘密",
      description: "專業開發者都在使用的AI工具，讓代碼編寫變得更智能、更快速。從簡單的自動完成到複雜的架構設計",
      bgGradient: "from-emerald-600 via-teal-600 to-cyan-500",
      badge: "⚡ 開發效率革命性提升",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 3,
      title: "未來技能",
      subtitle: "掌握AI時代的核心競爭力",
      description: "不只是工具，更是思維方式的轉變。學會與AI協作，成為新時代的技術領導者，開啟職業生涯新篇章",
      bgGradient: "from-orange-600 via-red-600 to-pink-600",
      badge: "🎯 未來已來，你準備好了嗎？",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ]

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // 5秒切換一次

    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-85`} />
            
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-40 right-1/3 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20 animate-fade-in">
                <Star className="w-4 h-4 mr-2 text-yellow-300" />
                {heroSlides[currentSlide].badge}
              </div>
              
              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
                {heroSlides[currentSlide].title}
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
                {heroSlides[currentSlide].description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up">
                <Link
                  to="/courses"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    開始學習
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                  <span className="flex items-center justify-center">
                    <Play className="mr-2 w-5 h-5" />
                    觀看介紹影片
                  </span>
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                  <div className="text-white/80">學習者</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80">實戰專案</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-white/80">滿意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-300 ease-linear"
            style={{
              width: `${((currentSlide + 1) / heroSlides.length) * 100}%`
            }}
          />
        </div>
      </section>

      {/* What is Cursor Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              什麼是Cursor？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cursor是一款革命性的AI輔助程式編輯器，讓您的開發效率翻倍
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Chat</h3>
                    <p className="text-gray-600 leading-relaxed">直接與AI對話解決程式問題，獲得即時的代碼建議和解釋，就像有個24小時的程式導師</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <Edit3 className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Inline Edit</h3>
                    <p className="text-gray-600 leading-relaxed">在代碼中直接進行AI修改，無需切換視窗，讓編程變得更加流暢自然</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <Layers className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Composer</h3>
                    <p className="text-gray-600 leading-relaxed">AI協助多檔案編輯，理解整個專案結構，讓大型專案開發變得簡單</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm">Cursor AI</span>
                </div>
                <div className="text-green-400 font-mono text-sm leading-relaxed">
                  <div className="mb-2 text-gray-400">// AI Chat 示範</div>
                  <div className="mb-2"><span className="text-blue-400">你:</span> 建立一個React登入表單</div>
                  <div className="mb-4"><span className="text-purple-400">AI:</span> 我來幫你建立...</div>
                  <div className="text-yellow-300">
                    {`function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <form className="space-y-4">
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="電子郵件"
        className="w-full p-3 border rounded-lg"
      />
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="密碼"
        className="w-full p-3 border rounded-lg"
      />
      <button type="submit">
        登入
      </button>
    </form>
  )
}`}
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Cursor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              為什麼選擇我們的課程？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              在AI時代，掌握AI輔助開發工具不再是選擇，而是必須
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">提升70%效率</h3>
              <p className="text-gray-600 leading-relaxed">研究顯示使用AI輔助工具可大幅提升開發效率，讓您的工作事半功倍</p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">節省學習時間</h3>
              <p className="text-gray-600 leading-relaxed">不再需要頻繁查找文檔，AI即時提供答案，大幅減少開發時間</p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100 transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI輔助學習</h3>
              <p className="text-gray-600 leading-relaxed">AI協助理解複雜概念，個人化學習路徑，讓學習更有效率</p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-300 border border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">未來技能</h3>
              <p className="text-gray-600 leading-relaxed">專業開發者在AI時代的核心競爭力，提升職場價值</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              三階段完整學習路徑
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              從零開始，循序漸進掌握Cursor AI的所有功能，成為AI時代的程式高手
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Beginner */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">初級篇</h3>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-1">
                    1-2週完成
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">學習內容：</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Cursor基礎操作與設定
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    AI Chat基礎使用技巧
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Tab補全功能掌握
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    第一個AI輔助專案
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">HTML網頁</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">JavaScript</span>
                </div>
              </div>

              <Link 
                to="/courses/beginner" 
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group-hover:shadow-lg"
              >
                開始學習
                <ArrowRight size={16} className="inline ml-2" />
              </Link>
            </div>

            {/* 中級和高級篇省略，與之前相同 */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">中級篇</h3>
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mt-1">
                    3-4週完成
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">學習內容：</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-yellow-500 mr-3 flex-shrink-0" />
                    Composer進階功能
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-yellow-500 mr-3 flex-shrink-0" />
                    多檔案AI專案管理
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-yellow-500 mr-3 flex-shrink-0" />
                    AI輔助除錯技巧
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-yellow-500 mr-3 flex-shrink-0" />
                    全端專案開發
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">資料庫</span>
                </div>
              </div>

              <Link 
                to="/courses/intermediate" 
                className="block w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-center py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 group-hover:shadow-lg"
              >
                查看課程
                <ArrowRight size={16} className="inline ml-2" />
              </Link>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">高級篇</h3>
                  <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mt-1">
                    2-3個月
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">學習內容：</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-red-500 mr-3 flex-shrink-0" />
                    AI工作流程設計
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-red-500 mr-3 flex-shrink-0" />
                    企業級開發技巧
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-red-500 mr-3 flex-shrink-0" />
                    系統架構設計
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-red-500 mr-3 flex-shrink-0" />
                    大型專案管理
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">微服務</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">CI/CD</span>
                </div>
              </div>

              <Link 
                to="/courses/advanced" 
                className="block w-full bg-gradient-to-r from-red-500 to-pink-600 text-white text-center py-3 rounded-xl font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 group-hover:shadow-lg"
              >
                查看課程
                <ArrowRight size={16} className="inline ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            準備好開始你的AI開發之旅了嗎？
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            加入我們的學習社群，與10,000+開發者一起成長，掌握未來的核心技能
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                立即開始學習
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/tips"
              className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              查看學習資源
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
