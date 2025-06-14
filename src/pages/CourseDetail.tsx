import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  Play, Clock, Users, Star, CheckCircle, ArrowRight, 
  BookOpen, Award, Download, MessageCircle, Share2,
  Calendar, Target, Code, Video, FileText
} from 'lucide-react'
import { Button, Card, CardContent, Badge, ProgressBar } from '../components/ui'
import { useCourseStore } from '../stores/courseStore'
import { useUserStore } from '../stores/userStore'

interface CourseDetailProps {}

const CourseDetail: React.FC<CourseDetailProps> = () => {
  const { id: courseId } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'reviews' | 'resources'>('overview')
  
  const { 
    courses, 
    lessons, 
    currentCourse, 
    setCurrentCourse, 
    getCourseLessons, 
    getCourseWeeks 
  } = useCourseStore()
  
  const { 
    getTotalProgress, 
    getCompletedLessons 
  } = useUserStore()

  // Load course data
  useEffect(() => {
    const loadCourseData = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll load from our JSON files
        const allCoursesResponse = await import('../data/courses/all-courses.json')
        
        // Find and set current course
        const course = allCoursesResponse.default.find((c: any) => c.id === courseId)
        
        if (course) {
          // Check if course has actual content (only stage1 is available)
          if (courseId !== 'stage1-beginner') {
            // Redirect to under development page for other stages
            navigate(`/under-development/${courseId}`)
            return
          }
          
          setCurrentCourse(course as any)
          
          // Load lessons data for stage1 only
          const stage1LessonsResponse = await import('../data/lessons/stage1-lessons.json')
          useCourseStore.getState().setCourses(allCoursesResponse.default as any)
          useCourseStore.getState().setLessons(stage1LessonsResponse.default as any)
        }
        
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to load course data:', error)
        setIsLoading(false)
      }
    }

    if (courseId) {
      loadCourseData()
    }
  }, [courseId, setCurrentCourse, navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">載入課程資料中...</p>
        </div>
      </div>
    )
  }

  if (!currentCourse) {
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
  const courseWeeks = getCourseWeeks(currentCourse.id)
  const userProgress = getTotalProgress(currentCourse.id)
  const completedLessons = getCompletedLessons(currentCourse.id)

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return Video
      case 'text': return FileText
      case 'hands-on': return Code
      case 'quiz': return CheckCircle
      default: return BookOpen
    }
  }

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}小時${mins > 0 ? ` ${mins}分鐘` : ''}`
    }
    return `${mins}分鐘`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left: Course Info */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-blue-200 mb-6">
                <Link to="/" className="hover:text-white">首頁</Link>
                <span>/</span>
                <Link to="/courses" className="hover:text-white">課程</Link>
                <span>/</span>
                <span className="text-white">{currentCourse.title}</span>
              </nav>

              {/* Course Title and Badge */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge 
                    variant={currentCourse.isPopular ? 'danger' : 'info'}
                    className="bg-white/20 text-white border-white/30"
                  >
                    {currentCourse.isPopular ? '🔥 熱門課程' : `📚 ${currentCourse.level}`}
                  </Badge>
                  {currentCourse.isFree && (
                    <Badge variant="success" className="bg-green-500/20 text-green-300">
                      免費試學
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {currentCourse.title}
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  {currentCourse.subtitle}
                </p>
                <p className="text-lg text-blue-200 leading-relaxed">
                  {currentCourse.description}
                </p>
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xl font-bold">{currentCourse.rating}</span>
                  </div>
                  <div className="text-sm text-blue-200">
                    ({currentCourse.reviewCount} 評價)
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Users className="w-5 h-5" />
                    <span className="text-xl font-bold">
                      {currentCourse.enrollmentCount.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-blue-200">學員人數</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-xl font-bold">{currentCourse.duration}</span>
                  </div>
                  <div className="text-sm text-blue-200">學習時間</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-xl font-bold">{courseLessons.length}</span>
                  </div>
                  <div className="text-sm text-blue-200">課程數量</div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">你將學會的技術</h3>
                <div className="flex flex-wrap gap-2">
                  {currentCourse.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-white/10 text-white border-white/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Progress */}
              {userProgress > 0 && (
                <div className="mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">學習進度</span>
                      <span className="text-sm">{userProgress}% 完成</span>
                    </div>
                    <ProgressBar 
                      value={userProgress} 
                      color="green" 
                      className="mb-2" 
                    />
                    <div className="text-sm text-blue-200">
                      已完成 {completedLessons.length} / {courseLessons.length} 課程
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">
                        NT$ {currentCourse.price.toLocaleString()}
                      </span>
                      {currentCourse.originalPrice && (
                        <span className="text-lg text-blue-300 line-through">
                          NT$ {currentCourse.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {currentCourse.originalPrice && (
                      <div className="text-green-300 font-medium">
                        省下 NT$ {(currentCourse.originalPrice - currentCourse.price).toLocaleString()}
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 mb-6">
                    <Link to="/learn/stage1-beginner/stage1-lesson-1-1">
                      <Button 
                        variant="primary" 
                        size="lg" 
                        fullWidth
                        icon={Play}
                        iconPosition="right"
                        className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
                      >
                        🚀 開始學習
                      </Button>
                    </Link>
                    <Link to="/learn/stage1-beginner/stage1-lesson-1-1">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        fullWidth
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        👀 免費試看
                      </Button>
                    </Link>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 text-sm text-blue-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      終身學習權限
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      完整課程資料下載
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      專屬學習社群
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      完課認證證書
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex items-center gap-8 mb-8 border-b border-gray-200">
            {[
              { id: 'overview', label: '課程概覽', icon: Target },
              { id: 'curriculum', label: '課程大綱', icon: BookOpen },
              { id: 'reviews', label: '學員評價', icon: MessageCircle },
              { id: 'resources', label: '學習資源', icon: Download }
            ].map(tab => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors border-b-2 ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-blue-600'
                      : 'text-gray-600 border-transparent hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Learning Objectives */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">學習目標</h3>
                      <ul className="space-y-3">
                        {currentCourse.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Prerequisites */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">課程要求</h3>
                      <ul className="space-y-3">
                        {currentCourse.prerequisites.map((prereq, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{prereq}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Course Structure */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">課程結構</h3>
                      <div className="space-y-4">
                        {courseWeeks.map((week) => (
                          <div key={week.weekNumber} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">
                                第{week.weekNumber}週：{week.title}
                              </h4>
                              <Badge variant="secondary" size="sm">
                                {week.lessons.length} 課程
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-sm">
                              {week.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <div className="space-y-6">
                  {courseWeeks.map((week) => (
                    <Card key={week.weekNumber}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900">
                            第{week.weekNumber}週：{week.title}
                          </h3>
                          <Badge variant="info">
                            {week.lessons.length} 課程
                          </Badge>
                        </div>
                        
                        <div className="space-y-3">
                          {week.lessons.map((lesson) => {
                            const LessonIcon = getLessonIcon(lesson.type)
                            const isCompleted = completedLessons.includes(lesson.id)
                            
                            return (
                              <div 
                                key={lesson.id}
                                className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                              >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  isCompleted 
                                    ? 'bg-green-100 text-green-600' 
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {isCompleted ? (
                                    <CheckCircle className="w-4 h-4" />
                                  ) : (
                                    <LessonIcon className="w-4 h-4" />
                                  )}
                                </div>
                                
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-medium text-gray-900">
                                      {lesson.title}
                                    </h4>
                                    {lesson.isFree && (
                                      <Badge variant="success" size="sm">免費</Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    {lesson.description}
                                  </p>
                                </div>
                                
                                <div className="text-sm text-gray-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {formatDuration(lesson.duration)}
                                </div>
                                
                                {lesson.isFree && (
                                  <Button variant="outline" size="sm">
                                    預覽
                                  </Button>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">學員評價</h3>
                      <div className="text-center py-12 text-gray-500">
                        <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>學員評價功能開發中...</p>
                        <p className="text-sm mt-2">即將為您呈現真實的學習體驗分享</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Resources Tab */}
              {activeTab === 'resources' && (
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">學習資源</h3>
                      <div className="text-center py-12 text-gray-500">
                        <Download className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>學習資源正在準備中...</p>
                        <p className="text-sm mt-2">包含課程講義、代碼範例、實作模板等</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Instructor Info */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">課程講師</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">AI開發專家團隊</div>
                      <div className="text-sm text-gray-600">資深AI應用開發專家</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    由多位資深AI應用開發專家組成的教學團隊，擁有豐富的企業級AI專案經驗。
                  </p>
                </CardContent>
              </Card>

              {/* Share Course */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">分享課程</h3>
                  <Button variant="outline" fullWidth icon={Share2}>
                    分享給朋友
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetail