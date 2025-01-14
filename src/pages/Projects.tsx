import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectItem } from './types';

const Projects: React.FC = () => {
  const { t } = useTranslation('projects');

  const projects = t('items', { returnObjects: true }) as ProjectItem[];

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow"
          >
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <p className="mb-4">{project.description}</p>

            {project.images.length > 0 && (
              <div className="mb-4">
                {project.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={`/assets/images/projects/${image.src}`}
                    alt={image.alt}
                    className="w-full h-auto rounded mb-2"
                  />
                ))}
              </div>
            )}

            <h3 className="text-lg font-semibold mb-2">
              {t('technologiesTitle')}:
            </h3>
            <ul className="list-disc list-inside mb-4">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-2">{t('tasksTitle')}:</h3>
            <ul className="list-disc list-inside mb-4">
              {project.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>

            <div className="flex space-x-4 mt-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {t('demoButton')}
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  {t('sourceButton')}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                >
                  {t('githubButton')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
