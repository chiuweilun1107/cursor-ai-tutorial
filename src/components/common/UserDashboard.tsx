import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, Clock, Award, TrendingUp, Target, 
  Calendar, Star, Users, PlayCircle, CheckCircle,
  BarChart3, Trophy, Flame
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, Badge, ProgressBar, Button } from '../ui'
import { useUserStore } from '../../stores/userStore'
import { useCourseStore } from '../../stores/courseStore'

interface UserDashboardProps {
  className?: string
}

const UserDashboard: React.FC<UserDashboardProps> = ({ className = '' }) => {
  const { 
    profile, 
    progress, 
    achievements, 
    totalStudyTime, 
    currentStreak,
    getTotalProgress,
    getCompletedLessons 
  } = useUserStore()
  
  const { courses } = useCourseStore()

  if (!profile) {
    return (
      <div className={`p-6 text-center ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">開始你的學習之旅</h3>
        <p className="text-gray-600 mb-4">登入以追蹤學習進度和獲得個人化體驗</p>
        <Button>立即登入</Button>
      </div>
    )
  }

  // Calculate stats
  const enrolledCourses = courses.filter(course => 
    progress.some(p => p.courseId === course.id)
  )
  
  const completedLessons = progress.filter(p => p.progressPercentage === 100)
  const totalLessons = progress.length
  const averageProgress = totalLessons > 0 
    ? Math.round(progress.reduce((sum, p) => sum + p.progressPercentage, 0) / totalLessons)
    : 0

  const formatStudyTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}小時${mins > 0 ? ` ${mins}分鐘` : ''}`
    }
    return `${mins}分鐘`
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">歡迎回來，{profile.name}！</h2>
            <p className="text-blue-100">繼續你的AI學習之旅</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{currentStreak}</div>
            <div className="text-sm text-blue-200 flex items-center gap-1">
              <Flame className="w-4 h-4" />
              連續學習天數
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">學習時間</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatStudyTime(totalStudyTime)}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">完成課程</p>
                <p className="text-2xl font-bold text-gray-900">
                  {completedLessons.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">平均進度</p>
                <p className="text-2xl font-bold text-gray-900">{averageProgress}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">獲得徽章</p>
                <p className="text-2xl font-bold text-gray-900">{achievements.length}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Current Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              正在學習的課程
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {enrolledCourses.length > 0 ? (
                enrolledCourses.map(course => {
                  const courseProgress = getTotalProgress(course.id)
                  const completedLessonsCount = getCompletedLessons(course.id).length
                  const totalLessonsCount = progress.filter(p => p.courseId === course.id).length
                  
                  return (
                    <div key={course.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">{course.title}</h4>
                          <p className="text-sm text-gray-600">{course.subtitle}</p>
                        </div>
                        <Badge variant={courseProgress === 100 ? 'success' : 'info'}>
                          {courseProgress === 100 ? '已完成' : '進行中'}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">進度</span>
                          <span className="font-medium">{courseProgress}%</span>
                        </div>
                        <ProgressBar value={courseProgress} color="blue" size="sm" />
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{completedLessonsCount} / {totalLessonsCount} 課程</span>
                          <Link
                            to={`/courses/${course.id}`}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            查看詳情
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>還沒有開始任何課程</p>
                  <Link to="/courses" className="text-blue-600 hover:text-blue-700 text-sm">
                    瀏覽課程
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              最近獲得的成就
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.length > 0 ? (
                achievements.slice(0, 5).map(achievement => (
                  <div key={achievement.id} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(achievement.unlockedAt).toLocaleDateString('zh-TW')}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Trophy className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>開始學習以獲得成就徽章</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>快速行動</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/courses"
              className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">瀏覽課程</h4>
                  <p className="text-sm text-gray-600">發現新的學習內容</p>
                </div>
              </div>
            </Link>

            <div className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">學習目標</h4>
                  <p className="text-sm text-gray-600">設定個人學習計劃</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">學習社群</h4>
                  <p className="text-sm text-gray-600">與其他學員交流</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserDashboard