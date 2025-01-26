import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectItem } from './types';
import ProjectCard from '../components/projects/ProjectCard';

/**
 * 專案頁面
 */
const Projects: React.FC = () => {
  const { t } = useTranslation(['projects', 'ui']);

  // 翻譯文字
  const title = t('projectsUI.title', { ns: 'ui' });
  const technologiesTitle = t('projectsUI.technologiesTitle', { ns: 'ui' });
  const tasksTitle = t('projectsUI.tasksTitle', { ns: 'ui' });
  const githubButton = t('projectsUI.buttons.github', { ns: 'ui' });
  const sourceButton = t('projectsUI.buttons.source', { ns: 'ui' });
  const demoButton = t('projectsUI.buttons.demo', { ns: 'ui' });

  // 專案資料
  const projects = t('items', { returnObjects: true }) as ProjectItem[];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            technologiesTitle={technologiesTitle}
            tasksTitle={tasksTitle}
            githubButton={githubButton}
            sourceButton={sourceButton}
            demoButton={demoButton}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
