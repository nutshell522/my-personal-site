import { SkillCategory } from '../../pages/types';

/**
 * 技能分類卡片
 */
const SkillCategoryCard: React.FC<{ category: SkillCategory }> = ({
  category,
}) => (
  <div>
    <h3 className="text-2xl font-bold mb-2">{category.category}</h3>
    <ul className="list-disc list-inside space-y-2 pl-4">
      {category.items.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default SkillCategoryCard;
