import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * 底部導航元件
 * @param navItems 導航項目列表
 */
const BottomNav: React.FC<{
  navItems: {
    path: string;
    label: string;
    Icon: React.FC<{ className?: string }>;
  }[];
}> = ({ navItems }) => {
  const location = useLocation();

  // 判斷路徑是否為active狀態
  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `relative flex flex-col items-center group ${
      isActive
        ? 'text-activeLight dark:text-activeDark font-bold'
        : 'text-gray-600 dark:text-gray-300'
    }`;
  };

  return (
    <nav
      aria-label="Bottom Navigation"
      className="h-9 w-full text-nav-lightText dark:text-nav-darkText bg-nav-lightBg dark:bg-nav-darkBg sm:hidden flex justify-around items-center py-7 px-5 z-10"
    >
      {navItems.map(({ path, label, Icon }) => {
        const isActive = location.pathname === path;

        return (
          <Link
            key={path}
            to={path}
            className={getLinkClass(path)}
            aria-label={label}
          >
            {/* 動畫條 */}
            <div
              className={`absolute top-7 h-2 translate-y-0.5 bg-nav-activeLight dark:bg-nav-activeDark z-0 transition-width duration-300
                ${isActive ? 'w-120%' : 'w-0'} group-hover:w-120%`}
            ></div>
            {/* 圖標 */}
            <Icon className="text-xl relative z-10" />
            {/* 標籤 */}
            <span className="relative z-10 text-sm">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
