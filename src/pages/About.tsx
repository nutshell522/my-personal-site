import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceItem, SkillCategory } from './types';

const About: React.FC = () => {
  const { t } = useTranslation(['about', 'ui']);

  const aboutTitle = t('aboutUI.title', { ns: 'ui' }); // '關於我'
  const experienceTitle = t('aboutUI.experience.title', { ns: 'ui' }); // '經歷'
  const skillsTitle = t('aboutUI.skills.title', { ns: 'ui' }); // '技能'

  const experienceItems =
    (t('experience.items', { returnObjects: true }) as ExperienceItem[]) || [];
  const skillsCategories =
    (t('skills.categories', { returnObjects: true }) as SkillCategory[]) || [];

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6">{aboutTitle}</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">{experienceTitle}</h2>
        {experienceItems.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-bold">{item.company}</h3>
            <p className="text-lg italic mb-2">
              {item.position} | {item.date}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {item.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>
                  <strong>{task.name}:</strong>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    {task.descriptions.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">{skillsTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-2">{category.category}</h3>
              <ul className="list-disc list-inside space-y-1">
                {category.items.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
