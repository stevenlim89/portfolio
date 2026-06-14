export default function Contact({ data }) {
  const { personal } = data

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="section">
          <div className="contact-grid">
            <div>
              <p className="section-eyebrow">Let's connect</p>
              <h2 className="contact-tagline">
                Building <span>platforms</span> that<br />
                scale to billions.
              </h2>
              <p className="contact-sub">
                Available for senior or staff engineering roles in platform, SRE,
                and developer experience. Based in the Pacific Northwest or remote.
              </p>
            </div>

            <div className="contact-links">
              <a className="contact-link" href={`mailto:${personal.email}`}>
                <span className="contact-link-icon">✉️</span>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">{personal.email}</div>
                </div>
              </a>

<div className="contact-link" style={{ cursor: 'default' }}>
                <span className="contact-link-icon">📍</span>
                <div>
                  <div className="contact-link-label">Location</div>
                  <div className="contact-link-value">
                    {personal.location} · {personal.citizenship}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        Built with Node.js · React · Vite
      </footer>
    </>
  )
}
