import { learningStages } from '../data/index.ts'
import { stageIndex } from '../data/stages.ts'
import type { LearningStageId, SupportLevel } from '../types/learning.ts'
import { Badge } from './Indicators.tsx'

const supportLabels: Record<SupportLevel, string> = {
  full: 'Full support available',
  partial: 'Partial support',
  none: 'No support',
}

interface StageTrackProps {
  /**
   * Stages the learner has genuinely reached. Empty today: the track is a
   * description of the method, not a progress report.
   */
  reachedStageIds?: readonly LearningStageId[]
}

export function StageTrack({ reachedStageIds = [] }: StageTrackProps) {
  const furthestReached = reachedStageIds.reduce(
    (furthest, id) => Math.max(furthest, stageIndex(id)),
    -1,
  )

  return (
    <ol className="stage-track">
      {learningStages.map((stage, index) => {
        const isReached = stageIndex(stage.id) <= furthestReached

        return (
          <li
            className="stage"
            key={stage.id}
            data-reached={isReached ? 'true' : 'false'}
          >
            <span className="stage__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="stage__main">
              <div className="stage__heading">
                <h3 className="stage__title">{stage.title}</h3>
                <Badge tone={stage.support === 'none' ? 'accent' : 'neutral'}>
                  {supportLabels[stage.support]}
                </Badge>
              </div>

              <p className="stage__action">{stage.learnerAction}</p>
              <p className="stage__rationale">{stage.rationale}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}