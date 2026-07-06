export default function Contact() {
  return (
    <section id="contact" className="section section--cream-dark">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Visit Us</h2>
          <p className="section-subtitle">We&rsquo;d love to see you</p>
          <div className="ornament">
            <span>✦ &nbsp; 301 North Main Street, Blackstone, VA &nbsp; ✦</span>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info-block">
            <div className="contact-card">
              <h4>Phone</h4>
              <p>
                <a href="tel:+14342927249" className="contact-phone-big">
                  (434) 292‑7249
                </a>
              </p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Call ahead for carry-out orders!
              </p>
            </div>

            <div className="contact-card">
              <h4>Address</h4>
              <p>
                301 North Main Street<br />
                Blackstone, VA 23824
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                <a
                  href="https://maps.google.com/?q=301+North+Main+Street+Blackstone+VA+23824"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.875rem' }}
                >
                  Get Directions &rarr;
                </a>
              </p>
            </div>

            <div className="contact-card">
              <h4>Hours of Operation</h4>
              <table className="hours-table">
                <tbody>
                  <tr>
                    <td>Monday &ndash; Thursday</td>
                    <td>11:00 AM &ndash; 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>11:00 AM &ndash; 9:00 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>11:00 AM &ndash; 9:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>11:00 AM &ndash; 8:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="contact-card">
              <h4>Follow Us</h4>
              <p>
                <a
                  href="https://www.facebook.com/people/Brothers-Pizza-Italian-Restaurant/100063523175580/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook &rarr;
                </a>
              </p>
              <p style={{ marginTop: '0.4rem', fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Like us for daily specials &amp; updates
              </p>
            </div>
          </div>

          <div className="map-wrapper">
            <iframe
              title="Brother's Pizza location on Google Maps"
              src="https://maps.google.com/maps?q=301+North+Main+Street+Blackstone+VA+23824&output=embed&z=16"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
