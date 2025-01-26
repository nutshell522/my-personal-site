import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';
import DarkModeSwitcher from '../DarkModeSwitcher';

/**
 * 頁面頂部標題欄
 */
const Header: React.FC<{ height: number }> = ({ height }) => {
  return (
    <header
      className="bg-header-lightBg dark:bg-header-darkBg text-header-lightText dark:text-header-darkText w-full flex justify-between items-center"
      style={{ height: `${height}px` }}
    >
      {/* header 左側 */}
      <div className="h-full flex items-center ml-4">
        {/* Logo */}
        <h1 className="aspect-square flex items-center justify-center text-xl sm:h-40 sm:text-3xl lg:h-48 lg:text-4xl font-bold text-header-logoText bg-header-logoBg rounded-full overflow-hidden">
          <Link to="/">TY</Link>
        </h1>
      </div>

      {/* header 右側 */}
      <div className="h-full flex items-center mr-4">
        {/* 語系切換按鈕 */}
        <LanguageSwitcher />

        {/* 深色模式切換按鈕 */}
        <DarkModeSwitcher />
      </div>
    </header>
  );
};

export default Header;
