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
      { name: 'HTML5', level: 95, icon: 'bxl-html5' },
      { name: 'React', level: 70, icon: 'bxl-react' },
      { name: 'CSS', level: 90, icon: 'bxl-css3' },
      { name: 'Javascript', level: 85, icon: 'bxl-javascript' },
      { name: 'Tailwind CSS', level: 80, icon: 'bxl-tailwind-css' },
      { name: 'TypeScript', level: 70, icon: 'bxl-typescript' },
      { name: 'Next.js', level: 70, icon: 'bx-code-alt' },
      { name: 'Python', level: 50, icon: 'bxl-python' },
    ],
    backend: [
      { name: 'Node.js', level: 75, icon: 'bxl-nodejs' },
      { name: 'Symfony', level: 65, icon: 'bxl-php' },
      { name: 'Python', level: 50, icon: 'bxl-python' },
      { name: 'MySQL', level: 60, icon: 'bxl-postgresql' },
    ],
    webDevelopment: [
      { name: 'HTML5', level: 95, icon: 'bxl-html5' },
      { name: 'React', level: 70, icon: 'bxl-react' },
      { name: 'TypeScript', level: 70, icon: 'bxl-typescript' },
      { name: 'CSS', level: 90, icon: 'bxl-css3' },
      { name: 'Javascript', level: 85, icon: 'bxl-javascript' },
      { name: 'Tailwind CSS', level: 80, icon: 'bxl-tailwind-css' },
      { name: 'Next.js', level: 70, icon: 'bx-code-alt' },
      { name: 'Node.js', level: 75, icon: 'bxl-nodejs' },
      { name: 'Symfony', level: 65, icon: 'bxl-php' },
      { name: 'Python', level: 75, icon: 'bxl-python' },
    ],
    // softwareDevelopment: [
    //   { name: 'Python', level: 75, icon: 'bxl-python' },
    //   { name: '.Net Framework', level: 70, icon: 'bx-code-alt' },
    //   { name: 'WPF', level: 70, icon: 'bx-window' },
    //   { name: 'C#', level: 70, icon: 'bx-code-alt' },
    //   { name: 'Xaml (Xamarin)', level: 70, icon: 'bx-code-alt' },
    // ],
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideUp">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-5 animate-grow">
                <div className="flex items-center mb-3">
                  <i className={`bx ${skill.icon} gradient-text text-3xl mr-3`}></i>
                  <span className="text-white text-lg">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                  <div
                    className="gradient-bg h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right">
                  <span className="gradient-text text-sm">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
