import React from 'react'
import { CheckCircle, Play, FileText, Code, ExternalLink } from 'lucide-react'

const BeginnerCourse: React.FC = () => {
  const [completedLessons, setCompletedLessons] = React.useState<number[]>([])

  const toggleLesson = (lessonId: number) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const week1Lessons = [
    { id: 1, title: '安裝與設定Cursor', type: 'video', duration: '15分鐘' },
    { id: 2, title: '介面導覽與基本功能', type: 'video', duration: '20分鐘' },
    { id: 3, title: '第一次AI對話', type: 'hands-on', duration: '25分鐘' },
    { id: 4, title: '基本設定優化', type: 'text', duration: '10分鐘' },
  ]

  const week2Lessons = [
    { id: 5, title: 'AI Chat進階使用', type: 'video', duration: '30分鐘' },
    { id: 6, title: 'Tab補全技巧', type: 'hands-on', duration: '20分鐘' },
    { id: 7, title: '代碼解釋與學習', type: 'video', duration: '25分鐘' },
    { id: 8, title: '錯誤修正方法', type: 'hands-on', duration: '30分鐘' },
  ]

  const projects = [
    {
      id: 'project1',
      title: '建立第一個HTML頁面',
      description: '使用Cursor AI協助建立一個包含基本結構的HTML頁面',
      difficulty: '簡單',
      estimatedTime: '1小時'
    },
    {
      id: 'project2', 
      title: 'JavaScript互動網頁',
      description: '建立一個具有互動功能的網頁，包含按鈕點擊和動態內容',
      difficulty: '簡單',
      estimatedTime: '2小時'
    }
  ]

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play size={16} className="text-blue-600" />
      case 'hands-on': return <Code size={16} className="text-green-600" />
      case 'text': return <FileText size={16} className="text-gray-600" />
      default: return <FileText size={16} className="text-gray-600" />
    }
  }

  const progress = Math.round((completedLessons.length / 8) * 100)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              初
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">初級篇：Cursor基礎入門</h1>
              <p className="text-green-700">預計學習時間：1-2週</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>學習進度</span>
              <span>{progress}% 完成</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <p className="text-gray-700">
            從零開始學習Cursor AI的基本操作和核心功能，讓AI成為你的程式設計助手
          </p>
        </div>

        {/* Course Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Week 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">第1週：Cursor基礎</h2>
              <div className="space-y-4">
                {week1Lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`border rounded-lg p-4 transition-colors ${
                      completedLessons.includes(lesson.id) 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleLesson(lesson.id)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            completedLessons.includes(lesson.id)
                              ? 'bg-green-500 border-green-500'
                              : 'border-gray-300 hover:border-green-500'
                          }`}
                        >
                          {completedLessons.includes(lesson.id) && (
                            <CheckCircle size={16} className="text-white" />
                          )}
                        </button>
                        <div className="flex items-center gap-2">
                          {getLessonIcon(lesson.type)}
                          <span className="font-medium text-gray-900">{lesson.title}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                        <button className="text-blue-600 hover:text-blue-700">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">第2週：AI功能入門</h2>
              <div className="space-y-4">
                {week2Lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`border rounded-lg p-4 transition-colors ${
                      completedLessons.includes(lesson.id) 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleLesson(lesson.id)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            completedLessons.includes(lesson.id)
                              ? 'bg-green-500 border-green-500'
                              : 'border-gray-300 hover:border-green-500'
                          }`}
                        >
                          {completedLessons.includes(lesson.id) && (
                            <CheckCircle size={16} className="text-white" />
                          )}
                        </button>
                        <div className="flex items-center gap-2">
                          {getLessonIcon(lesson.type)}
                          <span className="font-medium text-gray-900">{lesson.title}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                        <button className="text-blue-600 hover:text-blue-700">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Goals */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">學習目標</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">熟悉Cursor介面和基本操作</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">能夠使用AI Chat解決簡單問題</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">掌握Tab補全提升效率</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">完成基礎網頁專案</span>
                </li>
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">學習前準備</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 基本電腦操作能力</li>
                <li>• 對程式設計有興趣（無需經驗）</li>
                <li>• 能夠安裝軟體</li>
                <li>• 具備基本英文閱讀能力</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">學習資源</h3>
              <div className="space-y-3">
                <a 
                  href="https://cursor.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  <ExternalLink size={14} />
                  Cursor官方網站
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  <FileText size={14} />
                  課程講義下載
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  <Code size={14} />
                  範例代碼庫
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">實作專案</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">預計時間：{project.estimatedTime}</span>
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                    開始專案 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeginnerCourse
