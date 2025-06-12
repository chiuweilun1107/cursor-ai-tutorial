import React from 'react'
import { CheckCircle, Play, FileText, Code, ExternalLink } from 'lucide-react'

const IntermediateCourse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              中
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">中級篇：AI輔助開發進階</h1>
              <p className="text-yellow-700">預計學習時間：3-4週</p>
            </div>
          </div>
          
          <p className="text-gray-700">
            深入學習Composer功能和多檔案AI編輯技巧，掌握AI輔助的專案開發流程
          </p>
        </div>

        {/* Coming Soon */}
        <div className="bg-white rounded-xl p-12 shadow-sm text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code className="text-yellow-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">課程內容準備中</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            我們正在精心製作中級課程內容，包含Composer進階功能、多檔案專案管理、
            AI輔助除錯等實用技巧。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-6 py-3">
              訂閱更新通知
            </button>
            <button className="btn-outline px-6 py-3">
              先完成初級課程
            </button>
          </div>
        </div>

        {/* Course Outline Preview */}
        <div className="mt-8 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">課程大綱預覽</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">第3週：Composer功能</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Composer介紹與設定</li>
                <li>• 多檔案專案管理</li>
                <li>• 代碼重構技巧</li>
                <li>• AI輔助除錯</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">第4週：進階AI應用</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 自訂提示詞技巧</li>
                <li>• 代碼審查與優化</li>
                <li>• 測試代碼生成</li>
                <li>• 文檔自動生成</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntermediateCourse
