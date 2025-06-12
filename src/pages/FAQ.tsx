import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = React.useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const technicalFAQs = [
    {
      question: 'Cursor vs VS Code有什麼差別？',
      answer: 'Cursor基於VS Code構建，保留了VS Code的所有功能，但內建了強大的AI功能。主要差別包括：AI Chat對話、Inline Edit即時編輯、Composer多檔案編輯、智能Tab補全等AI輔助功能。'
    },
    {
      question: '如何改善AI回應品質？',
      answer: '1. 提供明確具體的需求描述 2. 說明技術背景和專案資訊 3. 使用範例代碼作為參考 4. 分步驟提出複雜需求 5. 定期更新和優化提示詞寫法'
    },
    {
      question: '為什麼AI有時候會出錯？',
      answer: 'AI模型基於統計學習，可能因為：1. 提示詞不夠明確 2. 缺乏專案上下文 3. 要求超出模型能力範圍 4. 技術資訊過時。建議多次迭代優化，並保持批判性思考。'
    },
    {
      question: '如何處理AI生成代碼的衝突？',
      answer: '1. 仔細審查AI建議的代碼 2. 測試功能是否正常 3. 檢查是否符合專案架構 4. 必要時手動調整和優化 5. 學習AI的建議邏輯，提升自己的判斷能力'
    },
    {
      question: 'Cursor支援哪些程式語言？',
      answer: 'Cursor支援所有主流程式語言，包括JavaScript、TypeScript、Python、Java、C++、Go、Rust、PHP等。AI助手在不同語言都能提供代碼建議和解釋。'
    }
  ]

  const learningFAQs = [
    {
      question: '完全沒程式經驗可以學嗎？',
      answer: '可以！我們的初級課程從零開始，會先教基本的程式概念，再介紹Cursor的使用。不過建議同時學習基礎的HTML、CSS、JavaScript知識，會讓學習更有效率。'
    },
    {
      question: '需要多久時間學會？',
      answer: '根據學習強度而定：初級篇（1-2週）掌握基本操作，中級篇（3-4週）學會進階功能，高級篇（2-3個月）達到專業水準。每天投入1-2小時，大約3-6個月可以熟練使用。'
    },
    {
      question: '如何選擇適合的學習路徑？',
      answer: '建議先評估自己的程式基礎：1. 零基礎：從初級篇開始，同時學習基礎程式概念 2. 有基礎：可直接從中級篇開始 3. 有經驗：重點學習AI輔助開發的最佳實務'
    },
    {
      question: '學完後可以找什麼工作？',
      answer: 'AI輔助開發技能在現代軟體業非常搶手，可以應用於：前端開發、後端開發、全端開發、移動應用開發、DevOps工程師等職位。掌握AI工具能大幅提升求職競爭力。'
    },
    {
      question: '課程提供哪些學習支援？',
      answer: '我們提供：1. 詳細的圖文教學和影片 2. 實作專案和範例代碼 3. 社群討論和同學互助 4. 定期更新的學習資源 5. 學習進度追蹤功能'
    }
  ]

  const generalFAQs = [
    {
      question: 'Cursor是免費的嗎？',
      answer: 'Cursor提供免費版本，包含基本AI功能。Pro版本（月費20美元）提供更多AI請求額度、進階功能和優先支援。對學習者來說，免費版本通常已經足夠。'
    },
    {
      question: '需要什麼硬體配置？',
      answer: 'Cursor的系統需求與VS Code相似：Windows 10+、macOS 10.15+或Linux、4GB RAM（建議8GB）、1GB磁碟空間。AI功能需要網路連線。'
    },
    {
      question: '如何保護代碼隱私？',
      answer: 'Cursor重視隱私保護：1. 可以選擇不發送敏感代碼 2. 支援本地AI模型 3. 企業版提供私有部署選項 4. 遵守GDPR等隱私法規'
    }
  ]

  const renderFAQSection = (title: string, faqs: any[], startIndex: number) => (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const globalIndex = startIndex + index
          const isOpen = openItems.includes(globalIndex)
          return (
            <div key={globalIndex} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleItem(globalIndex)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="text-gray-500" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500" size={20} />
                )}
              </button>
              {isOpen && (
                <div className="px-4 pb-4">
                  <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">常見問題</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            找不到答案？歡迎聯繫我們的學習支援團隊
          </p>
        </div>

        <div className="space-y-8">
          {renderFAQSection('技術問題', technicalFAQs, 0)}
          {renderFAQSection('學習問題', learningFAQs, technicalFAQs.length)}
          {renderFAQSection('一般問題', generalFAQs, technicalFAQs.length + learningFAQs.length)}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">還有其他問題？</h2>
          <p className="text-gray-600 mb-6">
            我們的學習支援團隊隨時為您解答疑問
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-6 py-3">
              聯繫客服
            </button>
            <button className="btn-outline px-6 py-3">
              加入社群討論
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
