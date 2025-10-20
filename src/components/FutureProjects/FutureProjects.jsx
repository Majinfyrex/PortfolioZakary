import React from 'react';
import 'tailwindcss/tailwind.css';
import { useTranslation } from 'react-i18next';

function FutureProjects() {
  const { t } = useTranslation();

  const futureProjects = [
    {
      id: 1,
      title: t('futureProjects.projects.0.title'),
      description: t('futureProjects.projects.0.description'),
      link: 'https://www.linkedin.com/pulse/por-tr%C3%A1s-do-c%C3%B3digo-como-otimizar-o-desempenho-de-sites-pedro-vanlume-eoiuf/?trackingId=Sf5UCN78RNuzCxO74TPKjg%3D%3D', // Link para o artigo
    },
    {
      id: 2,
      title: t('futureProjects.projects.1.title'),
      description: t('futureProjects.projects.1.description'),
      link: 'https://www.linkedin.com/pulse/desmistificando-programa%C3%A7%C3%A3o-ass%C3%ADncrona-promessas-e-pedro-vanlume-kipzf/?trackingId=mDShVhaYRDyVvnXI26wETw%3D%3D', // Link para o artigo
    },
    {
      id: 3,
      title: t('futureProjects.projects.2.title'),
      description: t('futureProjects.projects.2.description'),
      link: 'https://www.linkedin.com/pulse/import%C3%A2ncia-de-versionar-seu-c%C3%B3digo-um-guia-pr%C3%A1tico-git-pedro-vanlume-j0m2f/?trackingId=aGsm46jYR0%2B4u97pC2qQrA%3D%3D', // Link para o artigo
    },
  ];

  return (
    <section id='contact' className="py-16 px-4 md:px-8 lg:px-16 bgTools">
      <h2 className="text-4xl gradient-text font-bold text-center mb-12">
        {t('futureProjects.title')}
      </h2>
      <div className="flex flex-col gap-8">
        {futureProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl shadow-lg bg-white/10 text-white p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20"
          >
            <h3 className="text-2xl font-semibold gradient-text mb-4">{project.title}</h3>
            <p className="text-white mb-6">{project.description}</p>
            <a
              href={project.link} target='_blank'
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              {t('futureProjects.buttonText', 'Saiba Mais')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FutureProjects;
