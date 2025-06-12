// 課程相關類型定義
export interface Lesson {
  id: number
  title: string
  type: 'video' | 'hands-on' | 'text' | 'quiz'
  duration: string
  description?: string
  videoUrl?: string
  content?: string
  completed?: boolean
}

export interface Week {
  id: number
  title: string
  description: string
  lessons: Lesson[]
}

export interface Project {
  id: string
  title: string
  description: string
  difficulty: '簡單' | '中等' | '困難'
  estimatedTime: string
  technologies: string[]
  github?: string
  demo?: string
}

export interface Course {
  id: string
  title: string
  subtitle: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  description: string
  objectives: string[]
  prerequisites: string[]
  weeks: Week[]
  projects: Project[]
  resources: Resource[]
}

export interface Resource {
  id: string
  title: string
  type: 'link' | 'download' | 'video' | 'document'
  url: string
  description?: string
}

// 用戶相關類型定義
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
  progress: UserProgress
}

export interface UserProgress {
  currentCourse?: string
  completedLessons: number[]
  completedProjects: string[]
  totalStudyTime: number // 分鐘
  streak: number // 連續學習天數
  badges: Badge[]
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  earnedAt: Date
}

// 學習統計類型
export interface LearningStats {
  totalLessons: number
  completedLessons: number
  totalProjects: number
  completedProjects: number
  studyTime: number
  averageSessionTime: number
}
