import { learningPath, philosophyPoints } from '../data/index.ts'
import { getLearningTotals } from '../lib/selectors.ts'
import { Callout } from '../components/Indicators.tsx'
import { PageHeader, Panel } from '../components/Primitives.tsx'

export function Home() {
  const totals = getLearningTotals()

  return (
    <div className="stack">
      <PageHeader
        eyebrow="An experimental learning project"
        title="Ninglecode"
        lede="A programming-learning system built from one real student’s actual journey: worked examples first, help removed gradually, and every mistake kept on file."
      />

      <section className="hero">
        <div className="hero__main">
          <h2 className="hero__title">The idea</h2>
          <p className="hero__text">
            Most beginner material measures a student by whether the finished
            code runs. That hides almost everything worth knowing: which parts
            were understood, which were guessed, and which only looked right.
          </p>
          <p className="hero__text">
            Ninglecode works the other way round. It follows one student through
            Java and object-oriented programming, keeps the evidence of each
            attempt, and fades the assistance as competence grows. The
            repository is the record; this application is a view onto it.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#/path">
              View the learning path
            </a>
            <a className="button button--secondary" href="#/concepts">
              Browse concepts
            </a>
          </div>
        </div>

        <aside className="hero__aside" aria-label="Current state">
          <p className="hero__asideLabel">Current state</p>
          <p className="hero__asideValue">
            {totals.populatedConceptCount} of {totals.conceptCount} concepts with
            recorded work
          </p>
          <p className="hero__asideNote">
            Counted from files the learner has written. Nothing is inferred or
            estimated.
          </p>
          <dl className="hero__stats">
            <div className="hero__stat">
              <dt>Completed work records</dt>
              <dd>{totals.recordCount}</dd>
            </div>
            <div className="hero__stat">
              <dt>Projects started</dt>
              <dd>1</dd>
            </div>
          </dl>
        </aside>
      </section>

      <Panel
        title="How the learning works"
        description="Five principles behind every exercise in the repository."
      >
        <ul className="principles">
          {philosophyPoints.map((point) => (
            <li key={point} className="principles__item">
              {point}
            </li>
          ))}
        </ul>
      </Panel>

      <Panel
        title="The learning path"
        description="The method, in order. Each step turns a concept from something shown into something usable."
      >
        <ol className="path-steps">
          {learningPath.map((step) => (
            <li className="path-steps__item" key={step.id}>
              <p className="path-steps__title">{step.title}</p>
              <p className="path-steps__description">{step.description}</p>
            </li>
          ))}
        </ol>
      </Panel>

      <Callout label="Nothing here is a result">
        <p>
          The path and the concepts on this site describe a method and a
          syllabus. They are not a report on the learner. Every status in this
          application is derived from real records, so an empty repository
          produces an honest empty screen rather than an encouraging one.
        </p>
      </Callout>
    </div>
  )
}