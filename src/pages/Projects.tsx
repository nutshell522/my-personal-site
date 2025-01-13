import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation('projects');

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(
          t('items', { returnObjects: true }) as {
            title: string;
            description: string;
            technologies: string[];
            responsibilities: string[];
          }[]
        ).map(
          (
            project: {
              title: string;
              description: string;
              technologies: string[];
              responsibilities: string[];
            },
            index: number
          ) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow"
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <h3 className="text-lg font-semibold mb-2">
                {t('technologies')}:
              </h3>
              <ul className="list-disc list-inside mb-4">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold mb-2">
                {t('responsibilities')}:
              </h3>
              <ul className="list-disc list-inside">
                {project.responsibilities.map(
                  (task: string, taskIndex: number) => (
                    <li key={taskIndex}>{task}</li>
                  )
                )}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
