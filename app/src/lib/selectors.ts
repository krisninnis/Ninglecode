import {
  concepts,
  learningStages,
  progressRecords,
  stageIndex,
} from '../data/index.ts'
import type {
  Concept,
  ConceptStatus,
  LearningStageId,
} from '../types/learning.ts'

/**
 * Derives what the interface is allowed to claim.
 *
 * Every status shown in the UI passes through this module. The rule is simple:
 * a concept is only "populated" if the learner has evidence on disk, and the
 * furthest stage shown is only as advanced as the evidence supports. With the
 * current empty record set, every concept correctly reports as unpopulated.
 */

function reachedStages(concept: Concept): LearningStageId[] {
  const reached = new Set(concept.evidence.map((item) => item.stageId))
  return learningStages
    .map((stage) => stage.id)
    .filter((id) => reached.has(id))
}

export function getConceptStatus(concept: Concept): ConceptStatus {
  const reachedStageIds = reachedStages(concept)
  const furthest =
    reachedStageIds.length === 0
      ? null
      : reachedStageIds.reduce((furthestSoFar, id) =>
          stageIndex(id) > stageIndex(furthestSoFar) ? id : furthestSoFar,
        )

  return {
    concept,
    isPopulated: concept.evidence.length > 0,
    reachedStageIds,
    furthestStageId: furthest,
  }
}

export function getAllConceptStatuses(): ConceptStatus[] {
  return concepts.map(getConceptStatus)
}

export interface LearningTotals {
  /** Concepts with at least one real learner artefact behind them. */
  populatedConceptCount: number
  /** Concepts defined by the curriculum. */
  conceptCount: number
  /** Completed-work records on file. */
  recordCount: number
  /** Concepts with any evidence at all. */
  isEmpty: boolean
}

export function getLearningTotals(): LearningTotals {
  const statuses = getAllConceptStatuses()
  const populatedConceptCount = statuses.filter((s) => s.isPopulated).length

  return {
    populatedConceptCount,
    conceptCount: statuses.length,
    recordCount: progressRecords.length,
    isEmpty:
      populatedConceptCount === 0 && progressRecords.length === 0,
  }
}