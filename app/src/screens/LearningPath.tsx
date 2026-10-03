import { learningStages } from '../data/index.ts'
import { Callout } from '../components/Indicators.tsx'
import { PageHeader, Panel } from '../components/Primitives.tsx'
import { StageTrack } from '../components/StageTrack.tsx'

export function LearningPath() {
  return (
    <div className="stack">
      <PageHeader
        eyebrow="Framework stages"
        title="Learning Path"
        lede="A concept is not understood when it has been read. It is understood when it can be produced, unaided, on a problem it was not written for."
      />

      <Callout label="These are stages, not progress">
        <p>
          The nine stages below describe the framework Ninglecode uses to judge
          whether a concept has actually been learned. They are{' '}
          <strong>not</strong> a record of what the learner has done. No stage is
          marked complete for any concept, because no learner work has been
          recorded yet.
        </p>
      </Callout>

      <Panel
        title="The nine stages"
        description="Reached in order. Support is withdrawn as the stages progress."
      >
        <StageTrack />
      </Panel>

      <Panel
        title="Why the order matters"
        description="Each stage exists because the previous one left a specific gap."
      >
        <div className="split">
          <div className="split__column">
            <h3 className="split__title">Early stages are about input</h3>
            <p className="split__text">
              Reading and retyping build the syntax fluency that reading alone
              skips over. Nothing is asked of the learner here beyond effort, so
              that early failure is not mistaken for a limit in ability.
            </p>
          </div>
          <div className="split__column">
            <h3 className="split__title">Later stages are about output</h3>
            <p className="split__text">
              From explaining onwards, the learner produces the code. Prompts
              stay available through the guided stage, then disappear. A concept
              that cannot survive the removal of help has not been learned, only
              borrowed.
            </p>
          </div>
        </div>
      </Panel>

      <Panel
        title="Stage reference"
        description="The same nine stages, condensed. This table is the definition the application will read from once records exist."
      >
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Stage</th>
                <th scope="col">What the learner does</th>
                <th scope="col">Support</th>
              </tr>
            </thead>
            <tbody>
              {learningStages.map((stage) => (
                <tr key={stage.id}>
                  <th scope="row">
                    {stage.title}
                    <span className="table__meta">
                      <code>{stage.id}</code>
                    </span>
                  </th>
                  <td>{stage.learnerAction}</td>
                  <td className="table__status">Not recorded</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  )
}