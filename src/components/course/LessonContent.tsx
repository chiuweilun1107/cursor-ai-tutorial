import React from 'react'
import { Card, CardContent, Badge } from '../ui'
import { 
  Brain, Zap, Users, TrendingUp, Target, CheckCircle,
  ArrowRight, Star, Globe, Code, MessageCircle, Lightbulb,
  Rocket, DollarSign, Clock, Award, BarChart, Smartphone,
  Monitor, Laptop, Database, Cloud, Shield, GitBranch,
  PieChart, LineChart, Activity, Briefcase, GraduationCap,
  Coffee, PlayCircle, BookOpen, FileCode, Terminal, X,
  AlertTriangle, Calendar
} from 'lucide-react'

interface LessonContentProps {
  lessonId: string
}

const LessonContent: React.FC<LessonContentProps> = ({ lessonId }) => {
  
  // 根據lessonId渲染不同內容
  const renderContent = () => {
    switch (lessonId) {
      case 'stage1-lesson-1-1':
        return <Lesson1_1Content />
      case 'stage1-lesson-1-2':
        return <Lesson1_2Content />
      case 'stage1-lesson-1-3':
        return <Lesson1_3Content />
      default:
        return <DefaultContent />
    }
  }

  return (
    <div className="space-y-8">
      {renderContent()}
    </div>
  )
}

