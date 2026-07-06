export default function HoursBar() {
  return (
    <div className="hours-bar" id="hours">
      <div className="hours-bar-inner">
        <div>
          <p className="hours-bar-title">Mon &ndash; Thurs &amp; Sun</p>
          <p className="hours-bar-time">11:00 AM &ndash; 8:00 PM</p>
        </div>

        <span className="hours-divider-dot" aria-hidden="true">✦</span>

        <div>
          <p className="hours-bar-title">Friday &amp; Saturday</p>
          <p className="hours-bar-time">11:00 AM &ndash; 9:00 PM</p>
        </div>

        <span className="hours-divider-dot" aria-hidden="true">✦</span>

        <div>
          <a href="tel:+14342927249" style={{ textDecoration: 'none' }}>
            <p className="hours-bar-title">Call to Order</p>
            <p className="hours-bar-time" style={{ color: 'var(--gold)' }}>(434) 292‑7249</p>
          </a>
        </div>
      </div>
    </div>
  )
}
