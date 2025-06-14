import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface UserProfile {
  id: string
  name: string
  email: string
  avatarUrl?: string
  subscriptionTier: 'free' | 'basic' | 'premium'
  joinedAt: string
}

export interface LearningProgress {
  courseId: string
  lessonId: string
  progressPercentage: number
  completedAt?: string
  timeSpent: number // minutes
  notes?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  unlockedAt: string
  category: 'course' | 'skill' | 'project' | 'streak'
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  language: 'zh-TW' | 'en'
  emailNotifications: boolean
  studyReminders: boolean
}

interface UserState {
  // User Profile
  profile: UserProfile | null
  isAuthenticated: boolean
  
  // Learning Progress
  progress: LearningProgress[]
  achievements: Achievement[]
  currentStreak: number
  totalStudyTime: number
  
  // Preferences
  preferences: UserPreferences
  
  // Actions
  setProfile: (profile: UserProfile) => void
  updateProgress: (progress: LearningProgress) => void
  completeLesson: (courseId: string, lessonId: string, timeSpent: number) => void
  addAchievement: (achievement: Achievement) => void
  updatePreferences: (preferences: Partial<UserPreferences>) => void
  getTotalProgress: (courseId: string) => number
  getCompletedLessons: (courseId: string) => string[]
  logout: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      // Initial State
      profile: null,
      isAuthenticated: false,
      progress: [],
      achievements: [],
      currentStreak: 0,
      totalStudyTime: 0,
      preferences: {
        theme: 'system',
        language: 'zh-TW',
        emailNotifications: true,
        studyReminders: true,
      },

      // Actions
      setProfile: (profile) => set({ 
        profile, 
        isAuthenticated: true 
      }),

      updateProgress: (newProgress) => set((state) => {
        const existingIndex = state.progress.findIndex(
          p => p.courseId === newProgress.courseId && p.lessonId === newProgress.lessonId
        )
        
        let updatedProgress
        if (existingIndex >= 0) {
          // Update existing progress
          updatedProgress = state.progress.map((p, index) => 
            index === existingIndex ? newProgress : p
          )
        } else {
          // Add new progress
          updatedProgress = [...state.progress, newProgress]
        }

        return { 
          progress: updatedProgress,
          totalStudyTime: state.totalStudyTime + (newProgress.timeSpent || 0)
        }
      }),

      completeLesson: (courseId, lessonId, timeSpent) => set((state) => {
        const existingProgress = state.progress.find(
          p => p.courseId === courseId && p.lessonId === lessonId
        )

        const completedProgress: LearningProgress = {
          courseId,
          lessonId,
          progressPercentage: 100,
          completedAt: new Date().toISOString(),
          timeSpent: (existingProgress?.timeSpent || 0) + timeSpent
        }

        return {
          progress: existingProgress 
            ? state.progress.map(p => 
                p.courseId === courseId && p.lessonId === lessonId 
                  ? completedProgress 
                  : p
              )
            : [...state.progress, completedProgress],
          totalStudyTime: state.totalStudyTime + timeSpent
        }
      }),

      addAchievement: (achievement) => set((state) => ({
        achievements: [...state.achievements, achievement]
      })),

      updatePreferences: (newPreferences) => set((state) => ({
        preferences: { ...state.preferences, ...newPreferences }
      })),

      getTotalProgress: (courseId) => {
        const { progress } = get()
        const courseProgress = progress.filter(p => p.courseId === courseId)
        if (courseProgress.length === 0) return 0
        
        const totalProgress = courseProgress.reduce(
          (sum, p) => sum + p.progressPercentage, 0
        )
        return Math.round(totalProgress / courseProgress.length)
      },

      getCompletedLessons: (courseId) => {
        const { progress } = get()
        return progress
          .filter(p => p.courseId === courseId && p.progressPercentage === 100)
          .map(p => p.lessonId)
      },

      logout: () => set({
        profile: null,
        isAuthenticated: false,
        progress: [],
        achievements: [],
        currentStreak: 0,
        totalStudyTime: 0,
      }),
    }),
    {
      name: 'ai-learning-user-storage',
      partialize: (state) => ({
        profile: state.profile,
        isAuthenticated: state.isAuthenticated,
        progress: state.progress,
        achievements: state.achievements,
        currentStreak: state.currentStreak,
        totalStudyTime: state.totalStudyTime,
        preferences: state.preferences,
      }),
    }
  )
)