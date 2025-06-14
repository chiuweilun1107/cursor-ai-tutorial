import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { 
  Construction, Clock, Bell, ArrowLeft, Home, 
  CheckCircle, Star, Calendar, Users
} from 'lucide-react'
import { Button, Card, CardContent, Badge } from '../components/ui'

const UnderDevelopment: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  
  // 課程資訊對應
  const courseInfo = {
    'stage2-intermediate': {
      title: '第二階段：AI工具熟練',
      subtitle: '深度掌握三大AI工具協作',
      expectedLaunch: '2024年2月',
      progress: 75,
      features: [
        'Cursor Rules深度配置',
        'ChatGPT API整合',
        'Claude代碼審查',
        'AI工作流程建立'
      ]
    },
    'stage3-fullstack': {
      title: '第三階段：全端開發能力',
      subtitle: '現代Web應用開發實戰',
      expectedLaunch: '2024年3月',
      progress: 45,
      features: [
        'React現代前端開發',
        'Node.js後端API',
        'MongoDB資料庫',
        'TypeScript進階應用'
      ]
    },
    'stage4-enterprise': {
      title: '第四階段：企業級技能',
      subtitle: 'MCP協議與企業系統整合',
      expectedLaunch: '2024年4月',
      progress: 25,
      features: [
        'MCP協議深度應用',
        'Taskmaster工作流程',
        'Docker容器化',
        '微服務架構設計'
      ]
    },
    'stage5-architect': {
      title: '第五階段：系統架構師',
      subtitle: '大型系統設計與技術領導',
      expectedLaunch: '2024年5月',
      progress: 15,
      features: [
        '大型系統架構設計',
        'AI驅動系統優化',
        '技術團隊領導',
        '企業AI策略制定'
      ]
    }
  }

  const course = courseInfo[id as keyof typeof courseInfo]

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">課程不存在</h2>
          <p className="text-gray-600 mb-6">抱歉，找不到您要查看的課程</p>
          <Link to="/courses">
            <Button>返回課程列表</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-orange-200 mb-6">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-4 h-4" />
              首頁
            </Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-white">課程</Link>
            <span>/</span>
            <span className="text-white">開發中</span>
          </nav>

          <div className="text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Construction className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              {course.subtitle}
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-8">
              <Clock className="w-5 h-5" />
              <span className="font-medium">課程開發中</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Left Column */}
            <div className="space-y-6">
              {/* Development Progress */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    開發進度
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">課程內容</span>
                      <span className="font-semibold text-gray-900">{course.progress}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      預計上線：{course.expectedLaunch}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">課程特色</h3>
                  <ul className="space-y-3">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Notification Signup */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-blue-500" />
                    搶先通知
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    課程上線時第一時間通知您，並享有早鳥優惠！
                  </p>
                  
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="請輸入您的Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <Button 
                      fullWidth 
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      訂閱通知
                    </Button>
                  </div>
                  
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-700">
                      🎁 訂閱者專屬：課程上線享有 <strong>20% 早鳥折扣</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Courses */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">推薦課程</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        第一階段：零基礎啟蒙
                      </h4>
                      <p className="text-sm text-blue-700 mb-3">
                        從零開始學習AI輔助開發，建立基礎能力
                      </p>
                      <Link to="/course/stage1-beginner">
                        <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                          立即學習
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        MCP協議專門課程
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        深入學習MCP協議的理論與實踐應用
                      </p>
                      <Link to="/courses/mcp">
                        <Button size="sm" variant="outline">
                          了解更多
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back to Courses */}
          <div className="mt-12 text-center">
            <Link to="/courses">
              <Button variant="outline" icon={ArrowLeft}>
                返回課程列表
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">常見問題</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Q: 課程什麼時候會上線？</h3>
              <p className="text-gray-600">
                我們預計在 {course.expectedLaunch} 正式上線。訂閱通知的用戶會在課程上線前一週收到通知。
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Q: 現在可以預購嗎？</h3>
              <p className="text-gray-600">
                目前暫不開放預購，但訂閱通知的用戶可以享有早鳥優惠。我們會在課程上線時第一時間通知您。
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Q: 需要先完成前面的課程嗎？</h3>
              <p className="text-gray-600">
                是的，我們建議按照階段順序學習。每個階段都建立在前一階段的基礎上，這樣學習效果會更好。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UnderDevelopment 