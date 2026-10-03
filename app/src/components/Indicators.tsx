import type { ReactNode } from 'react'

export type BadgeTone = 'neutral' | 'accent' | 'outline'

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
}

export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return <span className={`badge badge--${tone}`}>{children}</span>
}

interface CalloutProps {
  label: string
  children: ReactNode
  tone?: BadgeTone
}

/**
 * Used wherever a description could be mistaken for a result. The label is
 * deliberately explicit so no screen can imply progress that has not happened.
 */
export function Callout({ label, children, tone = 'outline' }: CalloutProps) {
  return (
    <aside className={`callout callout--${tone}`}>
      <p className="callout__label">{label}</p>
      <div className="callout__body">{children}</div>
    </aside>
  )
}

interface EmptyStateProps {
  title: string
  children: ReactNode
}

export function EmptyState({ title, children }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <p className="empty-state__title">{title}</p>
      <div className="empty-state__body">{children}</div>
    </div>
  )
}