import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  lede: string
}

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <header className="page-header">
      {eyebrow !== undefined && <p className="page-header__eyebrow">{eyebrow}</p>}
      <h1 className="page-header__title" tabIndex={-1} id="page-title">
        {title}
      </h1>
      <p className="page-header__lede">{lede}</p>
    </header>
  )
}

interface PanelProps {
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Panel({ title, description, children, className }: PanelProps) {
  return (
    <section className={className !== undefined ? `panel ${className}` : 'panel'}>
      {title !== undefined && <h2 className="panel__title">{title}</h2>}
      {description !== undefined && <p className="panel__description">{description}</p>}
      <div className="panel__body">{children}</div>
    </section>
  )
}