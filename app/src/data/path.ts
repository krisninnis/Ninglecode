/**
 * The method itself, stated as a sequence of moves.
 *
 * This is the philosophy in order: how a single idea is taken from "that was
 * shown to me" to "I could use it on something new". It is a description of
 * approach, not a record of where the learner currently is.
 */
export interface PathStep {
  id: string
  title: string
  description: string
}

export const learningPath: readonly PathStep[] = [
  {
    id: 'worked-example',
    title: 'Worked example',
    description:
      'Start from code that already works, with the reasoning shown rather than hidden.',
  },
  {
    id: 'typed-repetition',
    title: 'Typed repetition',
    description:
      'Retype it by hand. Typing surfaces errors that reading past them would not.',
  },
  {
    id: 'tracing',
    title: 'Tracing',
    description:
      'Predict what each statement does, then run it and check. The gap between the two is the lesson.',
  },
  {
    id: 'modification',
    title: 'Modification',
    description:
      'Change one thing and predict the outcome first, so cause and effect stay visible.',
  },
  {
    id: 'guided-completion',
    title: 'Guided completion',
    description:
      'Write the code with prompts available, so difficulty rises without leaving the learner stranded.',
  },
  {
    id: 'independent-coding',
    title: 'Independent coding',
    description:
      'Same task, no example and no prompts. This is the first honest test of recall.',
  },
  {
    id: 'debugging',
    title: 'Debugging',
    description:
      'Read errors, form a hypothesis, and narrow the cause down rather than guessing at fixes.',
  },
  {
    id: 'retrieval-practice',
    title: 'Retrieval practice',
    description:
      'Rebuild the idea later, unprompted. Revisiting is what turns a lesson into knowledge.',
  },
  {
    id: 'transfer',
    title: 'Transfer to a new problem',
    description:
      'Apply it where the wording and structure differ. The point at which it becomes usable knowledge.',
  },
] as const

export const philosophyPoints: readonly string[] = [
  'Repetition before novelty. The same idea is revisited until it can be produced unaided.',
  'Prediction before execution. Tracing and debugging build a mental model instead of a search-and-replace habit.',
  'Help is removed gradually. Assistance fades as competence grows rather than disappearing at a fixed point.',
  'Mistakes are recorded, not deleted. A log of errors is more useful than a log of successes.',
  'No generated answers. The learner writes the code, so the practice is real.',
] as const