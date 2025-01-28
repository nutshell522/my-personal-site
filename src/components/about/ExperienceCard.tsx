import { ExperienceItem } from '../../pages/types';

/**
 * 經歷卡片
 */
const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({
  experience,
}) => (
  <div className="p-6 mb-8 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
    {/* 公司名稱 */}
    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
      {experience.company}
    </h3>

    {/* 職位與日期 */}
    <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-4">
      {experience.position} | {experience.date}
    </p>

    <hr className="border-gray-300 dark:border-gray-700 mb-6" />

    {/* 任務列表 */}
    <ul className="list-disc list-inside space-y-4">
      {experience.tasks.map((task, taskIndex) => (
        <li key={taskIndex} className="text-gray-800 dark:text-gray-200">
          <strong className="text-gray-900 dark:text-gray-100">
            {task.name}:
          </strong>
          <ul className="list-disc list-inside pl-6 space-y-1">
            {task.descriptions.map((desc, descIndex) => (
              <li key={descIndex} className="text-gray-600 dark:text-gray-400">
                {desc}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
