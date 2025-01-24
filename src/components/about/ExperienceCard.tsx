import { ExperienceItem } from '../../pages/types';

/**
 * 經歷卡片
 */
const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({
  experience,
}) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold">{experience.company}</h3>
    <p className="text-sm italic mb-4 text-gray-500 dark:text-gray-400">
      {experience.position} | {experience.date}
    </p>
    <ul className="list-disc list-inside space-y-3 pl-4">
      {experience.tasks.map((task, taskIndex) => (
        <li key={taskIndex}>
          <strong>{task.name}:</strong>
          <ul className="list-disc list-inside pl-6 space-y-1">
            {task.descriptions.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
