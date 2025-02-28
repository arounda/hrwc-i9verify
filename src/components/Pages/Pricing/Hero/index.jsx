'use client';

import s from './hero.module.scss';
import { useState } from 'react';

const Hero = () => {
  const [ progressBar, setProgressBar ] = useState(31);

  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.heroWrapper}>
          <div className={s.heroHeading}>
            <h1 className="heading-h2 is-centered">
              ei9verify Plans & Pricing
            </h1>

            <p className="text is-centered">
              Pracing that adapt to your business requirement.
            </p>
          </div>

          <div className={s.heroProgressWrapper}>
            <h2 className="heading-h5 is-centered">
              Number of Monthly New Hires
            </h2>

            <div className={s.heroProgressBarWrapper}>
              <div className={s.heroProgressBarBase}></div>
              <div
                className={s.heroProgressBarBlue}
                style={{
                  width: `${progressBar}%`
                }}
              ></div>
              <span
                className={s.heroProgressBarTag}
                style={{
                  left: `${progressBar}%`
                }}>
                {progressBar}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero