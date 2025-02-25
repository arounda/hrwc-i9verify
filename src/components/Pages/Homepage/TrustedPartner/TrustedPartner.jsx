import s from './trustedPartner.module.scss';

const TrustedPartner = () => {
  return (
    <section className="section is-padding-block">
      <div className="container">
        <div className={s.partnerWrapper}>
          <div className={s.parnterMain}>
            <div className={s.partnerMainTop}>
              <h2 className='heading-h2 mb-8'>
                Trusted Partner for Workforce Solutions
              </h2>
              <p className='text'>Trusted by PEO, staffing & payroll platforms</p>
            </div>

            <div className={s.partnerMainBottom}>
              <div className={s.partnerMetric}>
                <div className={s.partnerMetricNum}>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58699 1.30997C7.87436 0.42551 9.12564 0.42551 9.41301 1.30997L10.5296 4.74649C10.6581 5.14203 11.0267 5.40983 11.4426 5.40983H15.056C15.986 5.40983 16.3726 6.59986 15.6203 7.14649L12.697 9.27037C12.3605 9.51483 12.2197 9.94814 12.3482 10.3437L13.4648 13.7802C13.7522 14.6647 12.7399 15.4001 11.9876 14.8535L9.06427 12.7296C8.72781 12.4852 8.27219 12.4852 7.93573 12.7296L5.01245 14.8535C4.26008 15.4001 3.24778 14.6647 3.53516 13.7802L4.65175 10.3437C4.78027 9.94814 4.63948 9.51483 4.30301 9.27037L1.37974 7.14649C0.627372 6.59986 1.01404 5.40983 1.94401 5.40983H5.55738C5.97328 5.40983 6.34187 5.14203 6.47039 4.74649L7.58699 1.30997Z" fill="#2D34FF" />
                  </svg>

                  <span>2004</span>
                </div>

                <p className="text">E-Verify Web Services Agent</p>
              </div>

              <div className={s.partnerMetric}>
                <div className={s.partnerMetricNum}>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58699 1.30997C7.87436 0.42551 9.12564 0.42551 9.41301 1.30997L10.5296 4.74649C10.6581 5.14203 11.0267 5.40983 11.4426 5.40983H15.056C15.986 5.40983 16.3726 6.59986 15.6203 7.14649L12.697 9.27037C12.3605 9.51483 12.2197 9.94814 12.3482 10.3437L13.4648 13.7802C13.7522 14.6647 12.7399 15.4001 11.9876 14.8535L9.06427 12.7296C8.72781 12.4852 8.27219 12.4852 7.93573 12.7296L5.01245 14.8535C4.26008 15.4001 3.24778 14.6647 3.53516 13.7802L4.65175 10.3437C4.78027 9.94814 4.63948 9.51483 4.30301 9.27037L1.37974 7.14649C0.627372 6.59986 1.01404 5.40983 1.94401 5.40983H5.55738C5.97328 5.40983 6.34187 5.14203 6.47039 4.74649L7.58699 1.30997Z" fill="#2D34FF" />
                  </svg>

                  <span>98%</span>
                </div>

                <p className="text">Customer satisfaction</p>
              </div>
            </div>
          </div>

          <div className={s.partnerCards}>
            <div className={s.partnerCard}>
              <div className={s.partnerIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11.5004L11 13.5004L15.5 9.00036M20 12.0004C20 16.9088 14.646 20.4788 12.698 21.6152C12.4766 21.7444 12.3659 21.809 12.2097 21.8425C12.0884 21.8685 11.9116 21.8685 11.7903 21.8425C11.6341 21.809 11.5234 21.7444 11.302 21.6152C9.35396 20.4788 4 16.9088 4 12.0004V7.21796C4 6.41845 4 6.01869 4.13076 5.67506C4.24627 5.3715 4.43398 5.10064 4.67766 4.88589C4.9535 4.6428 5.3278 4.50243 6.0764 4.22171L11.4382 2.21103C11.6461 2.13307 11.75 2.09409 11.857 2.07864C11.9518 2.06493 12.0482 2.06493 12.143 2.07864C12.25 2.09409 12.3539 2.13307 12.5618 2.21103L17.9236 4.22171C18.6722 4.50243 19.0465 4.6428 19.3223 4.88589C19.566 5.10064 19.7537 5.3715 19.8692 5.67506C20 6.01869 20 6.41845 20 7.21796V12.0004Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className={s.partnerHeading}>
                Hire Confidently
              </h3>

              <p className={s.partnerText}>
                Hire top talent quickly, while ensuring compliance.
              </p>
            </div>

            <div className={s.partnerCardsSeparatorMob}></div>

            <div className={s.partnerCard}>
              <div className={s.partnerIconWrapper}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3.46776C17.9817 4.20411 19 5.73314 19 7.5C19 9.26686 17.9817 10.7959 16.5 11.5322M18.5 16.7664C20.0115 17.4503 21.3725 18.565 22.5 20M2.5 20C4.44649 17.5226 7.08918 16 10 16C12.9108 16 15.5535 17.5226 17.5 20M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className={s.partnerHeading}>Onboard Seamlessly</h3>

              <p className={s.partnerText}>
                Easily onboard new employees from anywhere.
              </p>
            </div>

            <div className={s.partnerCardsSeparatorMob}></div>

            <div className={s.partnerCard}>
              <div className={s.partnerIconWrapper}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 21H5.1C4.53995 21 4.25992 21 4.04601 20.891C3.85785 20.7951 3.70487 20.6422 3.60899 20.454C3.5 20.2401 3.5 19.9601 3.5 19.4V3M21.5 7L16.0657 12.4343C15.8677 12.6323 15.7687 12.7313 15.6545 12.7684C15.5541 12.8011 15.4459 12.8011 15.3455 12.7684C15.2313 12.7313 15.1323 12.6323 14.9343 12.4343L13.0657 10.5657C12.8677 10.3677 12.7687 10.2687 12.6545 10.2316C12.5541 10.1989 12.4459 10.1989 12.3455 10.2316C12.2313 10.2687 12.1323 10.3677 11.9343 10.5657L7.5 15M21.5 7H17.5M21.5 7V11" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className={s.partnerHeading}>Manage Efficiently</h3>

              <p className={s.partnerText}>
                Streamline your workflow and support your team’s growth.
              </p>
            </div>

            <div className={s.partnerCardsSeparatorMob}></div>

            <div className={s.partnerCard}>
              <div className={s.partnerIconWrapper}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 19C4.51472 19 2.5 16.9853 2.5 14.5C2.5 12.1564 4.29151 10.2313 6.57974 10.0194C7.04781 7.17213 9.52024 5 12.5 5C15.4798 5 17.9522 7.17213 18.4203 10.0194C20.7085 10.2313 22.5 12.1564 22.5 14.5C22.5 16.9853 20.4853 19 18 19C13.6102 19 10.8433 19 7 19Z" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className={s.partnerHeading}>Scale Effortlessly</h3>

              <p className={s.partnerText}>
                Adapt and grow with HR solutions that scale with your business.
              </p>
            </div>

            <div className={s.partnerCardsSeparator}></div>
            <div className={s.partnerCardsSeparatorVertical}></div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default TrustedPartner;
