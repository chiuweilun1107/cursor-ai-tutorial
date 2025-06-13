import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Edit3, Layers, TrendingUp, Clock, Users, BookOpen, CheckCircle } from 'lucide-react'
import HeroCarousel from '../components/HeroCarousel'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* 產品特色 Section - 蘋果風格 */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              為什麼選擇 Cursor？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              革命性的AI程式編輯器，重新定義開發體驗
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* AI Chat */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <MessageCircle className="text-white" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Chat</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                直接與AI對話解決程式問題，獲得即時的代碼建議和解釋，就像有個24小時的程式導師
              </p>
            </div>

            {/* Inline Edit */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Edit3 className="text-white" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Inline Edit</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                在代碼中直接進行AI修改，無需切換視窗，讓編程變得更加流暢自然
              </p>
            </div>

            {/* Composer */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Layers className="text-white" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Composer</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                AI協助多檔案編輯，理解整個專案結構，讓大型專案開發變得簡單
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 效能提升 Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* 左側內容 */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                開發效率
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  提升 70%
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                專業開發者的選擇，讓AI成為你最得力的助手。從簡單的代碼補全到複雜的架構設計，全面提升你的開發體驗。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="text-lg text-gray-700">節省 70% 的代碼編寫時間</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="text-lg text-gray-700">減少 90% 的文檔查找時間</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="text-lg text-gray-700">提升 50% 的代碼質量</span>
                </div>
              </div>
            </div>

            {/* 右側圖片 */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="開發效率提升"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 浮動統計卡片 */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                <div className="text-sm text-gray-600">效率提升</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 學習路徑 Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              學習路徑
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              從零開始，循序漸進掌握Cursor AI的所有功能
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* 初級篇 */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-8">
                1
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">初級篇</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                掌握Cursor基礎操作，學會AI Chat和Tab補全功能，完成第一個AI輔助專案。
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-green-500 mr-3" />
                  Cursor基礎操作與設定
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-green-500 mr-3" />
                  AI Chat基礎使用技巧
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-green-500 mr-3" />
                  Tab補全功能掌握
                </div>
              </div>

              <Link 
                to="/courses/beginner" 
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                開始學習
              </Link>
            </div>

            {/* 中級篇 */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-8">
                2
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">中級篇</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                學習Composer進階功能，掌握多檔案AI專案管理和除錯技巧。
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-blue-500 mr-3" />
                  Composer進階功能
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-blue-500 mr-3" />
                  多檔案AI專案管理
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-blue-500 mr-3" />
                  AI輔助除錯技巧
                </div>
              </div>

              <Link 
                to="/courses/intermediate" 
                className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                查看課程
              </Link>
            </div>

            {/* 高級篇 */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-8">
                3
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">高級篇</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                掌握AI工作流程設計，學習企業級開發技巧和系統架構設計。
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-purple-500 mr-3" />
                  AI工作流程設計
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-purple-500 mr-3" />
                  企業級開發技巧
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-purple-500 mr-3" />
                  系統架構設計
                </div>
              </div>

              <Link 
                to="/courses/advanced" 
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                查看課程
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 蘋果風格 */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            準備好開始了嗎？
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            加入我們，掌握AI時代的核心技能
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/courses"
              className="bg-white text-gray-900 px-12 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              立即開始學習
            </Link>
            <Link
              to="/tips"
              className="border-2 border-white/30 text-white px-12 py-5 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300"
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