import React, { useState } from 'react';
import './tools.css';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import { useTranslation } from 'react-i18next';

function Tools() {
  const [filter, setFilter] = useState('Front-end');
  const { t } = useTranslation();

  const skills = {
    frontend: [
      { name: 'HTML5', icon: 'bxl-html5' },
      { name: 'React', icon: 'bxl-react' },
      { name: 'CSS3', icon: 'bxl-css3' },
      { name: 'Javascript', icon: 'bxl-javascript' },
      { name: 'Tailwind CSS', icon: 'bxl-tailwind-css' },
      { name: 'TypeScript', icon: 'bxl-typescript' },
      { name: 'Next.js', icon: 'bx-code-alt' },
      { name: 'Angular', icon: 'bxl-angular' },
    ],
    backend: [
      { name: 'Node.js', icon: 'bxl-nodejs' },
      { name: 'Symfony', icon: 'bxl-php' },
      { name: 'Python', icon: 'bxl-python' },
      { name: 'MySQL', icon: 'bxl-postgresql' },
      { name: 'REST APIs', icon: 'bx-server' },
    ],
    webDevelopment: [
      { name: 'HTML5', icon: 'bxl-html5' },
      { name: 'React', icon: 'bxl-react' },
      { name: 'TypeScript', icon: 'bxl-typescript' },
      { name: 'CSS3', icon: 'bxl-css3' },
      { name: 'Javascript', icon: 'bxl-javascript' },
      { name: 'Tailwind CSS', icon: 'bxl-tailwind-css' },
      { name: 'Next.js', icon: 'bx-code-alt' },
      { name: 'Angular', icon: 'bxl-angular' },
      { name: 'Node.js', icon: 'bxl-nodejs' },
      { name: 'Symfony', icon: 'bxl-php' },
      { name: 'Python', icon: 'bxl-python' },
      { name: 'MySQL', icon: 'bxl-postgresql' },
    ],
  };

  const tools = [
    { name: 'JetBrains IDE', icon: 'bxl-visual-studio' },
    { name: 'Git', icon: 'bxl-git' },
    { name: 'GitHub', icon: 'bxl-github' },
    { name: 'Figma', icon: 'bxl-figma' },
  ];

  const filteredSkills = (() => {
    switch (filter) {
      case t('Front-end'):
        return skills.frontend;
      case t('Back-end'):
        return skills.backend;
      case t('Web Development'):
        return skills.webDevelopment;
      case t('Software Development'):
        return skills.softwareDevelopment;
      default:
        return [];
    }
  })();

  return (
    <div className="bgTools py-16 flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-12 sm:mb-16 animate-fadeIn">
          <span className='gradient-text'>{t('tools')}</span> {t('and')} <span className='gradient-text'>{t('skills')}</span>
        </h2>

        <div className="w-full max-w-5xl mb-16">
          <h3 className="text-2xl gradient-text mb-8 text-center animate-fadeIn">
            {t('tools')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 animate-fadeIn">
                <i className={`bx ${tool.icon} gradient-text text-5xl mb-4`}></i>
                <span className="text-white text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-5xl">
          <h3 className="text-2xl gradient-text mb-8 text-center animate-fadeIn">
            {t('skills')}
          </h3>
          
          <div className="flex justify-center flex-wrap gap-4 mb-10">
            {[t('Front-end'), t('Back-end'), t('Web Development')].map((category) => (
              <button
                key={category}
                className={`btnCategory ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                <h3 className="gradient-text">{category}</h3>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-slideUp">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 animate-grow">
                <i className={`bx ${skill.icon} gradient-text text-5xl mb-3`}></i>
                <span className="text-white text-center text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
