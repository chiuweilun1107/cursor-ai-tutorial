import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Edit3, Layers, Zap, TrendingUp, Clock, Users, BookOpen, Star, Play, CheckCircle } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/3 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              🚀 掌握AI程式編輯器的未來
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cursor AI
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                讓AI成為你的程式設計夥伴
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              學習最先進的AI輔助程式開發工具，從基礎操作到進階技巧，
              <span className="text-yellow-300 font-semibold">提升70%開發效率</span>，成為AI時代的優秀開發者
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
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

            {/* Intermediate */}
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

            {/* Advanced */}
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
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl"></div>
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
