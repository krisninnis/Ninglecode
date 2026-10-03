import { progressRecords, progressSources } from '../data/index.ts'
import { getLearningTotals } from '../lib/selectors.ts'
import { EmptyState } from '../components/Indicators.tsx'
import { PageHeader, Panel } from '../components/Primitives.tsx'

export function Progress() {
  const totals = getLearningTotals()

  return (
    <div className="stack">
      <PageHeader
        eyebrow="From real records only"
        title="Progress"
        lede="This screen will be built from the files the learner actually writes. Until then it stays empty, because an invented percentage is worse than no percentage."
      />

      {totals.isEmpty ? (
        <EmptyState title="No learning records yet">
          <p>
            Nothing has been recorded, because the learner has not filed any work
            yet. This is an accurate reflection of the repository rather than a
            loading state.
          </p>
          <p>
            There is no completion figure here, and none will be estimated. A
            percentage would imply a judgement about what counts as progress,
            which is exactly the judgement this project is trying to avoid
            making up.
          </p>
        </EmptyState>
      ) : (
        <Panel title="Recorded work">
          <ul className="record-list">
            {progressRecords.map((record) => (
              <li className="record" key={record.id}>
                <p className="record__summary">{record.summary}</p>
                <p className="record__meta">
                  {record.occurredOn} · {record.kind} ·{' '}
                  <code>{record.sourcePath}</code>
                </p>
              </li>
            ))}
          </ul>
        </Panel>
      )}

      <Panel
        title="Current counts"
        description="Taken directly from the repository contents. Counts are shown instead of percentages because counts cannot flatter."
      >
        <dl className="stat-grid">
          <div className="stat">
            <dt>Concepts with recorded work</dt>
            <dd>
              {totals.populatedConceptCount}
              <span className="stat__of"> of {totals.conceptCount}</span>
            </dd>
          </div>
          <div className="stat">
            <dt>Completed work records</dt>
            <dd>{totals.recordCount}</dd>
          </div>
          <div className="stat">
            <dt>Attempts logged as mistakes</dt>
            <dd>0</dd>
          </div>
        </dl>
      </Panel>

      <Panel
        title="Where these numbers will come from"
        description="The four directories that will eventually supply this screen."
      >
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Source</th>
                <th scope="col">What it contributes</th>
              </tr>
            </thead>
            <tbody>
              {progressSources.map((source) => (
                <tr key={source.path}>
                  <th scope="row">
                    <code>{source.path}</code>
                  </th>
                  <td>{source.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel
        title="What will count as progress"
        description="Stated in advance, so the record cannot be edited after the fact to look better."
      >
        <ul className="checklist">
          <li>A concept has evidence of work at a stage, not a claim that it does.</li>
          <li>A stage is only credited when the corresponding file exists in the repository.</li>
          <li>Recall after a gap counts more than immediate repetition. That is the point of retrieval.</li>
          <li>Using a concept in an unfamiliar problem outranks producing it in a familiar one.</li>
          <li>Mistakes stay in the record. Removing them would remove the most useful evidence.</li>
        </ul>
      </Panel>
    </div>
  )
}