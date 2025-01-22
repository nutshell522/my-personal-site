import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectItem } from './types';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

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
    <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

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

/**
 * 單個專案卡片
 */
const ProjectCard: React.FC<{
  project: ProjectItem;
  technologiesTitle: string;
  tasksTitle: string;
  githubButton: string;
  sourceButton: string;
  demoButton: string;
}> = ({
  project,
  technologiesTitle,
  tasksTitle,
  githubButton,
  sourceButton,
  demoButton,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 紀錄滑動方向

  const handleNext = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventScrollOnSwipe: true,
  });

  let startX = 0;
  let isDragging = false;

  const handleMouseDown = (event: React.MouseEvent) => {
    startX = event.clientX;
    isDragging = true;
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    if (!isDragging) return;

    const endX = event.clientX;
    const diff = endX - startX;

    if (diff > 50) {
      handlePrevious();
    } else if (diff < -50) {
      handleNext();
    }

    isDragging = false;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow">
      <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
      <p className="mb-4">{project.description}</p>

      {/* 圖片輪播 */}
      {project.images.length > 0 ? (
        <div
          className="relative mb-4"
          {...swipeHandlers}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {/* 主圖片滑動 */}
          <motion.img
            key={currentImageIndex}
            src={`/assets/images/projects/${project.images[currentImageIndex].src}`}
            alt={project.images[currentImageIndex].alt}
            className="w-full h-auto rounded mb-2"
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* 左右按鈕 */}
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
            aria-label="上一張"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
            aria-label="下一張"
          >
            &gt;
          </button>

          {/* 圖片點選圓點 */}
          <div className="flex justify-center space-x-2 mt-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full ${
                  currentImageIndex === index
                    ? 'bg-blue-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`切換到第 ${index + 1} 張圖片`}
              ></button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <img
            src="/assets/images/no-image.png"
            alt="No image"
            className="w-full h-auto rounded mb-2"
          />
        </div>
      )}

      {/* 使用技術 */}
      <h3 className="text-lg font-semibold mb-2">{technologiesTitle}:</h3>
      <ul className="list-disc list-inside mb-4">
        {project.technologies.map((tech, techIndex) => (
          <li key={techIndex}>{tech}</li>
        ))}
      </ul>

      {/* 工作內容 */}
      <h3 className="text-lg font-semibold mb-2">{tasksTitle}:</h3>
      <ul className="list-disc list-inside mb-4">
        {project.tasks.map((task, taskIndex) => (
          <li key={taskIndex}>{task}</li>
        ))}
      </ul>

      {/* 按鈕區域 */}
      <div className="flex space-x-4 mt-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {demoButton}
          </a>
        )}
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {sourceButton}
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            {githubButton}
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;
