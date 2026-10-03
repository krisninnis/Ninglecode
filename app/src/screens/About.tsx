import { philosophyPoints } from '../data/index.ts'
import { PageHeader, Panel } from '../components/Primitives.tsx'

export function About() {
  return (
    <div className="stack">
      <PageHeader
        eyebrow="Origin"
        title="About"
        lede="Ninglecode began as one person trying to learn programming properly, and keeping an honest account of whether any of it was working."
      />

      <Panel title="How it started">
        <p className="prose">
          It began as a plain repository: a few concepts, a few exercises, and a
          log of everything that went wrong. The learner worked through Java and
          object-oriented programming by retyping worked examples, tracing them
          line by line, changing them, and writing them again from memory once
          the example was taken away.
        </p>
        <p className="prose">
          That worked better than expected, and less completely than it seemed.
          Finished exercises that compiled proved very little, because the code
          could be produced while the understanding was borrowed from the example
          sitting next to it. The interesting information was in the failures:
          which concept could not be recalled, which error message was
          misread, which explanation only held together because it had been read.
        </p>
        <p className="prose">
          So the learner started keeping the failures too, and the repository
          grew into a record rather than a portfolio. This application is the
          next step: reading that record, and turning it into something that
          could guide another student from worked examples through to independent
          programming.
        </p>
      </Panel>

      <Panel
        title="The principles"
        description="These were discovered by doing, not chosen in advance."
      >
        <ul className="principles">
          {philosophyPoints.map((point) => (
            <li key={point} className="principles__item">
              {point}
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title="How this project differs from a course">
        <div className="split">
          <div className="split__column">
            <h3 className="split__title">Sequence is not progress</h3>
            <p className="split__text">
              A course advances because the calendar advanced. Ninglecode advances
              when evidence appears, which may take longer and often does not
              happen on the first attempt.
            </p>
          </div>
          <div className="split__column">
            <h3 className="split__title">Assistance is temporary</h3>
            <p className="split__text">
              Worked examples and prompts are scaffolding, not content. They are
              used until they stop being needed and then removed, because help
              that never goes away produces dependence rather than skill.
            </p>
          </div>
        </div>
      </Panel>

      <Panel title="What this application is, and is not">
        <div className="split">
          <div className="split__column">
            <h3 className="split__title">Is</h3>
            <ul className="checklist">
              <li>A view onto real learning records kept in Git.</li>
              <li>A place to see which stage a concept has genuinely reached.</li>
              <li>A description of the method, written down and inspectable.</li>
            </ul>
          </div>
          <div className="split__column">
            <h3 className="split__title">Is not</h3>
            <ul className="checklist">
              <li>A generator. It will never write the learner’s code.</li>
              <li>A judge. It does not score, rank, or award completion.</li>
              <li>A dashboard of encouragement. Empty screens stay empty.</li>
            </ul>
          </div>
        </div>
      </Panel>

      <Panel title="Where it goes next">
        <p className="prose">
          The long-term aim is a practical application that takes a student from
          guided examples to independent programming, using the evidence
          gathered from this journey rather than generic course design. That
          means reading real work, showing real gaps, and refusing to display a
          number that has not been earned.
        </p>
      </Panel>
    </div>
  )
}