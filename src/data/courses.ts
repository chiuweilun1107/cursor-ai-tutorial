import { Course } from '../types'

export const beginnerCourse: Course = {
  id: 'beginner',
  title: '初級篇',
  subtitle: 'Cursor基礎入門',
  level: 'beginner',
  duration: '1-2週',
  description: '從零開始學習Cursor AI的基本操作和核心功能，讓AI成為你的程式設計助手',
  objectives: [
    '熟悉Cursor介面和基本操作',
    '能夠使用AI Chat解決簡單問題',
    '掌握Tab補全提升效率',
    '完成基礎網頁專案'
  ],
  prerequisites: [
    '基本電腦操作能力',
    '對程式設計有興趣（無需經驗）',
    '能夠安裝軟體',
    '具備基本英文閱讀能力'
  ],
  weeks: [
    {
      id: 1,
      title: '第1週：Cursor基礎',
      description: '學習Cursor的安裝、設定和基本功能',
      lessons: [
        {
          id: 1,
          title: '安裝與設定Cursor',
          type: 'video',
          duration: '15分鐘',
          description: '下載安裝Cursor，完成基本設定和帳戶註冊'
        },
        {
          id: 2,
          title: '介面導覽與基本功能',
          type: 'video',
          duration: '20分鐘',
          description: '熟悉Cursor介面布局，了解主要功能區域'
        },
        {
          id: 3,
          title: '第一次AI對話',
          type: 'hands-on',
          duration: '25分鐘',
          description: '學習如何與AI進行有效對話，獲得程式協助'
        },
        {
          id: 4,
          title: '基本設定優化',
          type: 'text',
          duration: '10分鐘',
          description: '調整Cursor設定，優化個人使用體驗'
        }
      ]
    },
    {
      id: 2,
      title: '第2週：AI功能入門',
      description: '深入學習AI Chat和Tab補全功能',
      lessons: [
        {
          id: 5,
          title: 'AI Chat進階使用',
          type: 'video',
          duration: '30分鐘',
          description: '掌握AI Chat的進階技巧和最佳實務'
        },
        {
          id: 6,
          title: 'Tab補全技巧',
          type: 'hands-on',
          duration: '20分鐘',
          description: '學習Tab補全的使用方法和優化技巧'
        },
        {
          id: 7,
          title: '代碼解釋與學習',
          type: 'video',
          duration: '25分鐘',
          description: '使用AI理解和學習複雜的程式代碼'
        },
        {
          id: 8,
          title: '錯誤修正方法',
          type: 'hands-on',
          duration: '30分鐘',
          description: '學習用AI協助發現和修正程式錯誤'
        }
      ]
    }
  ],
  projects: [
    {
      id: 'project1',
      title: '建立第一個HTML頁面',
      description: '使用Cursor AI協助建立一個包含基本結構的HTML頁面，包含標題、段落、圖片和連結',
      difficulty: '簡單',
      estimatedTime: '1小時',
      technologies: ['HTML', 'CSS']
    },
    {
      id: 'project2',
      title: 'JavaScript互動網頁',
      description: '建立一個具有互動功能的網頁，包含按鈕點擊事件和動態內容更新',
      difficulty: '簡單',
      estimatedTime: '2小時',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ],
  resources: [
    {
      id: 'cursor-official',
      title: 'Cursor官方網站',
      type: 'link',
      url: 'https://cursor.com',
      description: '官方網站和文檔'
    },
    {
      id: 'course-notes',
      title: '課程講義下載',
      type: 'download',
      url: '#',
      description: '完整的課程講義PDF檔案'
    },
    {
      id: 'example-code',
      title: '範例代碼庫',
      type: 'link',
      url: '#',
      description: 'GitHub上的範例代碼倉庫'
    }
  ]
}

export const intermediateCourse: Course = {
  id: 'intermediate',
  title: '中級篇',
  subtitle: 'AI輔助開發進階',
  level: 'intermediate',
  duration: '3-4週',
  description: '深入學習Composer功能和多檔案AI編輯技巧，掌握AI輔助的專案開發流程',
  objectives: [
    '熟練使用Composer進行多檔案編輯',
    '能夠AI輔助重構和優化代碼',
    '掌握進階提示詞技巧',
    '完成中型全端專案'
  ],
  prerequisites: [
    '完成初級課程',
    '基本HTML/CSS/JavaScript知識',
    '了解程式設計基本概念',
    '有簡單專案開發經驗'
  ],
  weeks: [],
  projects: [
    {
      id: 'todo-app',
      title: 'Todo App全端開發',
      description: '建立一個完整的待辦事項應用，包含前端介面和後端API',
      difficulty: '中等',
      estimatedTime: '8小時',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
      id: 'blog-system',
      title: 'Blog系統開發',
      description: '開發一個部落格系統，支援文章發布、編輯和評論功能',
      difficulty: '中等',
      estimatedTime: '12小時',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL']
    }
  ],
  resources: []
}

export const advancedCourse: Course = {
  id: 'advanced',
  title: '高級篇',
  subtitle: '企業級AI開發',
  level: 'advanced',
  duration: '2-3個月',
  description: '建立完整的AI開發工作流程，掌握企業級專案開發和系統架構設計能力',
  objectives: [
    '建立完整的AI輔助開發工作流程',
    '能夠設計和實現複雜系統架構',
    '掌握企業級開發最佳實務',
    '完成可上線的大型專案'
  ],
  prerequisites: [
    '完成中級課程',
    '具備一定的程式開發經驗',
    '熟悉現代開發工具和流程',
    '了解軟體架構設計原則'
  ],
  weeks: [],
  projects: [
    {
      id: 'ecommerce-platform',
      title: '電商平台開發',
      description: '建立完整的電商平台，包含商品管理、購物車、支付和訂單系統',
      difficulty: '困難',
      estimatedTime: '40小時',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis']
    },
    {
      id: 'enterprise-system',
      title: '企業級系統開發',
      description: '開發可擴展的企業級應用系統，包含微服務架構和CI/CD',
      difficulty: '困難',
      estimatedTime: '60小時',
      technologies: ['Docker', 'Kubernetes', 'GraphQL', 'Microservices']
    }
  ],
  resources: []
}

export const allCourses = [beginnerCourse, intermediateCourse, advancedCourse]

export const getCourseById = (id: string): Course | undefined => {
  return allCourses.find(course => course.id === id)
}
