import { concepts, projectStatusLabels, projects } from '../data/index.ts'
import { Badge, Callout } from '../components/Indicators.tsx'
import { PageHeader, Panel } from '../components/Primitives.tsx'

function conceptName(id: string): string {
  return concepts.find((concept) => concept.id === id)?.name ?? id
}

export function Projects() {
  return (
    <div className="stack">
      <PageHeader
        eyebrow="Applied work"
        title="Projects"
        lede="Exercises prove a concept can be used. A project proves it survives being used for something nobody designed the lesson around."
      />

      <Callout label="The learner writes the Java">
        <p>
          Every line of Java in a Ninglecode project is written by hand, by the
          learner. This application will not generate solutions, fill in
          methods, or repair submissions. An incomplete project is a legitimate
          state and is shown as one.
        </p>
      </Callout>

      {projects.map((project) => (
        <article className="project" key={project.id}>
          <header className="project__header">
            <div>
              <h2 className="project__name">{project.name}</h2>
              <p className="project__directory">
                <code>{project.directory}</code>
              </p>
            </div>
            <Badge tone="accent">{projectStatusLabels[project.status]}</Badge>
          </header>

          <p className="project__summary">{project.summary}</p>

          <div className="project__grid">
            <div>
              <h3 className="project__sectionTitle">Concepts it exercises</h3>
              <ul className="tag-list">
                {project.focusConceptIds.map((id) => (
                  <li className="tag" key={id}>
                    <code>{conceptName(id)}</code>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="project__sectionTitle">Status</h3>
              <p className="project__statusNote">
                {projectStatusLabels[project.status]}: the directory exists and
                is empty. No files have been written yet, so there is nothing to
                report.
              </p>
            </div>
          </div>
        </article>
      ))}

      <Panel
        title="Why a project instead of more exercises"
        description="The gap that isolated exercises leave open."
      >
        <div className="split">
          <div className="split__column">
            <h3 className="split__title">Deciding what to build</h3>
            <p className="split__text">
              Exercises supply the design. A project does not: the learner has
              to decide what a room needs to remember and what it should be able
              to do, which is most of the real difficulty and none of the
              difficulty in a written exercise.
            </p>
          </div>
          <div className="split__column">
            <h3 className="split__title">Change over time</h3>
            <p className="split__text">
              A project outlives a lesson. Code written weeks ago has to be read,
              understood, and changed again — which is a far better test of
              whether a concept was learned than producing it once while it was
              fresh.
            </p>
          </div>
        </div>
      </Panel>

      <Panel
        title="Planned later"
        description="Not started. Listed so the intended sequence is visible, not to imply they are under way."
      >
        <ul className="checklist">
          <li>
            <strong>Room inventory</strong> — a second, smaller project to revisit
            fields and constructors under time pressure.
          </li>
          <li>
            <strong>Error-handling exercise set</strong> — reading compiler
            messages as the primary skill rather than an afterthought.
          </li>
          <li>
            <strong>Transfer problems</strong> — familiar concepts in unfamiliar
            wording, to test what survives outside the original example.
          </li>
        </ul>
      </Panel>
    </div>
  )
}