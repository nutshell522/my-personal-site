import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { ProjectItem } from '../../pages/types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Slick 設定
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  /**
   * 開啟 Modal 並顯示圖片
   */
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  /**
   * 關閉 Modal
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="border rounded-sm bg-white dark:bg-gray-800 shadow-md p-6">
      {/* 專案名稱與描述 */}
      <h3 className="text-2xl font-bold">{project.name}</h3>

      {/* 圖片輪播 */}
      <div className="mb-6">
        {project.images.length > 0 ? (
          <Slider {...sliderSettings} className="">
            {project.images.map((image, index) => (
              <div
                key={index}
                onClick={() =>
                  handleImageClick(
                    `${baseUrl}assets/images/projects/${image.src}`
                  )
                }
              >
                <img
                  src={`${baseUrl}assets/images/projects/${image.src}`}
                  alt={image.alt}
                  className="w-full h-[260px] object-cover cursor-pointer"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            src={`${baseUrl}assets/images/no-image.png`}
            alt="No image available"
            className="w-full h-[260px] object-cover"
          />
        )}
      </div>

      {/* 專案描述 */}
      <div className="">
        <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm">
          {project.description}
        </p>

        {/* 使用技術 */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold">{technologiesTitle}:</h4>
          <ul className="text-gray-700 dark:text-gray-300 space-y-1 p-2">
            {project.technologies.map((tech, index) => (
              <li
                className="list-none bg-technologies-lightBg dark:bg-technologies-darkBg text-technologies-lightText dark:text-technologies-darkText px-2 py-1 rounded-sm inline-block mr-2 mb-2 text-sm hover:bg-technologies-lightBgHover dark:hover:bg-technologies-darkBgHover"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* 工作內容 */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold">{tasksTitle}:</h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 p-2">
            {project.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        {/* 按鈕區域 */}
        <div className="flex flex-wrap gap-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            >
              {demoButton}
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
            >
              {sourceButton}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {githubButton}
            </a>
          )}
        </div>
      </div>

      {/* 圖片放大 Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="relative max-w-4xl bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        ariaHideApp={false}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          aria-label="Close modal"
        >
          &times;
        </button>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Enlarged Project"
            className="max-w-full max-h-screen rounded-md"
          />
        )}
      </Modal>
    </div>
  );
};

export default ProjectCard;
