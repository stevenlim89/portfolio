export default function Hero({ data }) {
  const { personal, metrics } = data

  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="hero-grid-bg" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open to new opportunities · US Citizen
        </div>

        <h1 className="hero-name">{personal.name}</h1>

        <p className="hero-subtitle">
          <strong>{personal.title}</strong>
          {' '}· SRE &amp; Edge Platform ·{' '}
          Expedia Group · {personal.location}
        </p>

        <p className="hero-philosophy">
          I build platforms that are <em>fast by design</em>, <em>lean on cost</em>, and{' '}
          <em>built to scale</em> — whether that's shaving latency off a gateway handling
          billions of requests a day, eliminating unnecessary infrastructure spend, or
          automating away the operational toil that slows teams down.
        </p>

        <div className="hero-spotlight">
          <div className="spotlight-icon">⚡</div>
          <div className="spotlight-body">
            <div className="spotlight-label">Deep Expertise</div>
            <div className="spotlight-title">Akamai CDN &amp; Edge Platform</div>
            <p className="spotlight-desc">
              5+ years designing and operating edge infrastructure at scale — from Property Manager
              (PAPI) automation and rule configuration to multi-CDN traffic shifting, API gateway
              migrations, and building AI-powered tooling on top of the Akamai platform.
            </p>
          </div>
          <div className="spotlight-tags">
            <span>PAPI</span>
            <span>Traffic Shifting</span>
            <span>Edge Logic</span>
            <span>CDN Migration</span>
            <span>MCP Integration</span>
          </div>
        </div>

        <div className="hero-metrics">
          {metrics.map((m, i) => (
            <div className="metric-card" key={i}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
              <div className="metric-desc">{m.description}</div>
            </div>
          ))}
        </div>

        <div className="hero-ctas">
          <a href="#experience" className="btn btn-primary">
            View My Work →
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
