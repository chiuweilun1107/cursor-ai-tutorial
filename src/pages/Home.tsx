import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Edit3, Layers, Zap, TrendingUp, Clock, Users, BookOpen } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                🚀 掌握AI程式編輯器的未來
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cursor AI
              <span className="block text-primary-600">讓AI成為你的程式設計夥伴</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              學習最先進的AI輔助程式開發工具，從基礎操作到進階技巧，
              提升70%開發效率，成為AI時代的優秀開發者
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="btn-primary px-8 py-3 text-lg"
              >
                開始學習
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="#what-is-cursor"
                className="btn-outline px-8 py-3 text-lg"
              >
                什麼是Cursor?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cursor Section */}
      <section id="what-is-cursor" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              什麼是Cursor？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cursor是一款革命性的AI輔助程式編輯器，基於VS Code但內建強大的AI功能，
              讓您可以用自然語言與AI對話來生成、修改和優化代碼
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">核心功能</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Chat</h4>
                    <p className="text-gray-600">直接與AI對話解決程式問題，獲得即時的代碼建議和解釋</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Edit3 className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Inline Edit</h4>
                    <p className="text-gray-600">在代碼中直接進行AI修改，無需切換視窗或複製貼上</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Layers className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Composer</h4>
                    <p className="text-gray-600">AI協助多檔案編輯，理解整個專案結構進行智能重構</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Zap className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Tab補全</h4>
                    <p className="text-gray-600">智能代碼自動完成，預測你的意圖並提供精準建議</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
              <div className="mb-4 text-gray-400">// AI Chat 範例</div>
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
      />
      // ... 更多代碼
    </form>
  )
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Cursor Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              為什麼要學習Cursor？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              在AI時代，掌握AI輔助開發工具不再是選擇，而是必須
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">提升70%效率</h3>
              <p className="text-gray-600">研究顯示使用AI輔助工具可大幅提升開發效率</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">減少查找時間</h3>
              <p className="text-gray-600">不再需要頻繁查找文檔，AI即時提供答案</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI輔助學習</h3>
              <p className="text-gray-600">AI協助理解複雜概念，加速技術學習</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">必備技能</h3>
              <p className="text-gray-600">專業開發者在AI時代的核心競爭力</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              三階段學習路徑
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              從零開始，循序漸進掌握Cursor AI的所有功能
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-3">初級篇</h3>
                <span className="ml-auto text-sm text-green-600 bg-green-100 px-2 py-1 rounded">1-2週</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Cursor基礎操作</li>
                <li>• AI Chat使用技巧</li>
                <li>• Tab補全最佳化</li>
                <li>• 簡單專案實作</li>
              </ul>
              <Link 
                to="/courses/beginner" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mt-4"
              >
                開始學習 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-3">中級篇</h3>
                <span className="ml-auto text-sm text-yellow-600 bg-yellow-100 px-2 py-1 rounded">3-4週</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Composer進階功能</li>
                <li>• 多檔案AI編輯</li>
                <li>• 除錯與優化</li>
                <li>• 中型專案開發</li>
              </ul>
              <Link 
                to="/courses/intermediate" 
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium mt-4"
              >
                查看課程 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-3">高級篇</h3>
                <span className="ml-auto text-sm text-red-600 bg-red-100 px-2 py-1 rounded">2-3個月</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• 自訂AI工作流程</li>
                <li>• 企業級開發技巧</li>
                <li>• 系統架構設計</li>
                <li>• 大型專案管理</li>
              </ul>
              <Link 
                to="/courses/advanced" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mt-4"
              >
                查看課程 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            準備好開始你的AI開發之旅了嗎？
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            加入我們，成為AI時代的程式設計專家
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            立即開始學習
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
