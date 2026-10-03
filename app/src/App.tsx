import { useEffect, useRef } from 'react'
import { Layout } from './components/Layout.tsx'
import { getRoute, useRoute } from './router/routes.ts'
import { About } from './screens/About.tsx'
import { Concepts } from './screens/Concepts.tsx'
import { Home } from './screens/Home.tsx'
import { LearningPath } from './screens/LearningPath.tsx'
import { Progress } from './screens/Progress.tsx'
import { Projects } from './screens/Projects.tsx'

export default function App() {
  const routeId = useRoute()
  const route = getRoute(routeId)
  const titleRef = useRef<HTMLDivElement>(null)
  const previousRoute = useRef(routeId)

  useEffect(() => {
    document.title = `${route.title} · Ninglecode`

    if (previousRoute.current !== routeId) {
      previousRoute.current = routeId
      window.scrollTo({ top: 0 })
      titleRef.current?.focus()
    }
  }, [routeId, route.title])

  return (
    <Layout routeId={routeId}>
      <div ref={titleRef} tabIndex={-1} className="route-focus">
        {routeId === 'home' && <Home />}
        {routeId === 'path' && <LearningPath />}
        {routeId === 'concepts' && <Concepts />}
        {routeId === 'projects' && <Projects />}
        {routeId === 'progress' && <Progress />}
        {routeId === 'about' && <About />}
      </div>
    </Layout>
  )
}