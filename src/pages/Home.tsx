import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Edit3, Layers, TrendingUp, Clock, Users, BookOpen, CheckCircle } from 'lucide-react'
import HeroCarousel from '../components/HeroCarousel'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* AI應用平台優勢 Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              AI應用平台優勢
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              基於真實數據的AI應用效能提升，重新定義開發者工作方式
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* 生產力提升 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <TrendingUp className="text-white" size={48} />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-4">66%</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">生產力提升</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                真實研究顯示，使用AI工具的員工平均生產力提升66%，相當於47年的自然生產力增長
              </p>
            </div>

            {/* 程式設計效能 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <BookOpen className="text-white" size={48} />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-4">126%</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">編程效率</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                程式設計師使用AI工具每週可完成126%更多專案，大幅縮短開發週期
              </p>
            </div>

            {/* 市場價值 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Users className="text-white" size={48} />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-4">$7T</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">市場規模</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Goldman Sachs估計GenAI將在未來10年創造7兆美元的全球GDP增長
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI應用數據 Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* 左側內容 */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                AI應用革命
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  正在發生
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                基於真實數據的AI應用效能，92%的企業正在增加AI投資。不要錯過這個改變遊戲規則的機會。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="text-lg text-gray-700">40%技能工作者效能提升（MIT研究）</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="text-lg text-gray-700">每日節省3小時工作時間（McKinsey）</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="text-lg text-gray-700">MCP協議連接所有AI工具生態</span>
                </div>
              </div>
            </div>

            {/* 右側圖片 */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                  alt="AI應用革命"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 浮動統計卡片 */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <div className="text-sm text-gray-600">企業增加AI投資</div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">效能提升</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI應用技術深度 Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              技術深度學習
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              從基礎工具到企業級AI應用，掌握完整的AI工具生態
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* MCP協議 */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-8">
                MCP
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Model Context Protocol</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Anthropic開源的MCP協議，讓AI工具像USB-C一樣通用。連接數據庫、API、檔案系統。
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-purple-500 mr-3" />
                  GitHub、Slack、PostgreSQL整合
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-purple-500 mr-3" />
                  Claude Desktop、Cursor支援
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-purple-500 mr-3" />
                  Docker容器化部署
                </div>
              </div>

              <Link 
                to="/courses/advanced" 
                className="block w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                深入MCP技術
              </Link>
            </div>

            {/* AI工具整合 */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-8">
                AI
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">多AI工具整合</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Cursor + ChatGPT + Claude，學會整合多個AI工具的優勢，建立個人AI工具鏈。
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-blue-500 mr-3" />
                  Cursor Rules深度配置
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-blue-500 mr-3" />
                  ChatGPT API整合
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-blue-500 mr-3" />
                  Claude工作流程設計
                </div>
              </div>

              <Link 
                to="/courses" 
                className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                探索AI生態
              </Link>
            </div>

            {/* 企業應用 */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-8">
                ENT
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">企業級應用</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                企業如何系統性地導入AI工具，建立AI工作流程，提升整個團隊的協作效率。
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-emerald-500 mr-3" />
                  團隊AI工作流程設計
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-emerald-500 mr-3" />
                  企業安全與合規
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={20} className="text-emerald-500 mr-3" />
                  ROI測量與優化
                </div>
              </div>

              <Link 
                to="/tips" 
                className="block w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                企業解決方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            準備好開始AI應用之旅了嗎？
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            加入AI應用平台，掌握未來的核心技術，與數十萬開發者一起探索AI的無限可能
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/courses"
              className="bg-white text-gray-900 px-12 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              立即開始學習
            </Link>
            <Link
              to="/tips"
              className="border-2 border-white/30 text-white px-12 py-5 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              探索技術資源
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home