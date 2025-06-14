import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { 
  ChevronLeft, ChevronRight, BookOpen, Clock, CheckCircle, 
  Play, Pause, RotateCcw, Menu, X, FileText, Video, Code,
  Download, Share2, MessageCircle, Lightbulb, Target,
  ArrowLeft, Home, Award, Flag
} from 'lucide-react'
import { Button, Card, CardContent, Badge, ProgressBar } from '../components/ui'
import { useCourseStore } from '../stores/courseStore'
import { useUserStore } from '../stores/userStore'
import LessonContent from '../components/course/LessonContent'
import SlideViewer from '../components/course/SlideViewer'
import BlockViewer from '../components/course/BlockViewer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface LessonViewerProps {}

const LessonViewer: React.FC<LessonViewerProps> = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>()
  const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState(true)
  const [lessonContent, setLessonContent] = useState<string>('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [userNotes, setUserNotes] = useState('')
  const [viewMode, setViewMode] = useState<'slides' | 'blocks' | 'markdown'>('slides')
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  
  const { 
    currentCourse, 
    currentLesson, 
    setCurrentLesson,
    getCourseLessons,
    getNextLesson,
    getPreviousLesson 
  } = useCourseStore()
  
  const { 
    isAuthenticated,
    updateProgress,
    completeLesson,
    getCompletedLessons,
    getTotalProgress 
  } = useUserStore()

  // Load lesson data
  useEffect(() => {
    const loadLessonData = async () => {
      try {
        setIsLoading(true)
        
        // Load course and lesson data
        const allCoursesResponse = await import('../data/courses/all-courses.json')
        const stage1LessonsResponse = await import('../data/lessons/stage1-lessons.json')
        
        useCourseStore.getState().setCourses(allCoursesResponse.default as any)
        useCourseStore.getState().setLessons(stage1LessonsResponse.default as any)
        
        const course = allCoursesResponse.default.find(c => c.id === courseId)
        const lesson = stage1LessonsResponse.default.find(l => l.id === lessonId)
        
        if (course) {
          useCourseStore.getState().setCurrentCourse(course as any)
        }
        
        if (lesson) {
          setCurrentLesson(lesson as any)
          
          // Load lesson content (markdown)
          if (lesson.content?.markdown) {
            try {
              console.log('Fetching markdown:', lesson.content.markdown)
              const response = await fetch(lesson.content.markdown)
              console.log('Response status:', response.status)
              if (response.ok) {
                const content = await response.text()
                console.log('Content length:', content.length)
                console.log('Content preview:', content.substring(0, 200))
                setLessonContent(content)
              } else {
                console.log('Failed to fetch, using placeholder')
                setLessonContent('')
              }
            } catch (error) {
              console.log('Content file not found, using placeholder:', error)
              setLessonContent('')
            }
          } else {
            console.log('No markdown content specified for lesson:', lesson.id)
            setLessonContent('')
          }
          
          // Check if lesson is completed (no authentication required)
          const completedLessons = getCompletedLessons(courseId!)
          setIsCompleted(completedLessons.includes(lessonId!))
        }
        
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to load lesson data:', error)
        setIsLoading(false)
      }
    }

    if (courseId && lessonId) {
      loadLessonData()
    }
  }, [courseId, lessonId, setCurrentLesson, getCompletedLessons])

  // Auto-save progress every 30 seconds
  useEffect(() => {
    if (!isAuthenticated || !courseId || !lessonId || !currentLesson) return

    const interval = setInterval(() => {
      const progressPercentage = Math.min((currentTime / currentLesson.duration) * 100, 95)
      updateProgress({
        courseId,
        lessonId,
        progressPercentage,
        timeSpent: currentTime,
        notes: userNotes
      })
    }, 30000)

    return () => clearInterval(interval)
  }, [currentTime, courseId, lessonId, currentLesson, userNotes, isAuthenticated, updateProgress])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">載入課程內容中...</p>
        </div>
      </div>
    )
  }

  if (!currentCourse || !currentLesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">課程不存在</h2>
          <p className="text-gray-600 mb-6">抱歉，找不到您要查看的課程</p>
          <Link to="/courses">
            <Button>返回課程列表</Button>
          </Link>
        </div>
      </div>
    )
  }

  const courseLessons = getCourseLessons(currentCourse.id)
  const currentLessonIndex = courseLessons.findIndex(l => l.id === lessonId)
  const nextLesson = getNextLesson(currentCourse.id, lessonId!)
  const previousLesson = getPreviousLesson(currentCourse.id, lessonId!)
  const courseProgress = isAuthenticated ? getTotalProgress(currentCourse.id) : 0

  const handleCompleteLesson = () => {
    if (!courseId || !lessonId) return
    
    completeLesson(courseId, lessonId, currentLesson.duration)
    setIsCompleted(true)
    
    // Show completion message
    alert('🎉 恭喜完成課程！')
    
    // Auto navigate to next lesson after 2 seconds
    if (nextLesson) {
      setTimeout(() => {
        navigate(`/learn/${courseId}/${nextLesson.id}`)
      }, 2000)
    }
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return Video
      case 'slides': return FileText
      case 'text': return FileText
      case 'hands-on': return Code
      case 'project': return Code
      default: return BookOpen
    }
  }

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}h ${mins}m`
    }
    return `${mins}m`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Back and Course Info */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(`/courses/${courseId}`)}
                icon={ArrowLeft}
              >
                返回課程
              </Button>
              
              <div className="hidden md:block">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-blue-600">首頁</Link>
                  <span>/</span>
                  <Link to={`/courses/${courseId}`} className="hover:text-blue-600">
                    {currentCourse.title}
                  </Link>
                  <span>/</span>
                  <span className="text-gray-900">{currentLesson.title}</span>
                </div>
              </div>
            </div>

            {/* Center: Lesson Progress */}
            <div className="hidden lg:block flex-1 max-w-md mx-8">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  {currentLessonIndex + 1} / {courseLessons.length}
                </span>
                <ProgressBar 
                  value={((currentLessonIndex + (isCompleted ? 1 : 0.5)) / courseLessons.length) * 100}
                  color="blue"
                  size="sm"
                />
                <span className="text-sm text-gray-600">
                  {Math.round(((currentLessonIndex + (isCompleted ? 1 : 0.5)) / courseLessons.length) * 100)}%
                </span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                icon={isSidebarOpen ? X : Menu}
                className="lg:hidden"
              >
                課程大綱
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                icon={Share2}
              >
                分享
              </Button>
              
              {!isCompleted && (
                <Button
                  size="sm"
                  onClick={handleCompleteLesson}
                  icon={CheckCircle}
                  className="bg-green-600 hover:bg-green-700"
                >
                  標記完成
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar - Course Outline */}
        <div className={`${
          isSidebarOpen ? 'w-80' : 'w-0'
        } transition-all duration-300 bg-white border-r border-gray-200 overflow-hidden lg:w-80`}>
          <div className="h-full overflow-y-auto">
            {/* Course Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="font-bold text-gray-900 mb-2">{currentCourse.title}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <Clock className="w-4 h-4" />
                <span>{currentCourse.duration}</span>
                <span>•</span>
                <span>{courseLessons.length} 課程</span>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">整體進度</span>
                  <span className="font-medium">{courseProgress}%</span>
                </div>
                <ProgressBar value={courseProgress} color="green" size="sm" />
              </div>
            </div>

            {/* Lesson List */}
            <div className="p-4">
              <div className="space-y-2">
                {courseLessons.map((lesson, index) => {
                  const LessonIcon = getLessonIcon(lesson.type)
                  const isCurrentLesson = lesson.id === lessonId
                  const isLessonCompleted = getCompletedLessons(currentCourse.id).includes(lesson.id)
                  
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => navigate(`/learn/${courseId}/${lesson.id}`)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        isCurrentLesson
                          ? 'bg-blue-50 border-blue-200 text-blue-900'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isLessonCompleted
                            ? 'bg-green-100 text-green-600'
                            : isCurrentLesson
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {isLessonCompleted ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <LessonIcon className="w-4 h-4" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className={`font-medium truncate ${
                              isCurrentLesson ? 'text-blue-900' : 'text-gray-900'
                            }`}>
                              {index + 1}. {lesson.title}
                            </h4>
                            {lesson.isFree && (
                              <Badge variant="success" size="sm">免費</Badge>
                            )}
                          </div>
                          
                          <p className={`text-sm truncate ${
                            isCurrentLesson ? 'text-blue-700' : 'text-gray-600'
                          }`}>
                            {lesson.description}
                          </p>
                          
                          <div className={`text-xs mt-1 ${
                            isCurrentLesson ? 'text-blue-600' : 'text-gray-500'
                          }`}>
                            <Clock className="w-3 h-3 inline mr-1" />
                            {formatDuration(lesson.duration)}
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="max-w-4xl mx-auto p-6">
              
              {/* Lesson Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isCompleted ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      React.createElement(getLessonIcon(currentLesson.type), { className: "w-6 h-6" })
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="info" size="sm">
                        第 {currentLessonIndex + 1} 課
                      </Badge>
                      <Badge 
                        variant={(currentLesson as any).type === 'slides' ? 'info' : 'secondary'} 
                        size="sm"
                      >
                        {(currentLesson as any).type === 'slides' ? '投影片' : 
                         (currentLesson as any).type === 'hands-on' ? '實作' : 
                         (currentLesson as any).type === 'project' ? '專案' : 
                         (currentLesson as any).type === 'video' ? '影片' : '文章'}
                      </Badge>
                      {currentLesson.isFree && (
                        <Badge variant="success" size="sm">免費</Badge>
                      )}
                      {isCompleted && (
                        <Badge variant="success" size="sm">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          已完成
                        </Badge>
                      )}
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {currentLesson.title}
                    </h1>
                    
                    <p className="text-gray-600 mb-3">
                      {currentLesson.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        預估時間：{formatDuration(currentLesson.duration)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        難度：{currentLesson.type === 'hands-on' ? '實作練習' : '基礎概念'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Objectives */}
                {currentLesson.objectives && (
                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-500" />
                        學習目標
                      </h3>
                      <ul className="space-y-2">
                        {currentLesson.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="mb-6">
                <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg w-fit">
                  <button
                    onClick={() => setViewMode('slides')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'slides'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    📊 投影片模式
                  </button>
                  <button
                    onClick={() => setViewMode('blocks')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'blocks'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    🧩 區塊模式
                  </button>
                  <button
                    onClick={() => setViewMode('markdown')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'markdown'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    📄 文章模式
                  </button>
                </div>
              </div>

              {/* Lesson Content */}
              <div className="mb-8">
                {lessonContent ? (
                  viewMode === 'slides' ? (
                    <SlideViewer
                      markdownContent={lessonContent}
                      onSlideChange={(slideIndex) => {
                        setCurrentSlideIndex(slideIndex)
                        // 更新學習進度
                        const progressPercentage = Math.min(((slideIndex + 1) / 10) * 100, 95)
                        setCurrentTime(progressPercentage)
                      }}
                      onComplete={() => {
                        if (!isCompleted) {
                          handleCompleteLesson()
                        }
                      }}
                    />
                  ) : viewMode === 'blocks' ? (
                    <BlockViewer
                      markdownContent={lessonContent}
                    />
                  ) : (
                    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">{children}</h1>,
                          h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>,
                          h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">{children}</h3>,
                          h4: ({children}) => <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">{children}</h4>,
                          p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                          ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
                          ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
                          li: ({children}) => <li className="text-gray-700">{children}</li>,
                          blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 text-gray-700 italic">{children}</blockquote>,
                          code: ({children}) => <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded text-sm">{children}</code>,
                          pre: ({children}) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">{children}</pre>,
                          strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                          em: ({children}) => <em className="italic text-gray-700">{children}</em>,
                          hr: () => <hr className="border-gray-300 my-8" />,
                          table: ({children}) => <table className="w-full border-collapse border border-gray-300 mb-4">{children}</table>,
                          th: ({children}) => <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold text-left">{children}</th>,
                          td: ({children}) => <td className="border border-gray-300 px-4 py-2">{children}</td>,
                        }}
                      >
                        {lessonContent}
                      </ReactMarkdown>
                    </div>
                  )
                ) : (
                  <LessonContent lessonId={lessonId!} />
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-4 py-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  {previousLesson ? (
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/learn/${courseId}/${previousLesson.id}`)}
                      icon={ChevronLeft}
                    >
                      上一課
                    </Button>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {!isCompleted && (
                    <Button
                      onClick={handleCompleteLesson}
                      icon={CheckCircle}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      標記完成
                    </Button>
                  )}
                  
                  {nextLesson ? (
                    <Button
                      onClick={() => navigate(`/learn/${courseId}/${nextLesson.id}`)}
                      icon={ChevronRight}
                      iconPosition="right"
                    >
                      下一課
                    </Button>
                  ) : (
                    <Button
                      onClick={() => navigate(`/courses/${courseId}`)}
                      icon={Award}
                      iconPosition="right"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      完成課程
                    </Button>
                  )}
                </div>
              </div>

              {/* Notes Section */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-500" />
                    學習筆記
                  </h3>
                  <textarea
                    value={userNotes}
                    onChange={(e) => setUserNotes(e.target.value)}
                    placeholder="在這裡記錄你的學習心得、疑問或重要提醒..."
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="flex justify-end mt-3">
                    <Button size="sm" variant="outline">
                      儲存筆記
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonViewer