import React from 'react'
import { Keyboard, Lightbulb, Code, Zap, AlertCircle, TrendingUp } from 'lucide-react'

const Tips: React.FC = () => {
  const shortcuts = [
    { keys: 'Ctrl + K', description: '開啟AI Chat' },
    { keys: 'Ctrl + L', description: '選擇全部代碼進行AI編輯' },
    { keys: 'Tab', description: '接受AI建議' },
    { keys: 'Ctrl + I', description: '啟動Inline Edit' },
    { keys: 'Ctrl + Shift + L', description: '選擇多行進行AI處理' },
    { keys: 'Ctrl + /', description: '快速註解/取消註解' },
  ]

  const bestPractices = [
    {
      title: '明確描述需求',
      description: '提供具體的功能描述和預期結果',
      example: '建立一個React登入表單，包含email和密碼欄位，要有表單驗證'
    },
    {
      title: '提供上下文',
      description: '說明專案類型、使用的技術棧和特殊要求',
      example: '在Next.js專案中建立一個使用TypeScript的API路由'
    },
    {
      title: '分段描述複雜需求',
      description: '將複雜功能拆分成多個小步驟',
      example: '先建立基本組件結構，再添加狀態管理，最後加入樣式'
    },
    {
      title: '善用程式碼註解',
      description: '在代碼中添加註解說明意圖，AI會根據註解生成代碼',
      example: '// 建立一個函數計算兩個數字的平均值'
    }
  ]

  const commonMistakes = [
    {
      problem: '提示詞太模糊',
      solution: '提供具體的需求和技術細節',
      badExample: '做一個登入',
      goodExample: '建立一個React登入表單，包含email和密碼欄位，使用Tailwind CSS樣式'
    },
    {
      problem: '沒有提供上下文',
      solution: '說明專案背景和相關技術',
      badExample: '建立一個API',
      goodExample: '在Express.js中建立一個RESTful API端點，處理用戶資料的CRUD操作'
    },
    {
      problem: '一次要求太多功能',
      solution: '分步驟進行，逐步完善',
      badExample: '建立一個完整的電商網站',
      goodExample: '先建立商品列表組件，然後加入購物車功能'
    }
  ]

  const efficiencyTips = [
    '使用Tab快速接受AI建議',
    '善用Ctrl+K快速開啟AI對話',
    '定期更新和優化提示詞',
    '學習常用的程式模式和架構',
    '保持代碼整潔，有助AI理解',
    '適時使用Composer處理多檔案編輯'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">實用技巧</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            掌握這些技巧，讓你的Cursor使用效率翻倍
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Shortcuts */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Keyboard className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">常用快捷鍵</h2>
            </div>
            <div className="space-y-4">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">
                    {shortcut.keys}
                  </span>
                  <span className="text-gray-700">{shortcut.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Efficiency Tips */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-green-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">效率提升小貼士</h2>
            </div>
            <div className="space-y-3">
              {efficiencyTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-orange-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">AI提示詞最佳實務</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {bestPractices.map((practice, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{practice.title}</h3>
                <p className="text-gray-600 mb-3">{practice.description}</p>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-orange-400">
                  <span className="text-sm text-gray-700 font-mono">{practice.example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="text-red-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">常見錯誤與改善</h2>
          </div>
          <div className="space-y-6">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{mistake.problem}</h3>
                <p className="text-gray-600 mb-4">{mistake.solution}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <div className="text-sm font-medium text-red-800 mb-1">❌ 避免這樣寫：</div>
                    <code className="text-sm text-red-700">{mistake.badExample}</code>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <div className="text-sm font-medium text-green-800 mb-1">✅ 推薦這樣寫：</div>
                    <code className="text-sm text-green-700">{mistake.goodExample}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Prompt Examples */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-purple-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">優質提示詞範例</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
              <div className="text-gray-400 mb-2">// React組件建立範例</div>
              <div className="text-yellow-300">
                {`請幫我建立一個React組件，需求如下：
1. 組件名稱：UserProfile
2. Props: { name: string, email: string, avatar?: string }
3. 功能：顯示用戶資料，包含頭像、姓名和email
4. 樣式：使用Tailwind CSS，卡片式設計
5. 頭像：如果沒有提供avatar，顯示姓名首字母`}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
              <div className="text-gray-400 mb-2">// API開發範例</div>
              <div className="text-yellow-300">
                {`請幫我建立一個Node.js Express API端點：
- 路由：POST /api/users
- 功能：建立新用戶
- 驗證：email格式、密碼長度至少8字元
- 回應：成功返回用戶資料（不含密碼），失敗返回錯誤訊息
- 資料庫：使用Prisma ORM`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tips
