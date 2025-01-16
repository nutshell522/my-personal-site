import { PiBriefcaseThin } from 'react-icons/pi';
import { BsPerson } from 'react-icons/bs';
import { GoComment } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi2';
import { useTranslation } from 'react-i18next';

const Nav: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const { t } = useTranslation('nav');

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `flex items-center ${
      isActive
        ? 'text-activeLight dark:text-activeDark font-bold'
        : 'text-gray-600 dark:text-gray-300'
    }`;
  };

  return (
    <aside
      className={`transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      } h-screen bg-gray-100 dark:bg-gray-800`}
    >
      <button
        onClick={toggleCollapse}
        className="p-2 m-2 bg-gray-300 dark:bg-gray-700 rounded"
        aria-label="收折側邊欄"
      >
        {isCollapsed ? '>>' : '<<'}
      </button>
      <nav aria-label="主要導航">
        <ul className="flex flex-col">
          <li className="mb-2">
            <Link to="/" className={getLinkClass('/')} aria-label="首頁">
              <BsPerson className="mr-2" />
              {!isCollapsed && <span>{t('home')}</span>}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/about"
              className={getLinkClass('/about')}
              aria-label="關於我"
            >
              <PiBriefcaseThin className="mr-2" />
              {!isCollapsed && <span>{t('about')}</span>}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/projects"
              className={getLinkClass('/projects')}
              aria-label="作品集"
            >
              <HiOutlineLightBulb className="mr-2" />
              {!isCollapsed && <span>{t('projects')}</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={getLinkClass('/contact')}
              aria-label="聯絡我"
            >
              <GoComment className="mr-2" />
              {!isCollapsed && <span>{t('contact')}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
