export default function Education({ data }) {
  const { school, degree, period } = data.education

  return (
    <section className="edu-section" id="education">
      <div className="section">
        <p className="section-eyebrow">Background</p>
        <h2 className="section-title">Education</h2>

        <div className="edu-card">
          <div className="edu-emblem">🎓</div>
          <div>
            <div className="edu-school">{school}</div>
            <div className="edu-degree">{degree}</div>
            <div className="edu-period">{period}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
