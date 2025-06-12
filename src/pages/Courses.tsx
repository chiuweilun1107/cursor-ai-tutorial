import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'

const Courses: React.FC = () => {
  const courses = [
    {
      id: 'beginner',
      title: '初級篇',
      subtitle: 'Cursor基礎入門',
      duration: '1-2週',
      students: '1,234',
      level: 'beginner',
      color: 'green',
      description: '從零開始學習Cursor AI的基本操作和核心功能',
      features: [
        'Cursor安裝與設定',
        'AI Chat基礎使用',
        'Tab補全技巧',
        '第一個AI輔助專案'
      ],
      projects: ['HTML頁面製作', 'JavaScript互動網頁'],
      link: '/courses/beginner'
    },
    {
      id: 'intermediate',
      title: '中級篇',
      subtitle: 'AI輔助開發進階',
      duration: '3-4週',
      students: '856',
      level: 'intermediate',
      color: 'yellow',
      description: '掌握Composer功能和多檔案AI編輯技巧',
      features: [
        'Composer進階功能',
        '多檔案專案管理',
        'AI輔助除錯',
        '代碼重構技巧'
      ],
      projects: ['Todo App全端開發', 'Blog系統開發'],
      link: '/courses/intermediate'
    },
    {
      id: 'advanced',
      title: '高級篇',
      subtitle: '企業級AI開發',
      duration: '2-3個月',
      students: '432',
      level: 'advanced',
      color: 'red',
      description: '建立完整的AI開發工作流程和企業級專案',
      features: [
        'AI工作流程設計',
        '微服務架構',
        '效能優化策略',
        '團隊協作最佳實務'
      ],
      projects: ['電商平台開發', '企業級系統開發'],
      link: '/courses/advanced'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        badge: 'bg-green-100 text-green-800',
        button: 'bg-green-600 hover:bg-green-700',
        text: 'text-green-600'
      },
      yellow: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200', 
        badge: 'bg-yellow-100 text-yellow-800',
        button: 'bg-yellow-600 hover:bg-yellow-700',
        text: 'text-yellow-600'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        badge: 'bg-red-100 text-red-800', 
        button: 'bg-red-600 hover:bg-red-700',
        text: 'text-red-600'
      }
    }
    return colorMap[color as keyof typeof colorMap]
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            課程總覽
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            循序漸進的學習路徑，從Cursor基礎到企業級AI開發技能
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => {
            const colors = getColorClasses(course.color)
            return (
              <div
                key={course.id}
                className={`${colors.bg} ${colors.border} border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow`}
              >
                {/* Course Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${colors.badge}`}>
                        {course.level}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600">{course.subtitle}</p>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{course.students} 學員</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6">{course.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">你將學到：</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className={colors.text} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">實作專案：</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.projects.map((project, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={course.link}
                  className={`w-full flex items-center justify-center gap-2 ${colors.button} text-white px-6 py-3 rounded-lg font-medium transition-colors`}
                >
                  開始學習
                  <ArrowRight size={16} />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Learning Path Timeline */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">學習路徑規劃</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-lg">1</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">初級篇 (1-2週)</h3>
                    <p className="text-gray-600">掌握Cursor基礎操作，學會AI Chat和Tab補全基本使用方法</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold text-lg">2</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">中級篇 (3-4週)</h3>
                    <p className="text-gray-600">深入學習Composer功能，掌握多檔案AI編輯和專案管理技巧</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">3</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">高級篇 (2-3個月)</h3>
                    <p className="text-gray-600">建立完整AI開發工作流程，具備企業級專案開發能力</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
