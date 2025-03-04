'use client';

import { Slider, styled } from '@mui/material';
import { forwardRef, useState } from 'react';
import s from './hero.module.scss';

const CustomThumb = styled('span')(({ theme, ownerState }) => ({
  transform: 'translate(-50%, -50%)',
  padding: '0.8rem 1.6rem',
  color: 'var(--white)',
  backgroundColor: 'var(--primary)',
  borderRadius: '24px',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '150%',
  position: 'absolute',
  top: '50%',
  left: `${ownerState[ 'data-index' ] * 100}%`,
}));

// const Thumb = forwardRef((props, ref) => {
//   const { children, ...other } = props;
//   // console.log(props.val);
//   return (
//     <CustomThumb {...other} ref={ref} tabIndex={0}>
//       {children}
//     </CustomThumb>
//   );
// });

const Hero = () => {
  const [ progressBar, setProgressBar ] = useState(30);

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

            <Slider
              defaultValue={30}
              valueLabelDisplay="on"
              step={10}
              sx={{
                height: '16px',
                marginInline: 'auto',
                color: 'var(--primary)',
                padding: '0px',
                '& .MuiSlider-thumb': {
                  '&::before': {
                    boxShadow: 'none',
                  },
                  '&::after': {
                    width: 'auto',
                    height: 'auto',
                    boxShadow: 'none',
                    color: 'white',
                    backgroundColor: 'var(--primary)',
                  },
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#F4F5F7',
                  opacity: 1,
                },
                '& .MuiSlider-valueLabel': {
                  fontSize: '1.6rem',
                  backgroundColor: 'var(--light-blue)',
                  color: 'var(--primary)',
                },
              }}
              min={10}
              max={100}
              onChange={(e) => setProgressBar(e.target.value)}
              slots={{
                thumb: (props) => (
                  <CustomThumb {...props} val={progressBar} />
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero