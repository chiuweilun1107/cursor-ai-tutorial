import React from 'react'
import { CheckCircle, Play, FileText, Code, ExternalLink } from 'lucide-react'

const AdvancedCourse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              高
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">高級篇：企業級AI開發</h1>
              <p className="text-red-700">預計學習時間：2-3個月</p>
            </div>
          </div>
          
          <p className="text-gray-700">
            建立完整的AI開發工作流程，掌握企業級專案開發和系統架構設計能力
          </p>
        </div>

        {/* Coming Soon */}
        <div className="bg-white rounded-xl p-12 shadow-sm text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code className="text-red-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">高級課程開發中</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            高級課程將涵蓋AI工作流程設計、微服務架構、團隊協作最佳實務等企業級開發技能。
            適合有一定基礎的開發者進階學習。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-6 py-3">
              加入等候名單
            </button>
            <button className="btn-outline px-6 py-3">
              查看中級課程
            </button>
          </div>
        </div>

        {/* Course Outline Preview */}
        <div className="mt-8 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">課程大綱預覽</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">第5-8週：專業開發</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI工作流程設計</li>
                <li>• 團隊協作最佳實務</li>
                <li>• 效能優化策略</li>
                <li>• 安全性考量</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">第9-12週：企業應用</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 微服務架構設計</li>
                <li>• CI/CD整合</li>
                <li>• 監控與維護</li>
                <li>• 擴展性規劃</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedCourse
