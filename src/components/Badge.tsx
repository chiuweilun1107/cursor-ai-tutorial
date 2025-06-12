import React from 'react'
import { CheckCircle, Clock, Star, AlertCircle } from 'lucide-react'

interface BadgeProps {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = ''
}) => {
  const variantClasses = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    primary: 'bg-primary-100 text-primary-800 border-primary-200'
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  return (
    <span className={`
      inline-flex items-center gap-1 border rounded-full font-medium
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${className}
    `}>
      {icon}
      {children}
    </span>
  )
}

// 預設的特殊徽章組件
export const CompletedBadge: React.FC<{ className?: string }> = ({ className }) => (
  <Badge variant="success" icon={<CheckCircle size={14} />} className={className}>
    已完成
  </Badge>
)

export const DifficultyBadge: React.FC<{ difficulty: '簡單' | '中等' | '困難', className?: string }> = ({ 
  difficulty, 
  className 
}) => {
  const variantMap = {
    '簡單': 'success' as const,
    '中等': 'warning' as const,
    '困難': 'error' as const
  }

  const iconMap = {
    '簡單': <Star size={14} />,
    '中等': <Clock size={14} />,
    '困難': <AlertCircle size={14} />
  }

  return (
    <Badge 
      variant={variantMap[difficulty]} 
      icon={iconMap[difficulty]}
      className={className}
    >
      {difficulty}
    </Badge>
  )
}

export const LevelBadge: React.FC<{ level: 'beginner' | 'intermediate' | 'advanced', className?: string }> = ({ 
  level, 
  className 
}) => {
  const levelMap = {
    beginner: { text: '初級', variant: 'success' as const },
    intermediate: { text: '中級', variant: 'warning' as const },
    advanced: { text: '高級', variant: 'error' as const }
  }

  const { text, variant } = levelMap[level]

  return (
    <Badge variant={variant} className={className}>
      {text}
    </Badge>
  )
}

export default Badge
