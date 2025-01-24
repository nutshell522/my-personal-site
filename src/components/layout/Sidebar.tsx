import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * 側邊導航元件
 * @param navItems 導航項目列表
 */
const Sidebar: React.FC<{
  navItems: {
    path: string;
    label: string;
    Icon: React.FC<{ className?: string }>;
  }[];
}> = ({ navItems }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // 判斷當前路徑是否為活動狀態
  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `relative flex items-center ${isActive ? 'font-bold' : ''} group`;
  };

  return (
    <aside
      className={`hidden sm:block transition-width duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      } h-screen dark:text-nav-darkText bg-nav-lightBg dark:bg-nav-darkBg`}
    >
      <button
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="p-2 m-2 bg-gray-300 dark:bg-gray-700 rounded"
        aria-label="Toggle Sidebar"
      >
        {isCollapsed ? '>>' : '<<'}
      </button>
      <nav aria-label="Sidebar Navigation">
        <ul className="flex flex-col">
          {navItems.map(({ path, label, Icon }) => {
            const isActive = location.pathname === path;

            return (
              <li key={path} className="mb-2">
                <Link
                  to={path}
                  className={getLinkClass(path)}
                  aria-label={label}
                >
                  {/* 動畫條 */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-nav-activeLight dark:bg-nav-activeDark transition-width duration-500 z-0 ${
                      isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  ></div>
                  <Icon className="mr-2 relative z-10" />
                  {!isCollapsed && (
                    <span className="relative z-10">{label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