// 第1課：什麼是AI輔助開發？
const Lesson1_1Content = () => (
  <div className="space-y-8">
    {/* 標題頁 */}
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
      <CardContent className="p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">什麼是AI輔助開發？</h1>
        <p className="text-xl text-gray-600 mb-6">AI開發革命正在重塑整個科技產業</p>
        <Badge variant="info" className="text-base px-4 py-2">第1課 • 45分鐘</Badge>
      </CardContent>
    </Card>

    {/* 歡迎內容 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🌊 歡迎來到AI時代</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              歡迎來到AI輔助開發的世界！我們正站在一個史無前例的技術革命的起點。
              就在2022年底ChatGPT的發布，標誌著AI工具從實驗室走向了每個開發者的日常工作中。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              今天，我們將深入探索這個正在改變整個軟體開發行業的新範式。
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-lg">
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">全球趨勢</h3>
              <p className="text-gray-600">2022年底開始的AI革命正在改變一切</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 驚人數據 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 AI開發的驚人數據</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">130萬+</h3>
            <p className="text-gray-600">GitHub Copilot付費用戶</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">30億行</h3>
            <p className="text-gray-600">每月代碼建議數量</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">92%</h3>
            <p className="text-gray-600">企業增加AI工具投資</p>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 生產力提升數據</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">MIT & GitHub研究發現：</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />開發速度提升 <strong>55.8%</strong></li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />代碼品質沒有下降</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />工作滿意度顯著提高</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">McKinsey報告：</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />生產力提升 <strong>20-45%</strong></li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />年經濟貢獻 <strong>1.2-2兆美元</strong></li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />維護時間減少 <strong>30-50%</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 核心定義 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 什麼是AI輔助開發？</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">核心定義</h3>
          <p className="text-lg text-gray-700 mb-6">
            AI輔助開發是一種革命性的程式開發模式，它將人工智慧深度整合到軟體開發的每個環節：
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">🔸 傳統開發流程</h4>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>需求分析</span>
                <ArrowRight className="w-4 h-4" />
                <span>設計</span>
                <ArrowRight className="w-4 h-4" />
                <span>編碼</span>
                <ArrowRight className="w-4 h-4" />
                <span>測試</span>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">✨ AI輔助開發流程</h4>
              <div className="text-sm text-gray-600">
                智能需求分析 ↔ AI輔助設計 ↔ AI生成代碼 ↔ 自動化測試
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🤝 人機協作</h3>
            <p className="text-gray-600 text-sm">人類負責創意思考，AI負責代碼生成</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🧠 智能增強</h3>
            <p className="text-gray-600 text-sm">AI不是取代，而是讓開發者更強大</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🔄 持續學習</h3>
            <p className="text-gray-600 text-sm">AI工具會學習你的習慣並提供建議</p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 三大工具 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🛠️ 三大核心AI工具</h2>
        
        <div className="space-y-6">
          {/* ChatGPT */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">🤖 ChatGPT</h3>
                <p className="text-gray-600">你的AI程式導師</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">核心能力：</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-2" />概念解釋</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-2" />代碼生成</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-2" />除錯協助</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-2" />學習規劃</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">應用場景：</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>你：</strong>「請解釋什麼是API」</p>
                  <p><strong>ChatGPT：</strong>「API就像餐廳的菜單...」</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cursor */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">⚡ Cursor</h3>
                <p className="text-gray-600">AI原生的程式編輯器</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">革命性特色：</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Zap className="w-4 h-4 text-blue-500 mr-2" />上下文理解</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-blue-500 mr-2" />即時補全</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-blue-500 mr-2" />代碼重構</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-blue-500 mr-2" />多檔案編輯</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">核心功能：</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Tab補全：智能代碼補全</p>
                  <p>• Cmd+K：直接與AI對話</p>
                  <p>• Cmd+L：選擇代碼讓AI重寫</p>
                </div>
              </div>
            </div>
          </div>

          {/* Claude */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">🧠 Claude</h3>
                <p className="text-gray-600">深度分析專家</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">獨特優勢：</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Lightbulb className="w-4 h-4 text-purple-500 mr-2" />長文本處理</li>
                  <li className="flex items-center"><Lightbulb className="w-4 h-4 text-purple-500 mr-2" />代碼審查</li>
                  <li className="flex items-center"><Lightbulb className="w-4 h-4 text-purple-500 mr-2" />架構建議</li>
                  <li className="flex items-center"><Lightbulb className="w-4 h-4 text-purple-500 mr-2" />安全性專家</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">最佳應用：</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• 大型專案代碼審查</p>
                  <p>• 系統架構設計討論</p>
                  <p>• 代碼品質分析</p>
                  <p>• 技術文檔撰寫</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* AI輔助開發的實際效益 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🌟 AI輔助開發的實際效益</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* 量化效益 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">📈 量化效益</h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Rocket className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">開發速度提升</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>新功能開發：<strong>快40-60%</strong></div>
                  <div>除錯時間：<strong>減少50-70%</strong></div>
                  <div>代碼重構：<strong>快3-5倍</strong></div>
                  <div>文檔撰寫：<strong>快5-10倍</strong></div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-800">代碼品質改善</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>Bug數量：<strong>減少20-30%</strong></div>
                  <div>可讀性：<strong>提升35%</strong></div>
                  <div>測試覆蓋率：<strong>提升25%</strong></div>
                  <div>效能優化：<strong>提升15-25%</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* 質化效益 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">💡 質化效益</h3>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="font-semibold text-purple-800">學習加速</span>
                </div>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 新技術掌握時間縮短50%</li>
                  <li>• 複雜概念理解更容易</li>
                  <li>• 實時獲得最佳實踐建議</li>
                  <li>• 個人化學習路徑</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Coffee className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="font-semibold text-yellow-800">工作體驗改善</span>
                </div>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 減少重複性工作的挫折感</li>
                  <li>• 更多時間專注於創意和邏輯</li>
                  <li>• 提升工作成就感</li>
                  <li>• 降低技術學習門檻</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>


    {/* AI開發的未來趨勢 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 AI開發的未來趨勢</h2>
        
        <div className="space-y-8">
          {/* 短期趨勢 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">⚡ 短期趨勢（2024-2025）</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <GitBranch className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-blue-800">AI工具整合</span>
                  </div>
                  <p className="text-sm text-gray-600">更多IDE原生支援AI功能</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Target className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">專業化AI</span>
                  </div>
                  <p className="text-sm text-gray-600">針對特定程式語言的專門AI</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="font-semibold text-purple-800">團隊協作</span>
                  </div>
                  <p className="text-sm text-gray-600">AI輔助的代碼審查和協作</p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mr-2" />
                    <span className="font-semibold text-yellow-800">自動化測試</span>
                  </div>
                  <p className="text-sm text-gray-600">AI生成和執行測試用例</p>
                </div>
              </div>
            </div>
          </div>

          {/* 中期發展 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">🚀 中期發展（2025-2027）</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <ArrowRight className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <div className="font-semibold text-indigo-800 text-sm">端到端開發</div>
                <div className="text-xs text-gray-600 mt-1">從需求到部署的全流程AI輔助</div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <Activity className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-red-800 text-sm">智能除錯</div>
                <div className="text-xs text-gray-600 mt-1">AI自動定位和修復bug</div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <BarChart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800 text-sm">效能優化</div>
                <div className="text-xs text-gray-600 mt-1">AI自動優化代碼效能</div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800 text-sm">安全加固</div>
                <div className="text-xs text-gray-600 mt-1">AI自動檢測和修復安全漏洞</div>
              </div>
            </div>
          </div>

          {/* 長期展望 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">🌟 長期展望（2027+）</h3>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-800">自然語言程式設計</div>
                      <div className="text-sm text-gray-600">用白話文寫程式</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Brain className="w-6 h-6 text-purple-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-800">AI程式設計師</div>
                      <div className="text-sm text-gray-600">AI獨立完成複雜功能</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Database className="w-6 h-6 text-green-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-800">智能架構師</div>
                      <div className="text-sm text-gray-600">AI設計系統架構</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-800">自我進化代碼</div>
                      <div className="text-sm text-gray-600">代碼能自我優化和更新</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 立即行動計劃 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 立即行動：開始你的AI開發之旅</h2>
        
        <div className="space-y-8">
          {/* 第一步 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">📋 第一步：建立工具環境</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-green-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">註冊ChatGPT</span>
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 訪問 chat.openai.com</li>
                  <li>• 建議升級到Plus方案</li>
                  <li>• 探索GPT-4功能</li>
                </ul>
              </div>
              
              <div className="border border-blue-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">下載Cursor</span>
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 訪問 cursor.com</li>
                  <li>• 下載適合版本</li>
                  <li>• 完成基本設定</li>
                </ul>
              </div>
              
              <div className="border border-purple-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">體驗Claude</span>
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 訪問 claude.ai</li>
                  <li>• 註冊體驗免費版</li>
                  <li>• 了解分析能力</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 第二步 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">🎯 第二步：實際體驗練習</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">練習1：第一次AI對話</h4>
                <div className="text-sm text-gray-700 bg-white p-3 rounded border">
                  <p className="font-medium mb-1">嘗試這個對話：</p>
                  <p className="italic">「我是程式設計新手，想要學習網頁開發。請用簡單的比喻解釋什麼是前端、後端和資料庫，並給我一個學習路線圖。」</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">練習2：探索Cursor編輯器</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 創建一個新的HTML檔案</li>
                  <li>• 嘗試Tab補全功能</li>
                  <li>• 使用Cmd+K與AI對話</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">練習3：規劃學習路徑</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 寫下你的學習目標</li>
                  <li>• 列出想要建立的專案</li>
                  <li>• 制定4週的學習計劃</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 第三步 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">🤝 第三步：加入學習社群</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <PlayCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">YouTube頻道</div>
                  <div className="text-sm text-gray-600">關注AI開發相關頻道</div>
                </div>
                <div>
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Discord社群</div>
                  <div className="text-sm text-gray-600">加入AI開發討論群組</div>
                </div>
                <div>
                  <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">分享進度</div>
                  <div className="text-sm text-gray-600">記錄學習過程和心得</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 總結 */}
    <Card className="bg-gradient-to-br from-green-50 to-blue-50">
      <CardContent className="p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🎉 恭喜完成第一課！</h2>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">理解AI輔助開發</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">認識三大AI工具</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">了解實際效益</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">建立正確期望</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 下一課預告</h3>
          <p className="text-gray-700 mb-4">《認識你的數位助手》</p>
          <div className="flex justify-center space-x-4 text-sm text-gray-600">
            <span>• 如何與ChatGPT高效對話</span>
            <span>• CLEAR框架實際應用</span>
            <span>• 進階提示詞技巧</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
)

// 第2課：認識你的數位助手
const Lesson1_2Content = () => (
  <div className="space-y-8">
    {/* 標題頁 */}
    <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-l-4 border-l-purple-500">
      <CardContent className="p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">認識你的數位助手</h1>
        <p className="text-xl text-gray-600 mb-6">🌟 三大AI夥伴的奇幻世界</p>
        <Badge variant="info" className="text-base px-4 py-2">第2課 • 60分鐘</Badge>
      </CardContent>
    </Card>

    {/* 學習目標 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 本課學習目標</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <span className="text-lg text-gray-700">深度認識三大AI助手的背景故事和核心特色</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <span className="text-lg text-gray-700">掌握每個AI助手的專長領域和最佳使用情境</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <span className="text-lg text-gray-700">學會CLEAR框架和進階對話技巧</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <span className="text-lg text-gray-700">理解如何組合使用多個AI工具達到最佳效果</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* ChatGPT深度解析 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🧠 ChatGPT深度解析：不只是聊天機器人</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">技術原理簡介</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">ChatGPT基於大型語言模型（Large Language Model），它具備以下特點：</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Database className="w-5 h-5 text-blue-600 mr-3" />
                  <span>訓練了 <strong>數兆個參數</strong></span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-blue-600 mr-3" />
                  <span>學習了 <strong>網路上數百億頁面</strong> 的內容</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-3" />
                  <span>具備 <strong>多語言和跨領域</strong> 的知識</span>
                </div>
                <div className="flex items-center">
                  <Brain className="w-5 h-5 text-blue-600 mr-3" />
                  <span>能夠 <strong>理解上下文</strong> 並生成連貫回應</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 核心能力矩陣 */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">核心能力矩陣</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">🎓 教育與學習</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>概念解釋</strong>：將複雜技術概念轉化為易懂語言</li>
                  <li>• <strong>類比教學</strong>：用生活實例解釋抽象概念</li>
                  <li>• <strong>分層教學</strong>：根據學習者水平調整解釋深度</li>
                  <li>• <strong>蘇格拉底式對話</strong>：通過問答引導深度思考</li>
                </ul>
              </div>

              <div className="border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">🔍 問題解決</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>需求分析</strong>：幫助釐清模糊的問題描述</li>
                  <li>• <strong>方案設計</strong>：提供多種解決方案的比較</li>
                  <li>• <strong>風險評估</strong>：識別潛在的問題和挑戰</li>
                  <li>• <strong>資源推薦</strong>：建議相關的學習材料和工具</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">💻 程式開發</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>代碼生成</strong>：根據自然語言需求生成代碼</li>
                  <li>• <strong>代碼解釋</strong>：分析現有代碼的功能和邏輯</li>
                  <li>• <strong>除錯協助</strong>：定位錯誤並提供修復建議</li>
                  <li>• <strong>最佳實踐</strong>：提供行業標準的編程建議</li>
                </ul>
              </div>

              <div className="border border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-orange-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">📋 規劃與管理</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>學習路徑設計</strong>：制定個人化的學習計劃</li>
                  <li>• <strong>專案規劃</strong>：協助分解大型專案為可執行任務</li>
                  <li>• <strong>時間管理</strong>：優化學習和工作的時間安排</li>
                  <li>• <strong>進度追蹤</strong>：建立學習成果的評估標準</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* CLEAR框架 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🎨 CLEAR框架：高效AI對話的黃金法則</h2>
        
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-6">CLEAR框架是與AI進行高效對話的結構化方法，讓我們深入了解每個要素：</p>
          
          <div className="grid gap-6">
            {/* C - Context */}
            <div className="border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">C</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">📍 Context (上下文)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">為什麼重要：</h4>
                  <p className="text-gray-600 mb-4">AI需要理解你的背景和情境</p>
                  
                  <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                    <h5 className="font-medium text-red-800 mb-1">❌ 不清楚的上下文：</h5>
                    <p className="text-sm text-red-700">「我想學程式設計」</p>
                  </div>
                </div>
                
                <div>
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                    <h5 className="font-medium text-green-800 mb-1">✅ 清楚的上下文：</h5>
                    <p className="text-sm text-green-700">「我是金融背景的上班族，想要轉職成為前端工程師。我有基本的電腦操作能力，但完全沒有程式設計經驗。我每天下班後可以投入2-3小時學習，希望在6個月內達到能夠應徵初級前端職位的水平。」</p>
                  </div>
                </div>
              </div>
            </div>

            {/* L - Language */}
            <div className="border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">L</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">🌍 Language (語言風格)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">為什麼重要：</h4>
                  <p className="text-gray-600 mb-4">確保AI用適合你的方式回應</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">語言要求範例：</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 「請用繁體中文回答」</li>
                    <li>• 「用初學者能理解的簡單語言」</li>
                    <li>• 「避免過多專業術語，如果使用請解釋」</li>
                    <li>• 「用對話式的輕鬆語調」</li>
                    <li>• 「請提供逐步的詳細說明」</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* E - Example */}
            <div className="border border-purple-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">E</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">💡 Example (具體範例)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">為什麼重要：</h4>
                  <p className="text-gray-600 mb-4">具體例子比抽象說明更容易理解</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">要求範例的方式：</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 「請提供具體的代碼範例」</li>
                    <li>• 「用一個實際的網站作為例子」</li>
                    <li>• 「給我一個類似於[知名網站]的範例」</li>
                    <li>• 「用日常生活的例子來解釋」</li>
                    <li>• 「提供最少3個不同的例子」</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* A - Audience */}
            <div className="border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">👥 Audience (目標對象)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">為什麼重要：</h4>
                  <p className="text-gray-600 mb-4">讓AI調整回應的複雜度和深度</p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">對象描述範例：</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 「我是完全的新手」</li>
                    <li>• 「我有基礎的HTML知識」</li>
                    <li>• 「我是有經驗的後端工程師想學前端」</li>
                    <li>• 「請用適合高中生理解的方式解釋」</li>
                    <li>• 「我需要能向老闆報告的商業角度解釋」</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* R - Requirements */}
            <div className="border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">R</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">🎯 Requirements (具體要求)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">為什麼重要：</h4>
                  <p className="text-gray-600 mb-4">明確的要求得到精確的回應</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">明確要求範例：</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 「我需要一個完整的HTML檔案」</li>
                    <li>• 「請包含注釋解釋每行代碼」</li>
                    <li>• 「提供3種不同的實作方法」</li>
                    <li>• 「請說明優缺點和適用情境」</li>
                    <li>• 「包含錯誤處理的部分」</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* CLEAR框架實戰範例 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🔥 CLEAR框架實戰範例</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">情境：學習JavaScript函數</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-3">❌ 不好的問題：</h4>
                <div className="bg-white p-3 rounded border text-sm text-gray-700">
                  什麼是JavaScript函數？
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-3">✅ 優化後的問題：</h4>
                <div className="bg-white p-4 rounded border text-sm text-gray-700 space-y-2">
                  <p><strong>【上下文】</strong> 我是程式設計新手，剛學會HTML和CSS基礎，現在想要為我的網頁加入互動功能。</p>
                  <p><strong>【語言】</strong> 請用繁體中文，用初學者能理解的簡單語言回答，避免過多專業術語。</p>
                  <p><strong>【範例】</strong> 請提供至少3個具體的JavaScript函數例子，包含一個按鈕點擊效果的實例。</p>
                  <p><strong>【對象】</strong> 我是完全沒有程式設計背景的初學者，需要很詳細的解釋。</p>
                  <p><strong>【要求】</strong><br/>
                  1. 解釋什麼是JavaScript函數以及為什麼需要它<br/>
                  2. 提供完整的代碼範例，包含HTML部分<br/>
                  3. 逐行解釋代碼的作用<br/>
                  4. 說明常見的錯誤和如何避免<br/>
                  5. 建議後續的學習步驟</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 總結 */}
    <Card className="bg-gradient-to-br from-green-50 to-blue-50">
      <CardContent className="p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🎉 恭喜掌握AI對話技巧！</h2>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">掌握CLEAR框架</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">理解ChatGPT能力</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">建立協作關係</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">提升對話效率</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 下一課預告</h3>
          <p className="text-gray-700 mb-4">《建立學習心態》</p>
          <div className="flex justify-center space-x-4 text-sm text-gray-600">
            <span>• AI時代的學習心態轉變</span>
            <span>• 克服學習障礙的策略</span>
            <span>• 建立持續學習的習慣</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
)

