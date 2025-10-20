import React from 'react';
import imgAbout from "../../assets/Zakary.jpeg";
import { useTranslation } from 'react-i18next';
import resume from '../../assets/resume.pdf';

function About() {
  const { t } = useTranslation();

  return (
    <div id='about' className="w-screen h-auto min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#060022] to-[#00093d] p-8 gap-8 overflow-hidden">
      <h3 className="text-center text-white text-[clamp(18px,4vw,30px)] mt-12">
        {t('aboutTitle')} <span className="gradient-text">{t('nextproject')}</span>
      </h3>
      
      <div className="flex flex-wrap justify-center items-center gap-5 max-w-[1200px] w-full">
        <div className="w-full max-w-[450px] flex justify-center items-center flex-col gap-3">
          <img src={imgAbout} alt="Profile" className="w-full max-w-[450px] rounded-[15px]" />
        </div>
        
        <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[600px]">
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <p className="text-center text-white/80 text-[clamp(14px,4vw,18px)] px-2">
              {t('aboutDescription')}
            </p>
            
            <div className="flex justify-center gap-2">
              <a href="#projects" className="px-4 py-2 text-white text-[clamp(12px,4vw,14px)] bg-white/20 backdrop-blur-sm rounded-[5px] transition hover:bg-white/35 transform hover:translate-y-[-5px]">
                {t('portfolioButton')}
              </a>
              <a href={resume} download="resume.pdf" target="_blank" className="px-4 py-2 text-white text-[clamp(12px,4vw,14px)] bg-white/20 backdrop-blur-sm rounded-[5px] transition hover:bg-white/35 transform hover:translate-y-[-5px]">
                {t('downloadCVButton')}
              </a>
            </div>
          </div>
          
          <div className="flex justify-center flex-wrap gap-5 w-full">
            <div className="flex-1 max-w-[300px] px-4 py-2 text-center text-white text-[clamp(14px,4vw,20px)] rounded-[10px]">
              <h2>{t('experienceYears')} <br /><span className="bg-clip-text gradient-text">{t('experience')}</span></h2>
            </div>
            {/*<div className="flex-1 max-w-[300px] px-4 py-2 text-center text-white text-[clamp(14px,4vw,20px)] rounded-[10px]">*/}
            {/*  <h2>{t('projectsGithub')}<br /><span className="bg-clip-text gradient-text">Github</span></h2>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-10 p-8 rounded-[15px]">
        <h2 className="text-3xl mb-10 text-center text-white gradient-text">
          {t('journeyTitle')}
        </h2>
        
        <div className="flex flex-wrap justify-between items-start gap-8 max-w-[1200px] w-full">
          <div className="flex-1 p-5 rounded-[15px] text-white min-w-[280px] shadow-md transition">
            <h3 className="text-[1.8rem] mb-5 text-center">{t('education')}</h3>
            <ul className="space-y-5">
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text">{t('Septembre2024')}</span>
                  <h4 className="text-lg mb-2">{t('DevWeb')}</h4>
                  <p className="text-base text-white/80">Diginamic</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">{t('Aujourdhui')}</span>
                  <h4 className="text-lg mb-2">{t('webAccessibility')}</h4>
                  <p className="text-base text-white/80">CodeCademy</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">{t('JuilletAout2024')}</span>
                  <h4 className="text-lg mb-2">{t('frontendTraining')}</h4>
                  <p className="text-base text-white/80">CodeCademy</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">2020 - 2023</span>
                  <h4 className="text-lg mb-2">{t('ManipRadio')}</h4>
                  <p className="text-base text-white/80">IFSI Montpellier</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-5 rounded-[15px] text-white min-w-[280px] shadow-md transition">
            <h3 className="text-[1.8rem] mb-5 text-center">{t('professionalExperience')}</h3>
            <ul className="space-y-5">
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">{t('Marçode2022Abrilde2023')}</span>
                  <h4 className="text-lg mb-2">{t('softwareDeveloper')}</h4>
                  <p className="text-base text-white/80">{t('companyTecken')}</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">{t('ViapostTemps')}</span>
                  <h4 className="text-lg mb-2">{t('AgentTri')}</h4>
                  <p className="text-base text-white/80">{t('companyViapost')}</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">{t('JuilletDecembre2023')}</span>
                  <h4 className="text-lg mb-2">{t('Hospital')}</h4>
                  <p className="text-base text-white/80">{t('companyHospital')}</p>
                </div>
              </li>
              <li>
                {/*<div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">*/}
                {/*  <span className="block text-sm gradient-text mb-2">{t('Maiode2024')}</span>*/}
                {/*  <h4 className="text-lg mb-2">{t('freelancer')}</h4>*/}
                {/*  <p className="text-base text-white/80">{t('companyAfago')}</p>*/}
                {/*</div>*/}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
