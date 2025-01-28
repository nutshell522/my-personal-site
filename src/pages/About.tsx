import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceItem, SkillCategory } from './types';
import ExperienceCard from '../components/about/ExperienceCard';
import SkillCategoryCard from '../components/about/SkillCategoryCard';

/**
 * 關於我
 */
const About: React.FC = () => {
  const { t } = useTranslation(['about', 'ui']);

  // 動態標題
  const aboutTitle = t('aboutUI.title', { ns: 'ui' });
  const experienceTitle = t('aboutUI.experience.title', { ns: 'ui' });
  const skillsTitle = t('aboutUI.skills.title', { ns: 'ui' });

  // 經歷與技能資料
  const experienceItems =
    (t('experience.items', { returnObjects: true }) as ExperienceItem[]) || [];
  const skillsCategories =
    (t('skills.categories', { returnObjects: true }) as SkillCategory[]) || [];

  return (
    <div className="p-8">
      {/* 頁面標題 */}
      <h2 className="text-3xl font-bold mb-8 text-center">{aboutTitle}</h2>

      {/* 經歷區域 */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-2">{experienceTitle}</h2>
        {experienceItems.map((item, index) => (
          <ExperienceCard key={index} experience={item} />
        ))}
      </section>

      {/* 技能區域 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">{skillsTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
