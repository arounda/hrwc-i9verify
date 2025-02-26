import s from './compliance.module.scss';
import mapMob from '@/assets/Homepage/Compliance/comp-map-mob.png';
import mapDesk from '@/assets/Homepage/Compliance/comp-map-desk.png';
import Image from 'next/image';

const Compliance = () => {
  return (
    <section className='section is-padding-block'>
      <div className="container">
        <div className={s.complianceWrapper}>
          <div className={s.complianceTop}>
            <h2 className="heading-h2 is-centered mb-8">
              Compliance, but make it easy.
            </h2>

            <p className="text is-centered">
              A fresh approach to I-9 & E-Verify that actually works for you.
            </p>
          </div>

          <div className={s.complianceImageWrapper}>
            <Image
              className={s.complianceImageMob}
              src={mapMob}
              alt=''
            />

            <Image
              className={s.complianceImageDesk}
              src={mapDesk}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compliance