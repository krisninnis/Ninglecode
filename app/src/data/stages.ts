import type { LearningStage } from '../types/learning.ts'

/**
 * The nine framework stages a concept moves through.
 *
 * This is a description of the *method*, in order. It is not a progress bar:
 * no learner has been placed at any of these stages yet.
 */
export const learningStages: readonly LearningStage[] = [
  {
    id: 'seen',
    title: 'Seen',
    learnerAction: 'Read a worked example written by someone else.',
    support: 'full',
    rationale: 'Establishes what correct code can look like before any effort is asked for.',
  },
  {
    id: 'typed',
    title: 'Typed',
    learnerAction: 'Retype the example by hand, character by character.',
    support: 'full',
    rationale: 'Builds fluency with the syntax that a written explanation skips over.',
  },
  {
    id: 'explained',
    title: 'Explained',
    learnerAction: 'Say in own words what each part does and why.',
    support: 'partial',
    rationale: 'Passive recognition is not understanding; explaining forces a model.',
  },
  {
    id: 'modified',
    title: 'Modified',
    learnerAction: 'Change one thing at a time and predict the effect first.',
    support: 'partial',
    rationale: 'Separates what was memorised from what was actually understood.',
  },
  {
    id: 'written-with-prompts',
    title: 'Written with prompts',
    learnerAction: 'Write the code with prompts available, filling in the gaps.',
    support: 'partial',
    rationale: 'Tests recall while still keeping the learner moving rather than stuck.',
  },
  {
    id: 'written-from-memory',
    title: 'Written from memory',
    learnerAction: 'Write the same code with no example and no prompts in view.',
    support: 'none',
    rationale: 'Confirms the idea is retrievable rather than merely familiar.',
  },
  {
    id: 'debugged',
    title: 'Debugged',
    learnerAction: 'Find and fix a deliberate or real error, and record the cause.',
    support: 'none',
    rationale: 'Reading errors well is a larger part of programming than writing correct code first time.',
  },
  {
    id: 'used-in-new-problem',
    title: 'Used in a new problem',
    learnerAction: 'Apply the concept where the wording and shape are different.',
    support: 'none',
    rationale: 'Distinguishes knowing a definition from being able to use it.',
  },
  {
    id: 'recalled-later',
    title: 'Recalled later',
    learnerAction: 'Reconstruct the idea after a gap, without warning.',
    support: 'none',
    rationale: 'Spaced retrieval is what makes knowledge survive past the lesson it was taught in.',
  },
] as const

/** Stage ids in path order. Used to compare how far apart two stages are. */
export const learningStageOrder: readonly string[] = learningStages.map(
  (stage) => stage.id,
)

export function getLearningStage(id: string): LearningStage | undefined {
  return learningStages.find((stage) => stage.id === id)
}

/** Position of a stage in the path, or -1 when the id is unknown. */
export function stageIndex(id: string): number {
  return learningStageOrder.indexOf(id)
}