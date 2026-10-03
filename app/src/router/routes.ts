import { useEffect, useState } from 'react'

export type RouteId =
  | 'home'
  | 'path'
  | 'concepts'
  | 'projects'
  | 'progress'
  | 'about'

export interface RouteDefinition {
  id: RouteId
  label: string
  title: string
  description: string
}

/**
 * Navigation is defined in one place and drives the header, the footer, and
 * the screen switch.
 */
export const routes: readonly RouteDefinition[] = [
  {
    id: 'home',
    label: 'Home',
    title: 'Ninglecode',
    description:
      'A programming-learning system built from one real student’s actual journey.',
  },
  {
    id: 'path',
    label: 'Learning Path',
    title: 'Learning Path',
    description:
      'The framework stages a concept passes through, from first exposure to use in a new problem.',
  },
  {
    id: 'concepts',
    label: 'Concepts',
    title: 'Concepts',
    description:
      'The foundational concept set, with the learner’s own work recorded against each one.',
  },
  {
    id: 'projects',
    label: 'Projects',
    title: 'Projects',
    description:
      'Longer, multi-step pieces of work that hold several concepts together.',
  },
  {
    id: 'progress',
    label: 'Progress',
    title: 'Progress',
    description:
      'What the learner has actually done, read from the repository’s own learning records.',
  },
  {
    id: 'about',
    label: 'About',
    title: 'About',
    description:
      'Why Ninglecode exists and how the learning method came about.',
  },
] as const

export const defaultRouteId: RouteId = 'home'

function isRouteId(value: string): value is RouteId {
  return routes.some((route) => route.id === value)
}

function readRouteFromHash(): RouteId {
  const segment = window.location.hash.replace(/^#\/?/, '').split('/')[0]
  return segment !== undefined && isRouteId(segment)
    ? segment
    : defaultRouteId
}

export function hrefForRoute(id: RouteId): string {
  return `#/${id}`
}

/**
 * Minimal hash-based routing. Kept dependency-free and deliberately small:
 * six static screens do not justify a router library.
 */
export function useRoute(): RouteId {
  const [routeId, setRouteId] = useState<RouteId>(readRouteFromHash)

  useEffect(() => {
    const handleChange = () => {
      setRouteId(readRouteFromHash())
    }

    window.addEventListener('hashchange', handleChange)
    return () => window.removeEventListener('hashchange', handleChange)
  }, [])

  return routeId
}

export function getRoute(id: RouteId): RouteDefinition {
  const match = routes.find((route) => route.id === id)
  return match ?? routes[0]
}