'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary/ButtonPrimary';
import s from './contact.module.scss';

const Contact = () => {
  return (
    <section className={`section no-paddings ${s.contact}`}>
      <div className="container">
        <div className={s.contactWrapper}>
          <div className={s.contactMain}>
            <h2
              className={`heading-h2 is-centered is-white`}
              id={s.contactHeading}
            >
              Start Saving Today
            </h2>

            <p className={`text is-centered is-white ${s.contactSubtitle}`}>
              Schedule a demo or contact us to learn how we can help your business thrive.
            </p>

            <ButtonPrimary
              text='Schedule a Free Consultation'
              link='/contact-us'
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;
