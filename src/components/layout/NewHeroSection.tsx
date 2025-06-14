import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Users, Star, Clock } from 'lucide-react'
import { Button, Badge } from '../ui'

interface HeroSectionProps {
  className?: string
}

const NewHeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated background shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center mb-6">
                <Badge variant="info" size="lg" className="bg-white/20 text-white border border-white/30">
                  🚀 AI學習革命正在發生
                </Badge>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                從
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  零基礎
                </span>
                到
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  企業級
                </span>
                <br />
                AI輔助開發專家
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                掌握 <strong>ChatGPT + Cursor + Claude</strong> 三大AI工具，
                <br />
                4-6週內從完全不會程式到獨立開發，
                <br />
                最終具備企業系統建置能力
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">1,500+</div>
                  <div className="text-sm text-blue-200">成功學員</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">4.8/5</div>
                  <div className="text-sm text-blue-200">課程評分</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">66%</div>
                  <div className="text-sm text-blue-200">效率提升</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  立即開始免費試學
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
                  icon={Play}
                >
                  觀看介紹影片
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 text-blue-100">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span>來自500+學員的五星好評</span>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative">
              {/* Main Visual Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white text-xl font-semibold">學習路徑預覽</h3>
                  <Badge variant="success" className="bg-green-500/20 text-green-300">
                    5個階段
                  </Badge>
                </div>

                {/* Learning Path Steps */}
                <div className="space-y-4">
                  {[
                    { stage: '第一階段', title: '零基礎啟蒙', duration: '4-6週', color: 'from-green-400 to-green-600', students: '1,250人' },
                    { stage: '第二階段', title: 'AI工具熟練', duration: '6-8週', color: 'from-blue-400 to-blue-600', students: '567人' },
                    { stage: '第三階段', title: '全端開發', duration: '8-10週', color: 'from-purple-400 to-purple-600', students: '890人' },
                    { stage: '第四階段', title: '企業級技能', duration: '10-12週', color: 'from-orange-400 to-orange-600', students: '234人' },
                    { stage: '第五階段', title: '系統架構師', duration: '12-16週', color: 'from-red-400 to-red-600', students: '89人' }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color}`}></div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{step.stage}: {step.title}</div>
                        <div className="text-blue-200 text-sm flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {step.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {step.students}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <Link
                    to="/courses"
                    className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    查看完整課程規劃
                  </Link>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                限時優惠 40% OFF
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                🎯 就業成功率 80%+
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">向下滾動探索更多</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewHeroSection