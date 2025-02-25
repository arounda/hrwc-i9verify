'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary/ButtonPrimary';
import s from './hero.module.scss';
import heroImg from '@/assets/Homepage/hero-img.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.heroMain}>
          <h1 className='heading-h1 is-centered'>
            SaaS for I-9 & E-Verify Compliance
          </h1>

          <p className={s.heroText}>
            Stay ahead of compliance challenges with a solution built for efficiency and accuracy.
          </p>

          <ButtonPrimary
            text='Learn More'
            link='/contact-us'
            isButtonBlue={true}
          />
        </div>

        <Image
          className={s.heroImg}
          src={heroImg}
          alt=''
          priority
        />
      </div>
    </section>
  )
};

export default Hero;
