import type { ProgressRecord } from '../types/learning.ts'

/**
 * The learner's log of completed work.
 *
 * Empty by design. This array is only ever appended to when the learner has
 * genuinely done the work and the artefact exists in the repository. The app
 * never writes a record on the learner's behalf.
 */
export const progressRecords: readonly ProgressRecord[] = [] as const

/** Source directories the app will read real records from in future. */
export const progressSources = [
  {
    path: 'learning/exercises',
    description: 'The learner’s own attempts at practice tasks, including incorrect ones.',
  },
  {
    path: 'learning/quizzes',
    description: 'Self-administered recall checks and what was answered.',
  },
  {
    path: 'learning/mistakes',
    description: 'Errors hit, their causes, and what fixed them.',
  },
  {
    path: 'learning/progress',
    description: 'The learner’s own account of what is covered and what is not.',
  },
] as const