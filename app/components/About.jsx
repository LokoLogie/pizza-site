import ItalyMap from './ItalyMap'

export default function About() {
  return (
    <section id="about" className="section section--cream-dark">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">A Taste of the Old Country</p>
          <div className="ornament">
            <span>✦ &nbsp; Blackstone, Virginia &nbsp; ✦</span>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>Where Tradition Meets Taste</h3>
            <p>
              Welcome to Brother&rsquo;s Pizza &amp; Italian Restaurant &mdash; the heart of authentic
              Italian cuisine in Blackstone, Virginia. We&rsquo;ve built our reputation on one simple
              promise: serving the most genuine, made-from-scratch Italian food you&rsquo;ll find for
              miles around.
            </p>
            <p>
              Every dish on our menu is crafted with the same passion and dedication that has always
              defined Italian cooking. From our slow-simmered sauces to our hand-tossed New York style
              pizzas, we use only the finest ingredients to bring you flavors that transport you
              straight to the trattorias of Sicily and Naples.
            </p>
            <p>
              Whether you&rsquo;re joining us for a family dinner, picking up a carry-out order, or
              celebrating a special occasion, Brother&rsquo;s is your home away from home. Pull up a
              chair, pour a glass of Chianti, and let us take care of the rest.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🍅</div>
                <div className="highlight-text">
                  <h4>Fresh, Quality Ingredients</h4>
                  <p>We source the finest ingredients to ensure every dish is as good as it can be.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">👨‍🍳</div>
                <div className="highlight-text">
                  <h4>Authentic Recipes</h4>
                  <p>Time-honored Italian recipes prepared with traditional methods and genuine love.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🏡</div>
                <div className="highlight-text">
                  <h4>Family Atmosphere</h4>
                  <p>A warm, welcoming dining room where every guest is treated like family.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-emblem">
              <span className="emblem-script">Benvenuti</span>
              <span className="emblem-name">Brother&rsquo;s Pizza</span>
              <span className="emblem-since">Blackstone, Virginia</span>
              <ItalyMap className="emblem-italy" />
              <p className="emblem-tagline">
                &ldquo;The Only Authentic and Original<br />
                Italian Cuisine in Town&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
