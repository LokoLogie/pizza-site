'use client'

import { useEffect } from 'react'

/*
  FACEBOOK PAGE PLUGIN
  ────────────────────
  To activate the live Facebook feed:
  1. Go to https://developers.facebook.com/docs/plugins/page-plugin
  2. Enter your Facebook page URL
  3. Copy the generated embed code and replace the placeholder below
  4. Uncomment the useEffect that loads the Facebook SDK

  Your Facebook page URL appears to be:
  https://www.facebook.com/people/Brothers-Pizza-Italian-Restaurant/100063523175580/
*/

const FB_PAGE_URL =
  'https://www.facebook.com/people/Brothers-Pizza-Italian-Restaurant/100063523175580/'

export default function FacebookFeed() {
  useEffect(() => {
    // Load the Facebook SDK once the component mounts
    if (typeof window !== 'undefined' && !window.FB) {
      window.fbAsyncInit = function () {
        window.FB.init({ xfbml: true, version: 'v19.0' })
      }
      const script = document.createElement('script')
      script.async = true
      script.defer = true
      script.crossOrigin = 'anonymous'
      script.src = 'https://connect.facebook.net/en_US/sdk.js'
      document.body.appendChild(script)
    } else if (window.FB) {
      window.FB.XFBML.parse()
    }
  }, [])

  return (
    <section className="facebook-section">
      <div className="facebook-inner">
        <div className="facebook-layout">
          <div className="facebook-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.75rem' }}>
              Find Us on Facebook
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Stay connected with us
            </p>
            <p>
              Follow us on Facebook for daily specials, seasonal menu updates, community events, and
              to see what our guests are saying. We love hearing from our customers!
            </p>
            <p>
              Have a question or want to leave us a review? Head over to our Facebook page &mdash;
              we&rsquo;d love to connect with you.
            </p>
            <a
              href={FB_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-link-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
              Visit Our Facebook Page
            </a>
          </div>

          <div className="facebook-widget-wrapper">
            {/* Live Facebook Page Plugin — uncomment once FB SDK is configured */}
            {/* <div id="fb-root" />
            <div
              className="fb-page"
              data-href={FB_PAGE_URL}
              data-tabs="timeline"
              data-width="500"
              data-height="500"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            /> */}

            <div className="fb-page-placeholder">
              <div className="fb-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </div>
              <p>
                Follow us on Facebook for daily specials, photos, and community updates!
              </p>
              <a
                href={FB_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="fb-link-btn"
              >
                Like Our Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
