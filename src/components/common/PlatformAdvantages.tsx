import React from 'react'
import { TrendingUp, BookOpen, Users } from 'lucide-react'

interface Advantage {
  id: number
  title: string
  subtitle: string
  description: string
  percentage: string
  icon: React.ReactNode
  bgColor: string
  textColor: string
}

const PlatformAdvantages: React.FC = () => {
  const advantages: Advantage[] = [
    {
      id: 1,
      title: "生產力提升",
      subtitle: "66%",
      description: "真實研究顯示，使用AI工具的員工平均生產力提升66%，相當於47年的自然生產力增長",
      percentage: "66%",
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      bgColor: "bg-green-500",
      textColor: "text-green-500"
    },
    {
      id: 2,
      title: "編程效率",
      subtitle: "126%",
      description: "程式設計師使用AI工具每週可完成126%更多專案，大幅縮短開發週期",
      percentage: "126%",
      icon: <BookOpen className="w-12 h-12 text-white" />,
      bgColor: "bg-blue-500",
      textColor: "text-blue-500"
    },
    {
      id: 3,
      title: "市場規模",
      subtitle: "$7T",
      description: "Goldman Sachs估計GenAI將在未來10年創造7兆美元的全球GDP增長",
      percentage: "$7T",
      icon: <Users className="w-12 h-12 text-white" />,
      bgColor: "bg-orange-500",
      textColor: "text-orange-500"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI應用平台優勢
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            基於真實數據的AI應用效能提升，重新定義開發者工作方式
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group cursor-pointer"
            >
              {/* Icon */}
              <div className={`${advantage.bgColor} rounded-3xl w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {advantage.icon}
              </div>

              {/* Percentage/Value */}
              <div className={`text-5xl font-bold ${advantage.textColor} mb-4`}>
                {advantage.percentage}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformAdvantages 