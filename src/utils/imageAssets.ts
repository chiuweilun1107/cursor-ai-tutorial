// 圖片資源管理 - 基於內容主題的精準匹配
// 所有圖片來源：Unsplash (免費商用授權)

// ===== 主要輪播圖片 - 與內容主題精準匹配 =====
const heroImages = {
  // AI應用時代 - 使用AI/機器人相關圖片
  slide1: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center', // AI機器人手與人類手觸碰
  
  // Model Context Protocol - 使用網路連接/協議相關圖片  
  slide2: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&crop=center', // 網路連接節點圖
  
  // Cursor Rules - 使用程式碼/編輯器相關圖片
  slide3: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center', // 程式碼螢幕
  
  // AI工具生態 - 使用多工具整合相關圖片
  slide4: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center', // 多螢幕工作環境
  
  // 企業級AI應用 - 使用團隊協作相關圖片
  slide5: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center', // 團隊協作會議
  
  // 養成與AI對話的習慣 - 使用AI對話/互動相關圖片
  slide6: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&h=1080&fit=crop&crop=center'  // AI對話互動界面
}

// ===== 課程相關圖片 - 教育學習主題 =====
const courseImages = {
  // 全端開發能力
  beginner: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=center', // MacBook with code

  // AI工具熟練（本地圖片）
  aiToolsExpert: '/src/assets/images/heroes/hero-ai-tools.jpg', // 本地圖片

  // 企業級技能
  advanced: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=600&fit=crop&crop=center', // 多螢幕現代辦公室

  // 系統架構師
  architect: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop&crop=center', // 架構設計圖

  // MCP課程 - AI技術相關
  mcp: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center', // AI晶片技術

  // 企業課程 - 商業應用相關
  enterprise: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center' // 企業辦公環境
}

// ===== 學習路徑圖片 - 進階學習主題 =====
const learningPathImages = {
  // 基礎入門 - 學習起步
  foundation: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center', // 筆記本學習
  
  // 實戰應用 - 實際操作
  practice: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop&crop=center', // 程式設計實作
  
  // 進階技巧 - 高級技能
  advanced: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center', // 複雜程式碼
  
  // 專業認證 - 成就達成
  certification: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&crop=center' // 畢業帽學位
}

// ===== MCP課程專用圖片 - AI協議主題 =====
const mcpImages = {
  // MCP英雄圖 - AI連接概念
  hero: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop&crop=center', // AI網路連接
  
  // 協議介紹 - 技術標準
  protocol: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center', // 網路協議圖
  
  // 實際應用 - 工具整合
  integration: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center', // 多工具整合
  
  // 開發實戰 - 程式開發
  development: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center', // 程式開發
  
  // 功能特色1 - AI協作
  feature1: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center', // AI機器人協作
  
  // 功能特色2 - 高效開發
  feature2: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop&crop=center', // 高效開發環境
  
  // 功能特色3 - 智能整合
  feature3: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center', // 智能技術整合
  
  // 用戶見證
  testimonial: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center' // 團隊成功案例
}

// ===== 投影片專用圖片 - 教學內容主題 =====
const slideImages = {
  // AI基礎概念
  aiBasics: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center', // AI機器人
  
  // 程式設計邏輯
  programming: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center', // 程式碼
  
  // 工具使用
  tools: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop&crop=center', // 開發工具
  
  // 協作學習
  collaboration: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center', // 團隊協作
  
  // 實戰練習
  practice: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&crop=center', // 實際操作
  
  // 學習成果
  achievement: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&crop=center', // 學習成就
  
  // 技術深度
  technical: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center', // AI技術
  
  // 創新思維
  innovation: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center', // 創新概念
  
  // 學習環境
  learning: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center', // 學習環境
  
  // 未來發展
  future: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center' // 未來科技
}

// ===== 通用圖片 - 一般用途 =====
const generalImages = {
  // 預設圖片
  default: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center',
  
  // 載入中圖片
  loading: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center',
  
  // 錯誤圖片
  error: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop&crop=center'
}

// ===== 主要匯出物件 =====
export const imageAssets = {
  hero: heroImages,
  courses: courseImages,
  learningPath: learningPathImages,
  mcp: mcpImages,
  slides: slideImages,
  general: generalImages
}

// ===== 智能圖片選擇函數 - 基於關鍵字匹配 =====
export const getImageByKeywords = (keywords: string[]): string => {
  const keywordMap: Record<string, string> = {
    // AI相關關鍵字
    'ai': slideImages.aiBasics,
    'artificial': slideImages.aiBasics,
    'intelligence': slideImages.aiBasics,
    '人工智慧': slideImages.aiBasics,
    '機器學習': slideImages.technical,
    '深度學習': slideImages.technical,
    
    // 程式設計相關
    'programming': slideImages.programming,
    'code': slideImages.programming,
    'coding': slideImages.programming,
    '程式': slideImages.programming,
    '編程': slideImages.programming,
    '開發': slideImages.tools,
    
    // 工具相關
    'cursor': slideImages.tools,
    'chatgpt': slideImages.aiBasics,
    'claude': slideImages.aiBasics,
    '工具': slideImages.tools,
    
    // 學習相關
    'learning': slideImages.learning,
    'study': slideImages.learning,
    'education': slideImages.learning,
    '學習': slideImages.learning,
    '教育': slideImages.learning,
    '課程': slideImages.learning,
    
    // 協作相關
    'collaboration': slideImages.collaboration,
    'team': slideImages.collaboration,
    '協作': slideImages.collaboration,
    '團隊': slideImages.collaboration,
    
    // 實戰相關
    'practice': slideImages.practice,
    'project': slideImages.practice,
    '實戰': slideImages.practice,
    '專案': slideImages.practice,
    '練習': slideImages.practice,
    
    // 技術相關
    'technical': slideImages.technical,
    'technology': slideImages.technical,
    '技術': slideImages.technical,
    '科技': slideImages.technical,
    
    // 創新相關
    'innovation': slideImages.innovation,
    'future': slideImages.future,
    '創新': slideImages.innovation,
    '未來': slideImages.future,
    
    // 成就相關
    'achievement': slideImages.achievement,
    'success': slideImages.achievement,
    '成就': slideImages.achievement,
    '成功': slideImages.achievement
  }
  
  // 尋找匹配的關鍵字
  for (const keyword of keywords) {
    const lowerKeyword = keyword.toLowerCase()
    if (keywordMap[lowerKeyword]) {
      return keywordMap[lowerKeyword]
    }
  }
  
  // 如果沒有匹配，返回預設圖片
  return generalImages.default
}

// ===== 課程專用圖片獲取函數 =====
export const getCourseImage = (courseId: string): string => {
  const courseMap: Record<string, string> = {
    'stage1-beginner': courseImages.beginner,
    'stage2-advanced': courseImages.advanced,
    'mcp-course': courseImages.mcp,
    'enterprise-course': courseImages.enterprise
  }
  
  return courseMap[courseId] || generalImages.default
}

// ===== 學習路徑圖片獲取函數 =====
export const getLearningPathImage = (pathType: string): string => {
  const pathMap: Record<string, string> = {
    'foundation': learningPathImages.foundation,
    'practice': learningPathImages.practice,
    'advanced': learningPathImages.advanced,
    'certification': learningPathImages.certification
  }
  
  return pathMap[pathType] || generalImages.default
}

// ===== 投影片圖片獲取函數 - 基於內容分析 =====
export const getSlideImage = (content: string): string => {
  // 提取關鍵字進行分析
  const keywords = content.toLowerCase().split(/\s+/)
  
  // AI相關內容
  if (keywords.some(k => ['ai', 'artificial', 'intelligence', '人工智慧', '機器學習'].includes(k))) {
    return slideImages.aiBasics
  }
  
  // 程式設計相關
  if (keywords.some(k => ['programming', 'code', 'coding', '程式', '編程'].includes(k))) {
    return slideImages.programming
  }
  
  // 工具使用相關
  if (keywords.some(k => ['cursor', 'tool', '工具', '編輯器'].includes(k))) {
    return slideImages.tools
  }
  
  // 協作學習相關
  if (keywords.some(k => ['collaboration', 'team', '協作', '團隊'].includes(k))) {
    return slideImages.collaboration
  }
  
  // 實戰練習相關
  if (keywords.some(k => ['practice', 'project', '實戰', '專案', '練習'].includes(k))) {
    return slideImages.practice
  }
  
  // 技術深度相關
  if (keywords.some(k => ['technical', 'technology', '技術', '科技', 'mcp', 'protocol'].includes(k))) {
    return slideImages.technical
  }
  
  // 學習相關
  if (keywords.some(k => ['learning', 'study', '學習', '教育'].includes(k))) {
    return slideImages.learning
  }
  
  // 創新未來相關
  if (keywords.some(k => ['innovation', 'future', '創新', '未來'].includes(k))) {
    return slideImages.innovation
  }
  
  // 成就相關
  if (keywords.some(k => ['achievement', 'success', '成就', '成功'].includes(k))) {
    return slideImages.achievement
  }
  
  // 預設返回學習圖片
  return slideImages.learning
}

export default imageAssets 