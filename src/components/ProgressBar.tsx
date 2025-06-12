import React from 'react'
import { CheckCircle } from 'lucide-react'

interface ProgressBarProps {
  progress: number
  showPercentage?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'green' | 'blue' | 'yellow' | 'red'
  className?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showPercentage = true,
  size = 'md',
  color = 'green',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  }

  const colorClasses = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500'
  }

  return (
    <div className={className}>
      {showPercentage && (
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>進度</span>
          <span>{progress}% 完成</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${sizeClasses[size]}`}>
        <div 
          className={`${colorClasses[color]} ${sizeClasses[size]} rounded-full transition-all duration-300`}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
