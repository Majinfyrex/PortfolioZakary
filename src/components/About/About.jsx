import React, { useState } from 'react';
import imgAbout from "../../assets/Zakary.jpeg";
import { useTranslation } from 'react-i18next';
import resume from '../../assets/resume.pdf';

const professionalExperiences = [
  {
    id: 1,
    dateKey: 'teckenDate',
    titleKey: 'softwareDeveloper',
    companyKey: 'companyTecken',
    descriptionKey: 'softwareDeveloperDescription',
  },
  {
    id: 2,
    dateKey: 'viapostDate',
    titleKey: 'AgentTri',
    companyKey: 'companyViapost',
    descriptionKey: 'agentTriDescription',
  },
  {
    id: 3,
    dateKey: 'hospitalDate',
    titleKey: 'Hospital',
    companyKey: 'companyHospital',
    descriptionKey: 'hospitalDescription',
  },
];

function About() {
  const { t } = useTranslation();
  const [experienceModalData, setExperienceModalData] = useState(null);

  const handleViewMoreExperience = (experience) => {
    setExperienceModalData(experience);
  };

  const handleCloseExperienceModal = () => {
    setExperienceModalData(null);
  };

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
                  <span className="block text-sm gradient-text">{t('diginamicDate')}</span>
                  <h4 className="text-lg mb-2">{t('DevWeb')}</h4>
                  <p className="text-base text-white/80">Diginamic</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">{t('codecademyFullstackDate')}</span>
                  <h4 className="text-lg mb-2">{t('webAccessibility')}</h4>
                  <p className="text-base text-white/80">CodeCademy</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">{t('codecademyFrontendDate')}</span>
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
              {professionalExperiences.map((experience) => (
                <li key={experience.id}>
                  <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                    <span className="block text-sm gradient-text mb-2">{t(experience.dateKey)}</span>
                    <h4 className="text-lg mb-2">{t(experience.titleKey)}</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-base text-white/80">{t(experience.companyKey)}</p>
                      <button
                        onClick={() => handleViewMoreExperience(experience)}
                        className="bg-blue-600 text-white py-1 px-3 rounded-lg text-sm transition-colors duration-300 hover:bg-blue-700"
                      >
                        {t('viewMore')}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Experience Detail Modal */}
      {experienceModalData && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 p-4">
          <div className="relative BGblur rounded-xl shadow-xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseExperienceModal}
              className="absolute top-2 right-2 text-gray-100 hover:text-gray-400"
            >
              <i className="bx bx-x text-3xl"></i>
            </button>
            <h3 className="text-2xl font-bold gradient-text mb-4">{t(experienceModalData.titleKey)}</h3>
            <p className="text-white text-lg mb-2">{t(experienceModalData.companyKey)}</p>
            <p className="text-white text-sm mb-4">{t(experienceModalData.dateKey)}</p>
            <p className="text-white whitespace-pre-line">{t(experienceModalData.descriptionKey)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
