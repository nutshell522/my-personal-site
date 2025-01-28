import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';
import DarkModeSwitcher from '../DarkModeSwitcher';

/**
 * header 區域
 */
const Header: React.FC<{
  height: number;
  navItems: {
    path: string;
    label: string;
    Icon: React.FC<{ className?: string }>;
  }[];
}> = ({ height, navItems }) => {
  // 判斷當前路徑是否為活動狀態
  const getLinkClass = (path: string) => {
    const isActive =
      location.pathname.substring(location.pathname.length - path.length) ===
      path;
    return `relative  text-xl ${isActive ? 'font-bold' : ''} group`;
  };

  return (
    <header
      className="bg-header-lightBg dark:bg-header-darkBg text-header-lightText dark:text-header-darkText w-full flex justify-between items-center"
      style={{ height: `${height}px` }}
    >
      {/* header 左側 */}
      <div className="h-full flex items-center ml-4 sm:ml-12 sm:gap-6 md:gap-16">
        {/* Logo */}
        <Link to="/">
          <h1 className="aspect-square flex items-center justify-center text-2xl font-bold text-header-logoText dark:text-header-logoTextDark logo whitespace-nowrap">
            Ted Yin
          </h1>
        </Link>
        <nav
          aria-label="Sidebar Navigation"
          className="hidden h-full sm:flex my-10 justify-center items-center"
        >
          <ul className="flex h-full items-center gap-x-4 md:gap-x-10">
            {navItems.map(({ path, label, Icon }) => {
              const isActive =
                location.pathname.substring(
                  location.pathname.length - path.length
                ) === path;

              return (
                <li key={path} className="list-none">
                  <Link
                    to={path}
                    className={getLinkClass(path)}
                    aria-label={label}
                  >
                    <div className="relative group flex flex-row items-center">
                      {/* 動畫條 */}
                      <div
                        className={`absolute bottom-1 left-0 h-3 bg-nav-activeLight dark:bg-nav-activeDark transition-width duration-300 z-0 ${
                          isActive ? 'w-full ' : 'w-0 group-hover:w-60%'
                        }`}
                      ></div>
                      <Icon className="mr-2 relative z-10" />

                      <span className="relative z-10 whitespace-nowrap">
                        {label}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* header 右側 */}
      <div className="h-full flex items-center mr-4 sm:mr-12 gap-x-2">
        {/* 語系切換按鈕 */}
        <LanguageSwitcher />

        {/* 深色模式切換按鈕 */}
        <DarkModeSwitcher />
      </div>
    </header>
  );
};

export default Header;
