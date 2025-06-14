import React from 'react'

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'gray' | 'white'
  className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const colorClasses = {
    primary: 'text-primary-600',
    gray: 'text-gray-600',
    white: 'text-white'
  }

  return (
    <div className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  )
}

interface LoadingPageProps {
  message?: string
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = '載入中...' 
}) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="lg" className="mx-auto mb-4" />
      <p className="text-gray-600">{message}</p>
    </div>
  </div>
)

interface LoadingCardProps {
  message?: string
  className?: string
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ 
  message = '載入中...', 
  className = '' 
}) => (
  <div className={`bg-white rounded-lg shadow-sm p-12 text-center ${className}`}>
    <LoadingSpinner size="lg" className="mx-auto mb-4" />
    <p className="text-gray-600">{message}</p>
  </div>
)

export default LoadingSpinner
