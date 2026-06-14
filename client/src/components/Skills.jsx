export default function Skills({ data }) {
  return (
    <section className="skills-section" id="skills">
      <div className="section">
        <p className="section-eyebrow">Capabilities</p>
        <h2 className="section-title">Skills &amp; Tools</h2>

        <div className="skills-grid">
          {data.skills.map((group, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-icon">{group.icon}</div>
              <div className="skill-category">{group.category}</div>
              <div className="skill-tags">
                {group.items.map((item, j) => (
                  <span className="skill-tag" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
