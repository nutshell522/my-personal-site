import { SkillCategory } from '../../pages/types';

/**
 * 技能分類卡片
 */
const SkillCategoryCard: React.FC<{ category: SkillCategory }> = ({
  category,
}) => (
  <div className="p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300">
    {/* 技能類別名稱 */}
    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
      {category.category}
    </h3>

    <hr className="border-gray-300 dark:border-gray-700 mb-6" />

    {/* 技能列表 */}
    <ul className="list-disc list-inside space-y-2">
      {category.items.map((skill, index) => (
        <li
          key={index}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillCategoryCard;
