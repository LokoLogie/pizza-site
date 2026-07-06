export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Brother&rsquo;s Pizza</span>
            <span className="footer-logo-sub">&amp; Italian Restaurant</span>
            <p>
              The Only Authentic and Original Italian Cuisine in Town. Proudly serving
              Blackstone, Virginia and the surrounding communities with the finest
              Italian-American cooking.
            </p>
          </div>

          <div className="footer-info">
            <h3 className="footer-section-title">Contact Us</h3>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+14342927249">(434) 292‑7249</a>
            </p>
            <p>
              <strong>Address:</strong><br />
              301 North Main Street<br />
              Blackstone, VA 23824
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              <a
                href="https://www.facebook.com/people/Brothers-Pizza-Italian-Restaurant/100063523175580/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Page &rarr;
              </a>
            </p>
          </div>

          <div className="footer-hours">
            <h3 className="footer-section-title">Hours</h3>
            <ul className="footer-hours-list">
              <li>
                <span className="day">Mon &ndash; Thurs</span>
                <span className="time">11am &ndash; 8pm</span>
              </li>
              <li>
                <span className="day">Friday</span>
                <span className="time">11am &ndash; 9pm</span>
              </li>
              <li>
                <span className="day">Saturday</span>
                <span className="time">11am &ndash; 9pm</span>
              </li>
              <li>
                <span className="day">Sunday</span>
                <span className="time">11am &ndash; 8pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {year} Brother&rsquo;s Pizza &amp; Italian Restaurant &mdash; Blackstone, VA. All rights reserved.
          </span>
          <div className="footer-flag" aria-label="Italian flag">
            <span className="fg" />
            <span className="fw" />
            <span className="fr" />
          </div>
          <span>Made with ❤️ in Virginia</span>
        </div>
      </div>
    </footer>
  )
}
