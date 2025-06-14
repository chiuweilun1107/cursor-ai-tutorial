// 路徑管理系統 - 統一管理所有文件路徑
// 避免AI在操作時出現路徑錯誤

export const paths = {
  // === 根目錄路徑 ===
  root: process.cwd(),
  
  // === 原始碼路徑 ===
  src: 'src',
  components: 'src/components',
  pages: 'src/pages',
  utils: 'src/utils',
  hooks: 'src/hooks',
  stores: 'src/stores',
  types: 'src/types',
  
  // === 資源路徑 ===
  assets: 'src/assets',
  images: 'src/assets/images', // 建議建立此目錄
  
  // === 數據路徑 ===
  data: 'src/data',
  courses: 'src/data/courses',
  lessons: 'src/data/lessons',
  progress: 'src/data/progress',
  
  // === 組件子目錄 ===
  commonComponents: 'src/components/common',
  courseComponents: 'src/components/course',
  layoutComponents: 'src/components/layout',
  uiComponents: 'src/components/ui',
  
  // === 配置文件 ===
  config: {
    vite: 'vite.config.ts',
    tailwind: 'tailwind.config.js',
    typescript: 'tsconfig.json',
    package: 'package.json'
  },
  
  // === 文檔路徑 ===
  docs: {
    readme: 'README.md',
    coursePlanning: 'course-planning.md',
    curriculumPlan: 'CURRICULUM_DEVELOPMENT_PLAN.md',
    websitePlan: 'WEBSITE_DEVELOPMENT_PLAN.md'
  }
} as const

// === 路徑操作函數 ===
export const pathUtils = {
  // 組合路徑
  join: (...parts: string[]): string => {
    return parts.join('/')
  },
  
  // 獲取相對路徑
  relative: (from: string, to: string): string => {
    const fromParts = from.split('/')
    const toParts = to.split('/')
    
    // 找到共同的基礎部分
    let commonLength = 0
    for (let i = 0; i < Math.min(fromParts.length, toParts.length); i++) {
      if (fromParts[i] === toParts[i]) {
        commonLength++
      } else {
        break
      }
    }
    
    // 構建相對路徑
    const upLevels = fromParts.length - commonLength - 1
    const upPath = '../'.repeat(upLevels)
    const downPath = toParts.slice(commonLength).join('/')
    
    return upPath + downPath
  },
  
  // 檢查路徑是否存在（需要配合文件操作API使用）
  exists: async (path: string): Promise<boolean> => {
    // 這裡需要實際的文件檢查邏輯
    return true // 暫時返回true
  }
}

// === 常用文件路徑映射 ===
export const fileMap = {
  // 課程數據文件
  allCourses: pathUtils.join(paths.courses, 'all-courses.json'),
  stage1Course: pathUtils.join(paths.courses, 'stage1-course.json'),
  
  // 課程內容文件
  stage1Lessons: pathUtils.join(paths.lessons, 'stage1-lessons.json'),
  stage1LessonsBackup: pathUtils.join(paths.lessons, 'stage1-lessons-backup.json'),
  
  // 主要組件文件
  heroCarousel: pathUtils.join(paths.components, 'HeroCarousel.tsx'),
  layout: pathUtils.join(paths.components, 'Layout.tsx'),
  
  // 頁面文件
  home: pathUtils.join(paths.pages, 'Home.tsx'),
  courses: pathUtils.join(paths.pages, 'Courses.tsx'),
  courseDetail: pathUtils.join(paths.pages, 'CourseDetail.tsx'),
  lessonViewer: pathUtils.join(paths.pages, 'LessonViewer.tsx'),
  mcpCourse: pathUtils.join(paths.pages, 'MCPCourse.tsx'),
  
  // 工具文件
  imageAssets: pathUtils.join(paths.utils, 'imageAssets.ts'),
  pathManager: pathUtils.join(paths.utils, 'pathManager.ts'),
  
  // 類型定義
  types: pathUtils.join(paths.types, 'index.ts')
} as const

// === AI操作指引 ===
export const aiInstructions = {
  // 文件操作時的路徑檢查清單
  pathChecklist: [
    '1. 確認文件是否存在於fileMap中',
    '2. 使用paths常數而非硬編碼路徑',
    '3. 檢查相對路徑vs絕對路徑的正確性',
    '4. 確認目標目錄是否存在',
    '5. 驗證文件擴展名是否正確'
  ],
  
  // 常見錯誤提醒
  commonMistakes: [
    '❌ 使用 "./src/data/courses.json" 而不是 fileMap.allCourses',
    '❌ 混淆 courses.ts 和 all-courses.json',
    '❌ 忘記檢查文件是否存在就直接編輯',
    '❌ 使用錯誤的相對路徑導入',
    '❌ 混合使用正斜線和反斜線'
  ]
}

// === 路徑驗證函數 ===
export const validatePath = (targetPath: string): {
  isValid: boolean;
  suggestions: string[];
  correctPath?: string;
} => {
  const suggestions: string[] = []
  
  // 檢查是否是已知的文件
  const knownFiles = Object.values(fileMap)
  const exactMatch = knownFiles.find(file => file === targetPath)
  
  if (exactMatch) {
    return { isValid: true, suggestions: [], correctPath: exactMatch }
  }
  
  // 尋找相似的路徑
  const similarPaths = knownFiles.filter(file => 
    file.includes(targetPath.split('/').pop() || '') ||
    targetPath.includes(file.split('/').pop() || '')
  )
  
  if (similarPaths.length > 0) {
    suggestions.push(`可能的正確路徑: ${similarPaths.join(', ')}`)
    return { isValid: false, suggestions, correctPath: similarPaths[0] }
  }
  
  suggestions.push('請檢查路徑是否正確，或參考 fileMap 中的已知路徑')
  return { isValid: false, suggestions }
}

export default { paths, pathUtils, fileMap, aiInstructions, validatePath } 