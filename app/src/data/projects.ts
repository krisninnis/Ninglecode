import type { LearningProject } from '../types/learning.ts'

/**
 * The first learning project. Status is "starting", meaning the directory
 * exists and nothing has been written into it yet.
 */
export const projects: readonly LearningProject[] = [
  {
    id: 'house-inventory',
    name: 'HouseInventory',
    directory: 'projects/HouseInventory',
    status: 'starting',
    summary:
      'A small inventory of rooms and the items they contain. Chosen because it needs a class per real-world thing, a field for every value worth keeping, and methods that change and report state.',
    focusConceptIds: ['class', 'object', 'field', 'state', 'constructor', 'method'],
    writtenByHand: true,
  },
] as const

export const projectStatusLabels: Record<LearningProject['status'], string> = {
  planned: 'Planned',
  starting: 'Starting',
  'in-progress': 'In progress',
  paused: 'Paused',
  finished: 'Finished',
}