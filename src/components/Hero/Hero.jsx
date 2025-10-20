import React from 'react';
import bgImg from '../../assets/bg.png';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';
import './Hero.css';

function Hero() {
  const { t } = useTranslation();
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t('heroName'), t('softwareDeveloper')],
      loop: true,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 600,
    });

    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <div 
      className='w-screen h-screen flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImg})` }}
      id='home'
    >
      <div className='contentHero flex flex-col justify-center items-center gap-2 h-full w-full'>
        <div className='hero-Hey'>
          <h2 className="mr-2">{t('heyIAm')}</h2>
          <span className='gradient-text' ref={el} />
        </div>
        <h3 className='text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight'>
          {t('buildingYourDream')} <br />
          <span className='gradient-text font-bold'>{t('pixel')}</span> {t('by')} <span className='gradient-text font-bold'>{t('pixel')}</span>!
        </h3>
        <a href="#about" className='btnHero mt-4 py-2 px-4 text-lg text-white bg-white bg-opacity-20 backdrop-blur-md rounded hover:bg-opacity-30 transform transition duration-500 hover:-translate-y-1'>{t('readMore')}</a>
      </div>
    </div>
  );
}

export default Hero;
