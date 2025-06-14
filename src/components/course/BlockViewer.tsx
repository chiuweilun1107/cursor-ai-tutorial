import React, { useState, useEffect } from 'react'
import { 
  Brain, Code, Users, Target, Award, CheckCircle, AlertCircle, Info, Lightbulb,
  LineChart, Activity, Zap, ArrowRight, Plus, Rocket,
  Calendar, Clock, Globe, Smartphone, Monitor, Database, Cloud, Shield, 
  Cpu, Wifi, TrendingUp, BarChart3, MessageCircle, GraduationCap, Briefcase
} from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface BlockViewerProps {
  markdownContent: string
}

interface ContentBlock {
  id: string
  type: 'heading' | 'paragraph' | 'list' | 'quote' | 'code' | 'section'
  content: string
  level?: number // for headings
  visualType?: 'highlight' | 'timeline' | 'grid' | 'stats' | 'comparison'
  metadata?: {
    keywords?: string[]
    isImportant?: boolean
  }
}

const BlockViewer: React.FC<BlockViewerProps> = ({ markdownContent }) => {
  const [blocks, setBlocks] = useState<ContentBlock[]>([])

  // 解析 markdown 內容為結構化區塊
  useEffect(() => {
    const parseMarkdownToBlocks = (content: string): ContentBlock[] => {
      if (!content.trim()) return []

      const lines = content.split('\n')
      const blocks: ContentBlock[] = []
      let currentBlock = ''
      let blockType: ContentBlock['type'] = 'paragraph'
      let blockId = 0

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        const trimmedLine = line.trim()

        // 跳過空行但保留在當前區塊中
        if (!trimmedLine) {
          if (currentBlock) currentBlock += '\n'
          continue
        }

        // 檢測標題
        if (trimmedLine.startsWith('#')) {
          // 完成前一個區塊
          if (currentBlock.trim()) {
            blocks.push(createBlock(blockId++, blockType, currentBlock.trim()))
            currentBlock = ''
          }
          
          // 創建標題區塊，繼續處理可能的後續內容
          const level = (trimmedLine.match(/^#+/) || [''])[0].length
          let headingContent = trimmedLine
          
          // 檢查下一行是否是標題的延續內容（非標題、非空行）
          let nextIndex = i + 1
          while (nextIndex < lines.length) {
            const nextLine = lines[nextIndex]
            const nextTrimmed = nextLine.trim()
            
            // 如果是空行，跳過
            if (!nextTrimmed) {
              nextIndex++
              continue
            }
            
            // 如果是下一個標題、列表、引用、代碼塊，則停止
            if (nextTrimmed.startsWith('#') || 
                nextTrimmed.startsWith('```') ||
                nextTrimmed.startsWith('>') ||
                nextTrimmed.match(/^[\-\*\+]\s/) ||
                nextTrimmed.match(/^\d+\.\s/) ||
                nextTrimmed.match(/^-{3,}$|^\*{3,}$|^_{3,}$/)) {
              break
            }
            
            // 將此行加入標題內容
            headingContent += '\n' + nextLine
            nextIndex++
          }
          
          blocks.push(createBlock(blockId++, 'heading', headingContent, level))
          i = nextIndex - 1 // 調整循環索引
          continue
        }

        // 檢測代碼塊
        if (trimmedLine.startsWith('```')) {
          // 完成前一個區塊
          if (currentBlock.trim()) {
            blocks.push(createBlock(blockId++, blockType, currentBlock.trim()))
            currentBlock = ''
          }
          
          // 收集代碼塊內容
          let codeContent = line + '\n'
          i++
          while (i < lines.length && !lines[i].trim().startsWith('```')) {
            codeContent += lines[i] + '\n'
            i++
          }
          if (i < lines.length) {
            codeContent += lines[i]
          }
          
          blocks.push(createBlock(blockId++, 'code', codeContent.trim()))
          continue
        }

        // 檢測引用
        if (trimmedLine.startsWith('>')) {
          if (blockType !== 'quote' && currentBlock.trim()) {
            blocks.push(createBlock(blockId++, blockType, currentBlock.trim()))
            currentBlock = ''
          }
          blockType = 'quote'
          currentBlock += line + '\n'
          continue
        }

        // 檢測列表
        if (trimmedLine.match(/^[\-\*\+]\s/) || trimmedLine.match(/^\d+\.\s/)) {
          // 檢查前一個區塊是否應該與此列表合併
          if (blockType === 'paragraph' && currentBlock.trim()) {
            const lastLines = currentBlock.trim().split('\n')
            const lastLine = lastLines[lastLines.length - 1].trim()
            
            // 如果最後一行是標題（以：結尾），則合併
            if (lastLine.endsWith('：') || lastLine.endsWith(':')) {
              blockType = 'section'
              currentBlock += line + '\n'
              continue
            }
            
            // 否則先完成前一個區塊
            blocks.push(createBlock(blockId++, blockType, currentBlock.trim()))
            currentBlock = ''
          } else if (blockType === 'section') {
            // 如果已經是 section 類型，繼續添加列表項
            currentBlock += line + '\n'
            continue
          } else if (blockType === 'list') {
            // 如果已經是列表，繼續添加
            currentBlock += line + '\n'
            continue
          } else if (currentBlock.trim()) {
            // 完成其他類型的區塊
            blocks.push(createBlock(blockId++, blockType, currentBlock.trim()))
            currentBlock = ''
          }
          
          blockType = 'list'
          currentBlock += line + '\n'
          continue
        }

        // 檢測分隔線（用作區塊分隔）
        if (trimmedLine.match(/^-{3,}$|^\*{3,}$|^_{3,}$/)) {
          if (currentBlock.trim()) {
            blocks.push(createBlock(blockId++, blockType, currentBlock.trim()))
            currentBlock = ''
            blockType = 'paragraph'
          }
          continue
        }

        // 普通段落
        if (blockType !== 'paragraph' && currentBlock.trim()) {
          blocks.push(createBlock(blockId++, blockType, currentBlock.trim()))
          currentBlock = ''
          blockType = 'paragraph'
        }
        
        currentBlock += line + '\n'
        
        // 檢查是否應該結束當前段落
        let shouldEndParagraph = false
        let nextNonEmptyIndex = i + 1
        
        // 找到下一個非空行
        while (nextNonEmptyIndex < lines.length && !lines[nextNonEmptyIndex].trim()) {
          nextNonEmptyIndex++
        }
        
        // 如果下一個非空行是標題、引用、代碼塊或分隔線，則結束當前段落
        // 但如果當前行以：結尾且下一行是列表，則不結束（等待合併）
        if (nextNonEmptyIndex < lines.length) {
          const nextNonEmptyLine = lines[nextNonEmptyIndex].trim()
          const currentLineEndsWithColon = trimmedLine.endsWith('：') || trimmedLine.endsWith(':')
          const nextLineIsList = nextNonEmptyLine.match(/^[\-\*\+]\s/) || nextNonEmptyLine.match(/^\d+\.\s/)
          
          if (nextNonEmptyLine.startsWith('#') ||
              nextNonEmptyLine.startsWith('```') ||
              nextNonEmptyLine.startsWith('>') ||
              nextNonEmptyLine.match(/^-{3,}$|^\*{3,}$|^_{3,}$/)) {
            shouldEndParagraph = true
          } else if (nextLineIsList && !currentLineEndsWithColon) {
            // 只有在當前行不是標題（不以：結尾）時才結束段落
            shouldEndParagraph = true
          }
        } else if (nextNonEmptyIndex >= lines.length) {
          // 已到文件末尾
          shouldEndParagraph = true
        }
        
        // 如果遇到空行且應該結束段落
        if (shouldEndParagraph && i + 1 < lines.length && !lines[i + 1].trim()) {
          if (currentBlock.trim()) {
            blocks.push(createBlock(blockId++, blockType, currentBlock.trim()))
            currentBlock = ''
            blockType = 'paragraph'
          }
        }
      }

      // 處理最後一個區塊
      if (currentBlock.trim()) {
        blocks.push(createBlock(blockId++, blockType, currentBlock.trim()))
      }

      return blocks
    }

    const createBlock = (
      id: number, 
      type: ContentBlock['type'], 
      content: string, 
      level?: number
    ): ContentBlock => {
      const block: ContentBlock = {
        id: `block-${id}`,
        type,
        content,
        level,
        metadata: {}
      }

      // 分析內容特徵
      const text = content.toLowerCase()
      
      // 檢測重要關鍵詞
      const keywords = extractKeywords(content)
      block.metadata!.keywords = keywords

      // 根據內容確定視覺類型
      if (type === 'heading') {
        if (level === 1) {
          block.visualType = 'highlight'
        } else if (keywords.includes('ai核心') || keywords.includes('革命')) {
          block.visualType = 'highlight'
        }
      } else if (type === 'section') {
        // section 是標題+列表的組合，根據列表內容判斷視覺類型
        if (content.match(/\d+[%倍萬億×xX]/) || content.match(/\d+\.\d+[%倍萬億×xX]/)) {
          block.visualType = 'stats'
        } else if (text.includes('步驟') || text.includes('階段') || text.includes('流程') || 
                   content.match(/第\s*\d+\s*[步階]/)) {
          block.visualType = 'timeline'
        } else {
          block.visualType = 'grid'
        }
      } else if (type === 'list') {
        // 檢測是否包含數字統計
        if (content.match(/\d+[%倍萬億×xX]/) || content.match(/\d+\.\d+[%倍萬億×xX]/)) {
          block.visualType = 'stats'
        } else if (text.includes('步驟') || text.includes('階段') || text.includes('流程') || 
                   content.match(/第\s*\d+\s*[步階]/)) {
          block.visualType = 'timeline'
        } else if (content.split('\n').filter(line => line.trim()).length >= 4) {
          block.visualType = 'grid'
        }
      } else if (type === 'paragraph') {
        if (keywords.includes('革命') || keywords.includes('創新')) {
          block.visualType = 'highlight'
        }
      }

      // 檢測是否為重要內容
      const importantKeywords = ['革命', '核心', '關鍵', '重要', '必須', '突破', '創新']
      block.metadata!.isImportant = importantKeywords.some(keyword => text.includes(keyword))

      return block
    }

    const extractKeywords = (content: string): string[] => {
      const text = content.toLowerCase()
      const keywords: string[] = []
      
      // 根據內容類型和特定詞彙來提取關鍵詞
      const keywordMap = {
        // AI 相關
        'ai核心': ['ai', '人工智慧', 'artificial'],
        'chatgpt': ['chatgpt', 'gpt', 'openai'],
        'cursor': ['cursor', '編輯器'],
        'claude': ['claude', 'anthropic'],
        
        // 技術概念
        '開發': ['開發', '程式', '編程', 'development'],
        '代碼': ['代碼', 'code', '程式碼'],
        '自動化': ['自動化', 'automation'],
        '效率': ['效率', '提升', '加速'],
        
        // 特定技術
        'javascript': ['javascript', 'js'],
        'react': ['react', '前端'],
        'python': ['python'],
        '資料庫': ['資料庫', 'database', '數據'],
        
        // 概念性
        '革命': ['革命', '變革', '突破'],
        '協作': ['協作', '合作', '團隊'],
        '創新': ['創新', '新穎', '前沿'],
        '學習': ['學習', '教育', '培訓']
      }
      
      // 檢查每個關鍵詞類別
      for (const [category, terms] of Object.entries(keywordMap)) {
        const hasMatch = terms.some(term => text.includes(term))
        if (hasMatch) {
          keywords.push(category)
        }
      }
      
      // 限制關鍵詞數量，避免過多
      return keywords.slice(0, 4)
    }

    setBlocks(parseMarkdownToBlocks(markdownContent))
  }, [markdownContent])

  // 根據區塊類型獲取圖標
  const getBlockIcon = (block: ContentBlock) => {
    const { type, metadata, visualType } = block
    const keywords = metadata?.keywords || []

    // 優先根據視覺類型選擇圖標
    if (visualType === 'stats') {
      return <BarChart3 className="w-6 h-6" />
    }

    if (visualType === 'timeline') {
      return <Calendar className="w-6 h-6" />
    }

    if (visualType === 'grid') {
      return <Target className="w-6 h-6" />
    }

    // 根據關鍵詞選擇
    if (keywords.includes('ai核心')) {
      return <Brain className="w-6 h-6" />
    }

    if (keywords.includes('chatgpt')) {
      return <MessageCircle className="w-6 h-6" />
    }

    if (keywords.includes('cursor')) {
      return <Code className="w-6 h-6" />
    }

    if (keywords.includes('claude')) {
      return <Users className="w-6 h-6" />
    }

    if (keywords.includes('革命') || keywords.includes('創新')) {
      return <Rocket className="w-6 h-6" />
    }

    if (keywords.includes('效率') || keywords.includes('自動化')) {
      return <Zap className="w-6 h-6" />
    }

    if (keywords.includes('協作')) {
      return <Users className="w-6 h-6" />
    }

    if (keywords.includes('開發') || keywords.includes('代碼')) {
      return <Monitor className="w-6 h-6" />
    }

    // 根據類型選擇
    if (type === 'heading') {
      return <Lightbulb className="w-6 h-6" />
    }

    if (type === 'section') {
      return <Target className="w-6 h-6" />
    }

    if (type === 'list') {
      return <CheckCircle className="w-6 h-6" />
    }

    if (type === 'quote') {
      return <MessageCircle className="w-6 h-6" />
    }

    if (type === 'code') {
      return <Monitor className="w-6 h-6" />
    }

    return <Info className="w-6 h-6" />
  }

  // 渲染統計數據視覺化
  const renderStatsVisual = (block: ContentBlock) => {
    const lines = block.content.split('\n').filter(line => line.trim())
    const stats = lines.map(line => {
      const match = line.match(/.*?(\d+[%倍萬億×xX]|\d+\.\d+[%倍萬億×xX])/)
      return {
        text: line.replace(/^[\-\*\+]\s*/, '').trim(),
        value: match ? match[1] : ''
      }
    }).filter(stat => stat.value)

    return (
      <div className="mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-700">{stat.text.replace(stat.value, '').trim()}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // 渲染時間線視覺化
  const renderTimelineVisual = (block: ContentBlock) => {
    const lines = block.content.split('\n').filter(line => line.trim())
    
    return (
      <div className="mt-4">
        <div className="space-y-4">
          {lines.map((line, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {line.replace(/^[\-\*\+]\s*/, '')}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // 渲染網格視覺化
  const renderGridVisual = (block: ContentBlock) => {
    const lines = block.content.split('\n').filter(line => line.trim())
    
    return (
      <div className="mt-4">
        <div className="grid md:grid-cols-2 gap-4">
          {lines.map((line, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({children}) => <p className="text-gray-700 leading-relaxed">{children}</p>,
                  strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>
                }}
              >
                {line.replace(/^[\-\*\+]\s*/, '')}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // 渲染單個區塊
  const renderBlock = (block: ContentBlock, index: number) => {
    const getBlockColor = () => {
      if (block.metadata?.isImportant) {
        return 'bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200'
      }
      
      if (block.type === 'heading') {
        return 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200'
      }
      
      if (block.visualType === 'highlight') {
        return 'bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200'
      }
      
      return 'bg-white border-gray-200'
    }

    const getIconColor = () => {
      if (block.metadata?.isImportant) return 'text-orange-600'
      if (block.type === 'heading') return 'text-purple-600'
      if (block.visualType === 'highlight') return 'text-blue-600'
      if (block.visualType === 'stats') return 'text-green-600'
      if (block.visualType === 'timeline') return 'text-indigo-600'
      return 'text-gray-600'
    }

    return (
      <div 
        key={block.id}
        className={`mb-8 rounded-2xl border-2 shadow-lg transition-all duration-300 hover:shadow-xl ${getBlockColor()}`}
      >
        {/* 區塊標題欄 */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white/50">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-md ${getIconColor()}`}>
            {getBlockIcon(block)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {block.visualType && (
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  {block.visualType === 'stats' ? '📊 數據統計' :
                   block.visualType === 'timeline' ? '📅 時間線' :
                   block.visualType === 'grid' ? '🏗️ 網格布局' :
                   block.visualType === 'highlight' ? '⭐ 重點內容' : '✨ 視覺增強'}
                </span>
              )}
              {block.metadata?.isImportant && (
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                  🔥 核心概念
                </span>
              )}
            </div>
            {block.metadata?.keywords && block.metadata.keywords.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {block.metadata.keywords.slice(0, 3).map((keyword, i) => (
                  <span 
                    key={i}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="text-right">
            <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
          </div>
        </div>

        {/* 區塊內容 */}
        <div className="p-6">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mb-3">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 mb-2">{children}</h3>,
                h4: ({children}) => <h4 className="text-lg font-semibold text-gray-900 mb-2">{children}</h4>,
                p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed text-lg">{children}</p>,
                ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
                li: ({children}) => <li className="text-gray-700">{children}</li>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-4 bg-blue-50 text-gray-700 italic rounded-r-lg">{children}</blockquote>,
                code: ({children}) => <code className="text-blue-600 bg-blue-50 px-2 py-1 rounded text-sm font-medium">{children}</code>,
                pre: ({children}) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">{children}</pre>,
                strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                em: ({children}) => <em className="italic text-gray-600">{children}</em>
              }}
            >
              {block.content}
            </ReactMarkdown>
          </div>

          {/* 視覺化增強 */}
          {block.visualType === 'stats' && renderStatsVisual(block)}
          {block.visualType === 'timeline' && renderTimelineVisual(block)}
          {block.visualType === 'grid' && renderGridVisual(block)}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* 頁面標題 */}
      <div className="mb-8 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-gray-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">區塊式學習模式</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            智能解析 Markdown 內容，將每個段落轉換為專業的學習區塊，配有視覺化增強效果
          </p>
          <div className="mt-4 text-sm text-gray-500">
            共 {blocks.length} 個學習區塊
          </div>
        </div>
      </div>

      {/* 主要內容區塊 */}
      <div className="space-y-6">
        {blocks.map((block, index) => renderBlock(block, index))}
      </div>

      {/* 學習完成提示 */}
      {blocks.length > 0 && (
        <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">區塊學習完成！</h3>
            <p className="text-gray-600 mb-6">
              你已經通過 {blocks.length} 個專業學習區塊完成了本課內容
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                繼續下一課
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-300 transition-colors">
                切換其他模式
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 空狀態 */}
      {blocks.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Info className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">暫無內容</h3>
          <p className="text-gray-600 mb-4">請確保課程內容已正確載入</p>
          <div className="text-sm text-gray-500">
            區塊模式需要 Markdown 內容才能正常顯示
          </div>
        </div>
      )}
    </div>
  )
}

export default BlockViewer 