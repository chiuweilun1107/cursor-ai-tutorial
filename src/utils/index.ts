import { LearningStats, UserProgress } from '../types'

// 格式化時間相關工具函數
export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes}分鐘`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  if (remainingMinutes === 0) {
    return `${hours}小時`
  }
  return `${hours}小時${remainingMinutes}分鐘`
}

export const formatStudyTime = (totalMinutes: number): string => {
  if (totalMinutes < 60) {
    return `${totalMinutes}分鐘`
  }
  if (totalMinutes < 1440) { // 少於一天
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    return minutes > 0 ? `${hours}小時${minutes}分鐘` : `${hours}小時`
  }
  const days = Math.floor(totalMinutes / 1440)
  const hours = Math.floor((totalMinutes % 1440) / 60)
  return hours > 0 ? `${days}天${hours}小時` : `${days}天`
}

// 進度計算工具函數
export const calculateProgress = (
  completedLessons: number[],
  totalLessons: number
): number => {
  if (totalLessons === 0) return 0
  return Math.round((completedLessons.length / totalLessons) * 100)
}

export const calculateCourseProgress = (
  userProgress: UserProgress,
  courseId: string
): number => {
  // 這裡需要根據具體的課程資料來計算
  // 暫時返回基於完成課程數的簡單計算
  const totalLessons = 20 // 假設每個課程有20堂課
  return calculateProgress(userProgress.completedLessons, totalLessons)
}

// 本地存儲工具函數
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },

  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  }
}

// 學習統計工具函數
export const getLearningStats = (progress: UserProgress): LearningStats => {
  return {
    totalLessons: 50, // 這應該從課程資料計算
    completedLessons: progress.completedLessons.length,
    totalProjects: 10, // 這應該從課程資料計算
    completedProjects: progress.completedProjects.length,
    studyTime: progress.totalStudyTime,
    averageSessionTime: progress.totalStudyTime > 0 ? 
      Math.round(progress.totalStudyTime / Math.max(1, progress.completedLessons.length)) : 0
  }
}

// 日期工具函數
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export const isToday = (date: Date): boolean => {
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

// URL 工具函數
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// 顏色工具函數
export const getColorClasses = (color: string) => {
  const colorMap: Record<string, any> = {
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      badge: 'bg-green-100 text-green-800',
      button: 'bg-green-600 hover:bg-green-700',
      text: 'text-green-600'
    },
    yellow: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200', 
      badge: 'bg-yellow-100 text-yellow-800',
      button: 'bg-yellow-600 hover:bg-yellow-700',
      text: 'text-yellow-600'
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      badge: 'bg-red-100 text-red-800', 
      button: 'bg-red-600 hover:bg-red-700',
      text: 'text-red-600'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-800',
      button: 'bg-blue-600 hover:bg-blue-700',
      text: 'text-blue-600'
    }
  }
  return colorMap[color] || colorMap.blue
}
