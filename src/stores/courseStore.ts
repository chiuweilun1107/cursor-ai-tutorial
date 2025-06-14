import { create } from 'zustand'

export interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'master'
  duration: string
  price: number
  originalPrice?: number
  isPopular?: boolean
  isFree?: boolean
  image: string
  objectives: string[]
  prerequisites: string[]
  technologies: string[]
  instructors: string[]
  rating: number
  reviewCount: number
  enrollmentCount: number
  lastUpdated: string
  status: 'coming-soon' | 'available' | 'updated'
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  description: string
  type: 'video' | 'text' | 'hands-on' | 'quiz' | 'project'
  duration: number // minutes
  isFree: boolean
  order: number
  weekNumber: number
  content?: {
    videoUrl?: string
    markdown?: string
    codeExamples?: CodeExample[]
    exercises?: Exercise[]
    resources?: Resource[]
  }
  prerequisites?: string[]
  objectives: string[]
}

export interface CodeExample {
  id: string
  title: string
  language: string
  code: string
  explanation: string
  runnable?: boolean
}

export interface Exercise {
  id: string
  title: string
  description: string
  type: 'coding' | 'quiz' | 'discussion'
  difficulty: 'easy' | 'medium' | 'hard'
  estimatedTime: number
  template?: string
  solution?: string
  hints: string[]
}

export interface Resource {
  id: string
  title: string
  type: 'link' | 'download' | 'video' | 'book'
  url: string
  description: string
}

export interface CourseWeek {
  weekNumber: number
  title: string
  description: string
  lessons: Lesson[]
  project?: Project
}

export interface Project {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  estimatedTime: string
  technologies: string[]
  requirements: string[]
  deliverables: string[]
  rubric: AssessmentCriteria[]
}

export interface AssessmentCriteria {
  category: string
  description: string
  weight: number
  levels: {
    excellent: string
    good: string
    satisfactory: string
    needsImprovement: string
  }
}

interface CourseState {
  // Course Data
  courses: Course[]
  lessons: Lesson[]
  currentCourse: Course | null
  currentLesson: Lesson | null
  
  // Filters & Search
  searchQuery: string
  levelFilter: string[]
  typeFilter: string[]
  sortBy: 'popularity' | 'rating' | 'duration' | 'price'
  
  // Loading States
  isLoading: boolean
  error: string | null
  
  // Actions
  setCourses: (courses: Course[]) => void
  setLessons: (lessons: Lesson[]) => void
  setCurrentCourse: (course: Course | null) => void
  setCurrentLesson: (lesson: Lesson | null) => void
  setSearchQuery: (query: string) => void
  setLevelFilter: (levels: string[]) => void
  setTypeFilter: (types: string[]) => void
  setSortBy: (sortBy: CourseState['sortBy']) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  
  // Computed Values
  getFilteredCourses: () => Course[]
  getCourseLessons: (courseId: string) => Lesson[]
  getCourseWeeks: (courseId: string) => CourseWeek[]
  getNextLesson: (courseId: string, currentLessonId: string) => Lesson | null
  getPreviousLesson: (courseId: string, currentLessonId: string) => Lesson | null
}

export const useCourseStore = create<CourseState>((set, get) => ({
  // Initial State
  courses: [],
  lessons: [],
  currentCourse: null,
  currentLesson: null,
  searchQuery: '',
  levelFilter: [],
  typeFilter: [],
  sortBy: 'popularity',
  isLoading: false,
  error: null,

  // Actions
  setCourses: (courses) => set({ courses }),
  setLessons: (lessons) => set({ lessons }),
  setCurrentCourse: (course) => set({ currentCourse: course }),
  setCurrentLesson: (lesson) => set({ currentLesson: lesson }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setLevelFilter: (levels) => set({ levelFilter: levels }),
  setTypeFilter: (types) => set({ typeFilter: types }),
  setSortBy: (sortBy) => set({ sortBy }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  // Computed Values
  getFilteredCourses: () => {
    const { courses, searchQuery, levelFilter, typeFilter, sortBy } = get()
    
    let filtered = courses.filter(course => {
      // Search filter
      if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !course.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }
      
      // Level filter
      if (levelFilter.length > 0 && !levelFilter.includes(course.level)) {
        return false
      }
      
      return true
    })
    
    // Sort
    switch (sortBy) {
      case 'popularity':
        filtered.sort((a, b) => b.enrollmentCount - a.enrollmentCount)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'price':
        filtered.sort((a, b) => a.price - b.price)
        break
      default:
        break
    }
    
    return filtered
  },

  getCourseLessons: (courseId) => {
    const { lessons } = get()
    return lessons
      .filter(lesson => lesson.courseId === courseId)
      .sort((a, b) => a.order - b.order)
  },

  getCourseWeeks: (courseId) => {
    const lessons = get().getCourseLessons(courseId)
    const weeks: CourseWeek[] = []
    
    // Define week titles for stage1
    const stage1WeekTitles = {
      1: { title: 'AI工具認知建立', description: '建立對AI輔助開發的正確認知，學習與AI對話的技巧' },
      2: { title: '程式思維培養', description: '培養程式設計的邏輯思維，為實際編程做準備' },
      3: { title: '第一次真正編程', description: '使用AI工具進行第一次實際的程式開發' },
      4: { title: '整合應用與專案完成', description: '整合前三週所學，完成個人作品集網站' }
    }
    
    // Group lessons by week
    lessons.forEach(lesson => {
      let week = weeks.find(w => w.weekNumber === lesson.weekNumber)
      if (!week) {
        const weekInfo = stage1WeekTitles[lesson.weekNumber as keyof typeof stage1WeekTitles] || 
                        { title: `第${lesson.weekNumber}週`, description: '' }
        week = {
          weekNumber: lesson.weekNumber,
          title: weekInfo.title,
          description: weekInfo.description,
          lessons: []
        }
        weeks.push(week)
      }
      week.lessons.push(lesson)
    })
    
    return weeks.sort((a, b) => a.weekNumber - b.weekNumber)
  },

  getNextLesson: (courseId, currentLessonId) => {
    const lessons = get().getCourseLessons(courseId)
    const currentIndex = lessons.findIndex(l => l.id === currentLessonId)
    return currentIndex >= 0 && currentIndex < lessons.length - 1 
      ? lessons[currentIndex + 1] 
      : null
  },

  getPreviousLesson: (courseId, currentLessonId) => {
    const lessons = get().getCourseLessons(courseId)
    const currentIndex = lessons.findIndex(l => l.id === currentLessonId)
    return currentIndex > 0 
      ? lessons[currentIndex - 1] 
      : null
  },
}))