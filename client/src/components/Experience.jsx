// Bolds **...** markers in bullet text
function BulletText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) =>
    part.startsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part
  )
}

export default function Experience({ data }) {
  return (
    <section className="experience-section" id="experience">
      <div className="section">
        <p className="section-eyebrow">Career</p>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {data.experience.map((job, i) => (
            <div className="timeline-item" key={i}>
              <div className={`timeline-dot${job.current ? '' : ' inactive'}`} />
              <div className="timeline-card">
                <div className="exp-header">
                  <div className="exp-company-role">
                    <div className="exp-company">
                      {job.company}
                      {job.current && <span className="current-badge">Current</span>}
                    </div>
                    <div className="exp-role">{job.role}</div>
                    <div className="exp-meta">
                      {job.team ? `${job.team} · ` : ''}{job.location}
                    </div>
                  </div>
                  <span className="exp-period">{job.period}</span>
                </div>

                <ul className="exp-bullets">
                  {job.highlights.map((h, j) => (
                    <li key={j}>
                      <BulletText text={h} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