// 第3課：建立學習心態
const Lesson1_3Content = () => (
  <div className="space-y-8">
    {/* 標題頁 */}
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-l-purple-500">
      <CardContent className="p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">建立學習心態</h1>
        <p className="text-xl text-gray-600 mb-6">🧠 AI時代的學習心態轉變與成長策略</p>
        <Badge variant="warning" className="text-base px-4 py-2">第3課 • 40分鐘</Badge>
      </CardContent>
    </Card>

    {/* 學習目標 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 本課學習目標</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <span className="text-lg text-gray-700">建立適應AI時代的正確學習心態</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <span className="text-lg text-gray-700">克服學習AI工具的常見心理障礙</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <span className="text-lg text-gray-700">掌握持續學習和適應變化的方法</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <span className="text-lg text-gray-700">建立個人成長和職涯發展規劃</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* AI時代的心態轉變 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🔄 AI時代的心態轉變</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">從傳統學習到AI協作學習</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="text-xl font-semibold text-red-800 mb-4">❌ 傳統學習心態</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  認為必須「記住」所有知識
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  害怕犯錯，追求完美
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  線性學習，按部就班
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  獨立解決所有問題
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  擔心被AI取代
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="text-xl font-semibold text-green-800 mb-4">✅ AI協作學習心態</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  重視「理解」概念和邏輯
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  擁抱錯誤，快速迭代
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  項目導向，邊做邊學
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  善用AI工具協作
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  學會與AI共同成長
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 新學習模式 */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">🚀 新時代學習模式：FAST框架</h3>
          <div className="grid gap-6">
            <div className="border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">F</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">🎯 Focus (專注)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-4">專注於解決實際問題，而非學習抽象概念</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-2">實踐方法：</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 從具體專案開始學習</li>
                      <li>• 聚焦於當前需要的技能</li>
                      <li>• 避免學習太多理論知識</li>
                      <li>• 優先解決眼前的問題</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-gray-800 mb-2">✅ 正確做法：</h5>
                  <p className="text-sm text-green-700 mb-3">「我要做一個個人網站，讓我學習需要的HTML、CSS」</p>
                  <h5 className="font-medium text-gray-800 mb-2">❌ 錯誤做法：</h5>
                  <p className="text-sm text-red-700">「讓我先學完所有前端基礎再開始做專案」</p>
                </div>
              </div>
            </div>

            <div className="border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">🤖 AI-Assisted (AI輔助)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-4">充分利用AI工具加速學習和解決問題</p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium text-green-800 mb-2">AI協作策略：</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• AI負責生成基礎代碼</li>
                      <li>• 人類負責理解和優化</li>
                      <li>• AI解釋複雜概念</li>
                      <li>• 人類思考應用場景</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-gray-800 mb-2">高效AI對話例子：</h5>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p><strong>你：</strong>「我想做一個響應式導航選單，請生成代碼並解釋每個部分的作用」</p>
                    <p><strong>AI：</strong>提供代碼 + 詳細解釋</p>
                    <p><strong>你：</strong>「如果我想要添加下拉功能該怎麼修改？」</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-purple-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">🔄 Spiral (螺旋式)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-4">螺旋式學習：不斷回顧和深化理解</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-medium text-purple-800 mb-2">螺旋學習法：</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 第1輪：快速實作，不求甚解</li>
                      <li>• 第2輪：理解原理，優化代碼</li>
                      <li>• 第3輪：掌握最佳實踐</li>
                      <li>• 第4輪：教學他人，鞏固知識</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-gray-800 mb-2">學習JavaScript例子：</h5>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p><strong>第1輪：</strong>會用基本語法寫簡單功能</p>
                    <p><strong>第2輪：</strong>理解變數作用域和函數概念</p>
                    <p><strong>第3輪：</strong>掌握ES6語法和最佳實踐</p>
                    <p><strong>第4輪：</strong>能夠教導其他初學者</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">T</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">📈 Tracking (追蹤)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-4">追蹤學習進度，及時調整學習策略</p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-medium text-orange-800 mb-2">追蹤指標：</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 完成的專案數量</li>
                      <li>• 解決問題的速度</li>
                      <li>• 學習新概念的理解度</li>
                      <li>• AI協作的熟練度</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-gray-800 mb-2">週報告範例：</h5>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p><strong>本週完成：</strong>個人作品集網站</p>
                    <p><strong>學會技能：</strong>響應式設計、Git版本控制</p>
                    <p><strong>遇到困難：</strong>CSS布局問題</p>
                    <p><strong>AI協助：</strong>解決了3個技術難題</p>
                    <p><strong>下週目標：</strong>加入JavaScript互動功能</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 克服學習障礙 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">💪 克服常見學習障礙</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">🧠 心理障礙與解決方案</h3>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* 冒牌者症候群 */}
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
                  <h4 className="text-xl font-semibold text-yellow-800">冒牌者症候群</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-yellow-800 mb-2">症狀表現：</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 「我配不上程式設計師這個身份」</li>
                      <li>• 「我只是在用AI，不是真正的開發」</li>
                      <li>• 「別人會發現我不懂很多基礎知識」</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-medium text-green-800 mb-2">✅ 解決策略：</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 記住：每個人都有學習過程</li>
                      <li>• AI是工具，思考仍然是你的</li>
                      <li>• 專注於能夠解決的問題</li>
                      <li>• 記錄每一個小進步</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 技術恐懼症 */}
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-red-600 mr-3" />
                  <h4 className="text-xl font-semibold text-red-800">技術恐懼症</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">症狀表現：</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 「程式設計太複雜，我學不會」</li>
                      <li>• 「我數學不好，不適合寫程式」</li>
                      <li>• 「AI這麼聰明，我還需要學嗎？」</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-medium text-green-800 mb-2">✅ 解決策略：</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 從小專案開始建立信心</li>
                      <li>• 現代開發更注重邏輯思維</li>
                      <li>• AI讓學習變得更容易</li>
                      <li>• 找到學習夥伴互相鼓勵</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 完美主義陷阱 */}
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-purple-600 mr-3" />
                  <h4 className="text-xl font-semibold text-purple-800">完美主義陷阱</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-purple-800 mb-2">症狀表現：</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 代碼不夠完美就不敢展示</li>
                      <li>• 要學會所有基礎才敢做專案</li>
                      <li>• 害怕犯錯，不敢嘗試新技術</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-medium text-green-800 mb-2">✅ 解決策略：</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 擁抱「足夠好」的理念</li>
                      <li>• 快速迭代勝過完美規劃</li>
                      <li>• 錯誤是學習的最佳機會</li>
                      <li>• 設定最小可行版本目標</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 學習倦怠 */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <Coffee className="w-6 h-6 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold text-blue-800">學習倦怠</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">症狀表現：</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 學習動機下降，感到疲憊</li>
                      <li>• 覺得進步緩慢，失去信心</li>
                      <li>• 想要放棄，回到舒適圈</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-medium text-green-800 mb-2">✅ 解決策略：</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 調整學習節奏，適度休息</li>
                      <li>• 回顧已經取得的成就</li>
                      <li>• 尋找新的學習動機</li>
                      <li>• 改變學習方式和環境</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 建立成長心態 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🌱 建立成長心態</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">固定心態 vs 成長心態</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <X className="w-6 h-6 text-red-500 mr-2" />
                  固定心態
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">面對挑戰：</h5>
                    <p className="text-sm text-gray-600">「這太難了，我不適合程式設計」</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">面對失敗：</h5>
                    <p className="text-sm text-gray-600">「我就是沒有程式天賦」</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">面對批評：</h5>
                    <p className="text-sm text-gray-600">「他們在攻擊我的能力」</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">努力觀念：</h5>
                    <p className="text-sm text-gray-600">「需要努力表示我不夠聰明」</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  成長心態
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">面對挑戰：</h5>
                    <p className="text-sm text-gray-600">「這是學習新技能的好機會」</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">面對失敗：</h5>
                    <p className="text-sm text-gray-600">「失敗教會我如何改進」</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">面對批評：</h5>
                    <p className="text-sm text-gray-600">「回饋幫助我成長得更好」</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">努力觀念：</h5>
                    <p className="text-sm text-gray-600">「努力是掌握技能的途徑」</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 成長心態實踐方法 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">🎯 成長心態實踐方法</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    日常練習
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span className="text-sm">將「我不會」改為「我還不會」</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span className="text-sm">每天記錄一個新學到的東西</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span className="text-sm">主動尋求回饋和建議</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span className="text-sm">慶祝小進步和里程碑</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    思維重塑
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <p className="text-sm text-gray-600 mb-1"><strong>原來想法：</strong>「這個錯誤好糗」</p>
                      <p className="text-sm text-green-600"><strong>重塑想法：</strong>「這個錯誤教會我新知識」</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="text-sm text-gray-600 mb-1"><strong>原來想法：</strong>「我學得太慢了」</p>
                      <p className="text-sm text-green-600"><strong>重塑想法：</strong>「每個人的節奏不同」</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    社群學習
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span className="text-sm">加入學習社群分享進度</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span className="text-sm">向其他學習者請教問題</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span className="text-sm">幫助解答初學者問題</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span className="text-sm">組織學習小組互相監督</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    成就系統
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white p-2 rounded">
                      <span className="text-sm text-gray-700">完成第一個專案</span>
                      <Badge variant="success" size="sm">🏆</Badge>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2 rounded">
                      <span className="text-sm text-gray-700">連續學習7天</span>
                      <Badge variant="warning" size="sm">🔥</Badge>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2 rounded">
                      <span className="text-sm text-gray-700">解決第一個bug</span>
                      <Badge variant="info" size="sm">🐛</Badge>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2 rounded">
                      <span className="text-sm text-gray-700">幫助他人解決問題</span>
                      <Badge variant="secondary" size="sm">🤝</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 持續學習策略 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🔄 建立持續學習習慣</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">⏰ 學習時間管理</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-green-800 mb-2">番茄鐘學習法</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>25分鐘專注學習</p>
                  <p>5分鐘休息</p>
                  <p>4輪後長休息15-30分鐘</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-blue-800 mb-2">時間塊分配</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>晨間1小時：理論學習</p>
                  <p>午間30分鐘：複習回顧</p>
                  <p>晚間1小時：實作練習</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <BarChart className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-purple-800 mb-2">進度追蹤</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>每日學習記錄</p>
                  <p>週進度檢討</p>
                  <p>月度目標調整</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">📋 個人學習計劃模板</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">🎯 目標設定（SMART原則）</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">S - Specific (具體)</h5>
                      <p className="text-sm text-gray-600">「學習React開發」→「建立一個Todo應用程式」</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">M - Measurable (可衡量)</h5>
                      <p className="text-sm text-gray-600">「完成3個React專案，每個包含至少5個功能」</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">A - Achievable (可達成)</h5>
                      <p className="text-sm text-gray-600">「基於現有HTML/CSS基礎，循序漸進學習」</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">R - Relevant (相關)</h5>
                      <p className="text-sm text-gray-600">「與前端工程師職涯目標相關」</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">T - Time-bound (有時限)</h5>
                      <p className="text-sm text-gray-600">「2個月內完成所有目標」</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">📅 學習計劃範例</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">第1-2週：React基礎</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• JSX語法和組件概念</li>
                        <li>• State和Props的使用</li>
                        <li>• 事件處理和條件渲染</li>
                        <li>• 專案：簡單的計數器應用</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">第3-4週：進階功能</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Hooks（useState, useEffect）</li>
                        <li>• 表單處理和驗證</li>
                        <li>• API資料獲取</li>
                        <li>• 專案：Todo清單應用</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">第5-6週：實戰專案</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 路由和多頁面應用</li>
                        <li>• 狀態管理和Context</li>
                        <li>• 樣式和UI框架整合</li>
                        <li>• 專案：個人部落格網站</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">第7-8週：優化與部署</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 效能優化技巧</li>
                        <li>• 測試和除錯</li>
                        <li>• 部署到雲端平台</li>
                        <li>• 專案：作品集網站完善</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 職涯發展規劃 */}
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 職涯發展規劃</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">💼 AI時代的職涯路徑</h3>
            <div className="grid gap-6">
              <div className="border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">🎓 AI輔助開發新手</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">核心技能：</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 熟練使用ChatGPT解決問題</li>
                      <li>• 掌握Cursor基本功能</li>
                      <li>• 能夠完成簡單網頁專案</li>
                      <li>• 理解基本程式設計概念</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">時間規劃：</h5>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p><strong>學習時間：</strong>1-3個月</p>
                      <p><strong>每日投入：</strong>1-2小時</p>
                      <p><strong>學習成果：</strong>3-5個小專案</p>
                      <p><strong>技能水平：</strong>能解決基本問題</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-green-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">💻 AI協作開發者</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">核心技能：</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 熟練使用多種AI工具</li>
                      <li>• 掌握前端或後端技術棧</li>
                      <li>• 能夠獨立完成中型專案</li>
                      <li>• 具備代碼審查和優化能力</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">職業發展：</h5>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p><strong>就業機會：</strong>初級前/後端工程師</p>
                      <p><strong>薪資範圍：</strong>35-50K（新台幣）</p>
                      <p><strong>工作內容：</strong>功能開發、bug修復</p>
                      <p><strong>成長空間：</strong>技術專家或團隊領導</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">🎯 AI原生工程師</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">核心技能：</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 精通AI輔助開發工作流程</li>
                      <li>• 能夠設計和實現複雜系統</li>
                      <li>• 擁有多技術棧整合能力</li>
                      <li>• 具備團隊領導和技術決策能力</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">職業前景：</h5>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p><strong>職位級別：</strong>中高級工程師、技術主管</p>
                      <p><strong>薪資範圍：</strong>60-100K+（新台幣）</p>
                      <p><strong>工作內容：</strong>架構設計、團隊培訓</p>
                      <p><strong>發展方向：</strong>技術總監、創業</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Rocket className="w-8 h-8 text-orange-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">🌟 AI創新領導者</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">核心能力：</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 推動AI工具和流程創新</li>
                      <li>• 跨領域整合和商業思維</li>
                      <li>• 團隊建設和文化塑造</li>
                      <li>• 技術趨勢預判和戰略規劃</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">影響力範圍：</h5>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p><strong>組織層級：</strong>CTO、技術合夥人</p>
                      <p><strong>價值創造：</strong>推動行業變革</p>
                      <p><strong>社會影響：</strong>培養下一代AI開發者</p>
                      <p><strong>個人品牌：</strong>技術專家、意見領袖</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">📈 技能發展路線圖</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">基礎技能建立（1-3個月）</h4>
                    <p className="text-sm text-gray-600">AI工具熟練度 + 基本程式設計概念 + 簡單專案實作</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">技術深化（3-6個月）</h4>
                    <p className="text-sm text-gray-600">選擇技術棧深入學習 + 中型專案開發 + 代碼品質提升</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">系統整合（6-12個月）</h4>
                    <p className="text-sm text-gray-600">全端開發能力 + 系統架構設計 + 團隊協作經驗</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">領導創新（1年以上）</h4>
                    <p className="text-sm text-gray-600">技術領導力 + 創新思維 + 商業理解 + 團隊建設</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 總結 */}
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
      <CardContent className="p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🎉 恭喜建立成長心態！</h2>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">建立正確心態</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">克服學習障礙</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">掌握學習方法</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-semibold">規劃職涯發展</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 下一課預告</h3>
          <p className="text-gray-700 mb-4">《Cursor深度教學》</p>
          <div className="flex justify-center space-x-4 text-sm text-gray-600">
            <span>• Cursor完整功能介紹</span>
            <span>• 高效編程技巧</span>
            <span>• 實戰項目演練</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
)

const DefaultContent = () => (
  <Card>
    <CardContent className="p-8 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">課程內容</h1>
      <p className="text-lg text-gray-600">課程內容開發中...</p>
    </CardContent>
  </Card>
)

export default LessonContent