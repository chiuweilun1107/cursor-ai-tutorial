import React from 'react'
import { Keyboard, Lightbulb, Code, Zap, AlertCircle, TrendingUp } from 'lucide-react'

const Tips: React.FC = () => {
  const shortcuts = [
    { keys: 'Ctrl + K', description: '開啟Cursor AI Chat', tool: 'Cursor' },
    { keys: 'Ctrl + L', description: '選擇全部代碼進行AI編輯', tool: 'Cursor' },
    { keys: 'Tab', description: '接受AI建議', tool: 'Cursor' },
    { keys: 'Ctrl + I', description: '啟動Inline Edit', tool: 'Cursor' },
    { keys: 'Ctrl + Shift + I', description: '啟動Composer模式', tool: 'Cursor' },
    { keys: 'Ctrl + Shift + L', description: '選擇多行進行AI處理', tool: 'Cursor' },
    { keys: 'Ctrl + Alt + C', description: '複製到ChatGPT', tool: 'Integration' },
    { keys: 'Ctrl + Alt + V', description: '從Claude貼上', tool: 'Integration' },
  ]

  const bestPractices = [
    {
      title: '建立AI工具鏈策略',
      description: '根據不同任務選擇最適合的AI工具',
      example: 'Cursor處理代碼編輯 → ChatGPT解決技術問題 → Claude進行深度分析'
    },
    {
      title: '配置Cursor Rules',
      description: '建立項目專屬的AI行為規則和編碼風格',
      example: '在.cursorrules文件中定義項目架構、命名規範、編碼風格'
    },
    {
      title: '使用MCP協議整合',
      description: '透過MCP連接數據庫、API和外部服務',
      example: '配置PostgreSQL MCP server連接開發資料庫'
    },
    {
      title: '建立AI提示詞模板',
      description: '為常見任務建立標準化的提示詞模板',
      example: '建立代碼審查、API文檔生成、測試用例編寫的模板'
    },
    {
      title: '實施漸進式AI採用',
      description: '從簡單任務開始，逐步擴展到複雜工作流程',
      example: '先用於代碼補全 → 代碼生成 → 架構設計 → 系統分析'
    },
    {
      title: '團隊AI協作規範',
      description: '建立團隊共同的AI使用規範和最佳實務',
      example: '定義AI生成代碼的審查流程和品質標準'
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
    '建立.cursorrules文件定義項目規範',
    '配置MCP服務器連接常用服務',
    '使用AI工具鏈處理複雜任務',
    '建立提示詞模板庫提高一致性',
    '定期更新AI工具到最新版本',
    '實施代碼審查確保AI生成品質',
    '使用多AI工具交叉驗證結果',
    '建立團隊AI使用最佳實務文檔'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI應用實戰技巧</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            掌握AI工具生態的深度技巧，讓你的開發效率提升126%
          </p>
          <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">40%</div>
              <div>基礎效率提升</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">126%</div>
              <div>程式設計效能</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">66%</div>
              <div>團隊協作效率</div>
            </div>
          </div>
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
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">
                      {shortcut.keys}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      shortcut.tool === 'Cursor' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {shortcut.tool}
                    </span>
                  </div>
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
            <h2 className="text-2xl font-bold text-gray-900">AI應用最佳實務</h2>
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

        {/* MCP Configuration Examples */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-purple-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">MCP配置範例</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
              <div className="text-gray-400 mb-2">// Claude Desktop MCP配置</div>
              <div className="text-yellow-300">
                {`{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-postgres",
        "postgresql://user:password@localhost:5432/mydb"
      ]
    },
    "github": {
      "command": "npx", 
      "args": [
        "@modelcontextprotocol/server-github",
        "--token", "ghp_your_token_here"
      ]
    }
  }
}`}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
              <div className="text-gray-400 mb-2">// .cursorrules 配置範例</div>
              <div className="text-yellow-300">
                {`# Cursor Rules for React + TypeScript Project

## 項目架構
- 使用 React 18 + TypeScript
- 組件放在 src/components/ 目錄
- 頁面放在 src/pages/ 目錄
- 工具函數放在 src/utils/ 目錄

## 編碼風格
- 使用函數式組件和 Hooks
- 優先使用 const 聲明
- 組件名稱使用 PascalCase
- 文件名使用 camelCase

## AI輔助規則
- 生成代碼時自動添加 TypeScript 類型
- 生成組件時包含 PropTypes 或 interface
- 自動添加必要的 import 語句
- 遵循 React 最佳實踐`}
              </div>
            </div>
          </div>
        </div>

        {/* AI Tool Integration Examples */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">AI工具整合範例</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
              <div className="text-gray-400 mb-2">// 多AI工具協作流程</div>
              <div className="text-yellow-300">
                {`// 1. 在Cursor中開始編寫代碼
function UserDashboard() {
  // AI: 請幫我建立一個用戶儀表板組件
}

// 2. 如果遇到複雜邏輯問題，複製到ChatGPT
// 提問：如何實現這個功能的最佳架構？

// 3. 需要深度分析時，使用Claude
// 分析：這個設計模式的優缺點和替代方案

// 4. 回到Cursor實現最終方案
function UserDashboard() {
  // 基於AI建議實現的最佳解決方案
  const [userData, setUserData] = useState(null);
  // ... 完整實現
}`}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
              <div className="text-gray-400 mb-2">// 企業級AI工作流程</div>
              <div className="text-yellow-300">
                {`// 階段1: 需求分析 (Claude)
分析業務需求，設計系統架構，評估技術方案

// 階段2: 代碼實現 (Cursor + MCP)
使用MCP連接數據庫，自動生成CRUD操作
配置CI/CD流程，自動化測試

// 階段3: 代碼審查 (ChatGPT)
檢查代碼品質，識別潛在問題
提供優化建議和安全性檢查

// 階段4: 文檔生成 (Claude)
自動生成API文檔，用戶手冊
建立技術文檔和維護指南`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tips
