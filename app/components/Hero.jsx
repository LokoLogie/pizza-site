import ItalyMap from './ItalyMap'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-flag-bar">
          <span className="flag-green" />
          <span className="flag-white" />
          <span className="flag-red" />
        </div>

        <p className="hero-tagline-pre">Benvenuti a</p>

        <h1 className="hero-name">
          Brother&rsquo;s Pizza
          <span className="hero-name-sub">&amp; Italian Restaurant</span>
        </h1>

        <div className="hero-divider">
          <span>✦&nbsp;&nbsp;Blackstone, Virginia&nbsp;&nbsp;✦</span>
        </div>

        <div className="hero-map-wrapper">
          <ItalyMap className="hero-map" />
          <div style={{ flex: 1 }}>
            <p className="hero-tagline">
              &ldquo;The Only Authentic and Original<br />
              Italian Cuisine in Town&rdquo;
            </p>
          </div>
        </div>

        <div className="hero-cta-group">
          <a href="tel:+14342927249" className="btn-phone" aria-label="Call to order or reserve">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.4 11.4 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z" />
            </svg>
            (434) 292‑7249
          </a>
          <p className="hero-address">
            301 North Main Street &bull; Blackstone, VA 23824
          </p>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span>Scroll</span>
      </div>
    </section>
  )
}
