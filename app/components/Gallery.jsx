/*
  PHOTO GALLERY
  ─────────────
  To add real photos:
  1. Place image files in the /public/images/gallery/ folder
  2. Update the `photos` array below with the actual file names
  3. Set `placeholder: false` for each real photo
  4. Recommended size: 800×600px or larger, JPG/WebP format
*/

const photos = [
  { src: '/images/gallery/photo1.jpg', alt: 'Classic Neapolitan pizza fresh from the oven', label: 'Authentic Pizza', placeholder: true },
  { src: '/images/gallery/photo2.jpg', alt: 'House-made pasta with marinara sauce', label: 'Fresh Pasta', placeholder: true },
  { src: '/images/gallery/photo3.jpg', alt: 'Chicken Parmigiana with spaghetti', label: 'Chicken Parm', placeholder: true },
  { src: '/images/gallery/photo4.jpg', alt: 'Warm garlic bread with herbs', label: 'Garlic Bread', placeholder: true },
  { src: '/images/gallery/photo5.jpg', alt: 'Tiramisu dessert', label: 'Tiramisu', placeholder: true },
  { src: '/images/gallery/photo6.jpg', alt: 'Cozy dining room interior', label: 'Our Dining Room', placeholder: true },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section section--cream">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Food Gallery</h2>
          <p className="section-subtitle">A feast for the eyes</p>
          <div className="ornament">
            <span>✦ &nbsp; Come hungry, leave happy &nbsp; ✦</span>
          </div>
        </div>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div key={photo.src} className="gallery-item">
              {photo.placeholder ? (
                <div className="gallery-placeholder">
                  <span className="ph-icon">🍽️</span>
                  <span className="ph-text">{photo.label}</span>
                </div>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              )}
              <div className="gallery-item-overlay">
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.9rem', fontWeight: 600 }}>
                  {photo.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="gallery-note">
          Photos coming soon &mdash; check our{' '}
          <a
            href="https://www.facebook.com/people/Brothers-Pizza-Italian-Restaurant/100063523175580/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--red)', fontWeight: 600 }}
          >
            Facebook page
          </a>{' '}
          for the latest pictures and updates!
        </p>
      </div>
    </section>
  )
}
