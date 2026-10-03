import type { ReactNode } from 'react'
import { hrefForRoute, routes } from '../router/routes.ts'
import type { RouteId } from '../router/routes.ts'

interface LayoutProps {
  routeId: RouteId
  children: ReactNode
}

export function Layout({ routeId, children }: LayoutProps) {
  return (
    <div className="layout">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="wordmark" href={hrefForRoute('home')}>
            <span className="wordmark__name">Ninglecode</span>
            <span className="wordmark__tagline">learning that keeps its receipts</span>
          </a>

          <nav className="nav" aria-label="Primary">
            <ul className="nav__list">
              {routes.map((route) => (
                <li key={route.id}>
                  <a
                    className="nav__link"
                    href={hrefForRoute(route.id)}
                    aria-current={route.id === routeId ? 'page' : undefined}
                  >
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="site-main" id="main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p className="site-footer__note">
            This application reads from the learning records in the Ninglecode
            repository. It shows only work the learner has actually done.
          </p>
          <p className="site-footer__meta">
            No backend, no database, no accounts. Every screen is driven by
            real records once they exist.
          </p>
        </div>
      </footer>
    </div>
  )
}