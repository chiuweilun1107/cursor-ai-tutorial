import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'

const Courses: React.FC = () => {
  const courses = [
    {
      id: 'beginer',
      title: 'AI工具基礎',
      subtitle: 'AI應用入門與工具認知',
      duration: '2-3週',
      students: '2,847',
      level: 'beginner',
      color: 'green',
      description: '從AI應用思維開始，掌握Cursor、ChatGPT、Claude等核心AI工具的基礎使用',
      features: [
        'AI應用思維建立',
        'Cursor基礎操作與配置',
        'ChatGPT高效提示技巧',
        'Claude深度分析應用',
        '第一個AI輔助專案'
      ],
      projects: ['智能網頁生成', 'AI輔助代碼重構'],
      link: '/courses/beginner',
      improvement: '基礎效率提升40%'
    },
    {
      id: 'intermediate',
      title: 'AI工具深度整合',
      subtitle: 'MCP協議與多AI工具鏈',
      duration: '4-6週',
      students: '1,653',
      level: 'intermediate',
      color: 'blue',
      description: '深入MCP協議，建立多AI工具整合工作流程，掌握Cursor Rules深度配置',
      features: [
        'MCP協議理論與實踐',
        'Cursor Rules深度配置',
        '多AI工具整合策略',
        'GitHub、Slack、PostgreSQL連接',
        'Docker容器化MCP部署'
      ],
      projects: ['MCP服務器建立', '企業AI工作流程設計'],
      link: '/courses/intermediate',
      improvement: '開發效率提升126%'
    },
    {
      id: 'mcp',
      title: 'MCP技術',
      subtitle: 'Model Context Protocol 深度學習',
      description: '掌握 Anthropic 開源的 MCP 協議，實現 AI 工具與各種服務的無縫整合',
      level: 'advanced',
      duration: '2-3個月',
      students: 245,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['MCP協議', 'AI整合', '企業應用'],
      link: '/courses/mcp',
      instructor: 'MCP專家團隊'
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
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200', 
        badge: 'bg-blue-100 text-blue-800',
        button: 'bg-blue-600 hover:bg-blue-700',
        text: 'text-blue-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        badge: 'bg-purple-100 text-purple-800', 
        button: 'bg-purple-600 hover:bg-purple-700',
        text: 'text-purple-600'
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
            AI應用學習路徑
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            從基礎AI工具到企業級應用，掌握完整的AI工具生態系統與深度技術
          </p>
          <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">5,243</div>
              <div>學習者</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">92%</div>
              <div>完課率</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">66%</div>
              <div>效率提升</div>
            </div>
          </div>
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

                {/* Improvement Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} text-sm font-medium rounded-full border ${colors.border}`}>
                    {course.improvement}
                  </span>
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
                  to={course.id === 'beginer' ? '/course/stage1-beginner' : course.id === 'mcp' ? course.link : `/under-development/stage2-intermediate`}
                  className={`w-full flex items-center justify-center gap-2 ${colors.button} text-white px-6 py-3 rounded-lg font-medium transition-colors`}
                >
                  {course.id === 'beginer' ? '開始學習' : course.id === 'mcp' ? '了解更多' : '即將推出'}
                  <ArrowRight size={16} />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Learning Path Timeline */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">AI應用學習路徑</h2>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI工具基礎 (2-3週)</h3>
                    <p className="text-gray-600 mb-2">建立AI應用思維，掌握Cursor、ChatGPT、Claude等核心工具的基礎使用</p>
                    <div className="text-sm text-green-600 font-medium">基礎效率提升40%</div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI工具深度整合 (4-6週)</h3>
                    <p className="text-gray-600 mb-2">深入MCP協議，建立多AI工具整合工作流程，掌握Cursor Rules深度配置</p>
                    <div className="text-sm text-blue-600 font-medium">開發效率提升126%</div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">3</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">企業級AI應用 (2-3個月)</h3>
                    <p className="text-gray-600 mb-2">企業級AI應用架構設計，團隊協作工作流程，AI治理與安全合規</p>
                    <div className="text-sm text-purple-600 font-medium">團隊生產力提升66%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16 bg-gray-900 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-8 text-center">涵蓋技術棧</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">AI工具生態</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Cursor AI Editor</li>
                <li>• ChatGPT / GPT-4</li>
                <li>• Claude 3.5 Sonnet</li>
                <li>• GitHub Copilot</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">深度技術</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Model Context Protocol</li>
                <li>• Cursor Rules配置</li>
                <li>• MCP Server部署</li>
                <li>• Docker容器化</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">企業整合</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• GitHub / GitLab整合</li>
                <li>• Slack工作流程</li>
                <li>• PostgreSQL連接</li>
                <li>• CI/CD自動化</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
