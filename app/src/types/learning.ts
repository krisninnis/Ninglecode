/**
 * Core data model for Ninglecode.
 *
 * These types describe the *shape* of a future learning record. They carry no
 * learner achievement data of their own: every record below is empty until the
 * learner actually produces the work. The UI derives all status text from these
 * records so that nothing can claim progress that has not happened.
 */

export type LearningStageId =
  | 'seen'
  | 'typed'
  | 'explained'
  | 'modified'
  | 'written-with-prompts'
  | 'written-from-memory'
  | 'debugged'
  | 'used-in-new-problem'
  | 'recalled-later'

/** How much scaffolding the learner still has at a given stage. */
export type SupportLevel = 'full' | 'partial' | 'none'

export interface LearningStage {
  id: LearningStageId
  /** Short label used in the path view, e.g. "Written from memory". */
  title: string
  /** What the learner actually does at this stage. */
  learnerAction: string
  /** How much help is still available. */
  support: SupportLevel
  /** Why the stage exists in the sequence. */
  rationale: string
}

export type ConceptId =
  | 'class'
  | 'object'
  | 'field'
  | 'state'
  | 'constructor'
  | 'method'
  | 'parameter'
  | 'argument'

export type M250Strand =
  | 'Objects and classes'
  | 'State and behaviour'
  | 'Methods and calling'

export interface Concept {
  id: ConceptId
  name: string
  /** Neutral reference description. Not learner work. */
  summary: string
  strand: M250Strand
  /**
   * Learner-authored evidence for this concept.
   * Intentionally empty: this app must never generate the learner's work.
   */
  evidence: ConceptEvidence[]
}

/**
 * A single piece of real learner work that justifies a concept being at a
 * given stage. `sourcePath` points at a file the learner wrote by hand.
 */
export interface ConceptEvidence {
  stageId: LearningStageId
  /** ISO 8601 date, e.g. "2026-02-14". */
  occurredOn: string
  /** Repository path of the learner's own artefact, e.g. "learning/exercises/...". */
  sourcePath: string
  /** Optional short description written by the learner. */
  note?: string
}

export type ProjectStatus =
  | 'planned'
  | 'starting'
  | 'in-progress'
  | 'paused'
  | 'finished'

export interface LearningProject {
  id: string
  name: string
  /** Repository directory holding the learner's own code. */
  directory: string
  status: ProjectStatus
  summary: string
  /** Concepts the project is expected to exercise. */
  focusConceptIds: ConceptId[]
  /**
   * Always true for this project. The learner writes every line of Java by
   * hand; the app never supplies the solution.
   */
  writtenByHand: true
}

export type ProgressRecordKind =
  | 'exercise'
  | 'quiz'
  | 'tracing'
  | 'debugging'
  | 'project'
  | 'transfer'

export interface ProgressRecord {
  id: string
  /** ISO 8601 date the work was completed. */
  occurredOn: string
  kind: ProgressRecordKind
  conceptIds: ConceptId[]
  summary: string
  /** Repository path of the learner's own artefact. */
  sourcePath: string
}

/** Aggregated, always-empty-by-default view of a concept. */
export interface ConceptStatus {
  concept: Concept
  /** True only when the learner has produced at least one artefact. */
  isPopulated: boolean
  /** Stages the learner has actually reached, in path order. */
  reachedStageIds: LearningStageId[]
  /** The furthest stage reached, or null when there is no evidence at all. */
  furthestStageId: LearningStageId | null
}