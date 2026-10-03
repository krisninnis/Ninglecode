import { getAllConceptStatuses } from '../lib/selectors.ts'
import { learningStages } from '../data/index.ts'
import { Badge, Callout } from '../components/Indicators.tsx'
import { PageHeader, Panel } from '../components/Primitives.tsx'

export function Concepts() {
  const statuses = getAllConceptStatuses()

  return (
    <div className="stack">
      <PageHeader
        eyebrow="Foundational set"
        title="Concepts"
        lede="The starting vocabulary for object-oriented programming in Java. Each card is a slot waiting for the learner’s own notes, code, and corrections."
      />

      <Callout label="Not yet populated">
        <p>
          All {statuses.length} concepts are currently unpopulated. That is the
          accurate state: the learner has not yet recorded work against any of
          them. This application will not infer a stage from attendance or
          optimism — a concept moves up the path only when a file exists that
          demonstrates it.
        </p>
      </Callout>

      <section aria-labelledby="concept-grid-heading">
        <h2 className="section-title" id="concept-grid-heading">
          Concept cards
        </h2>
        <div className="card-grid">
          {statuses.map(({ concept, isPopulated, furthestStageId }) => (
            <article className="card" key={concept.id}>
              <div className="card__header">
                <h3 className="card__title">
                  <code>{concept.name}</code>
                </h3>
                <Badge tone={isPopulated ? 'accent' : 'neutral'}>
                  {isPopulated ? 'Populated' : 'Not yet populated'}
                </Badge>
              </div>

              <p className="card__summary">{concept.summary}</p>

              <dl className="card__meta">
                <div>
                  <dt>Strand</dt>
                  <dd>{concept.strand}</dd>
                </div>
                <div>
                  <dt>Evidence</dt>
                  <dd>{concept.evidence.length} record(s)</dd>
                </div>
                <div>
                  <dt>Furthest stage</dt>
                  <dd>
                    {furthestStageId === null
                      ? 'None recorded'
                      : learningStages.find((s) => s.id === furthestStageId)?.title}
                  </dd>
                </div>
              </dl>

              <p className="card__footer">
                {isPopulated
                  ? 'Learner work recorded against this concept.'
                  : 'Awaiting the learner’s own explanation and code.'}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Panel
        title="What populates a card"
        description="The evidence each concept needs before this application will show it as anything other than empty."
      >
        <ul className="checklist">
          <li>
            A worked example the learner has typed out by hand in{' '}
            <code>learning/exercises/</code>.
          </li>
          <li>
            An explanation in the learner’s own words in{' '}
            <code>learning/concepts/</code>.
          </li>
          <li>
            A deliberate modification, with the predicted outcome written down
            before the change.
          </li>
          <li>
            A written from-memory attempt, kept even when it fails — the failure
            is logged in <code>learning/mistakes/</code>.
          </li>
          <li>
            A recall check after a gap, recorded in <code>learning/quizzes/</code>.
          </li>
        </ul>
      </Panel>
    </div>
  )
}