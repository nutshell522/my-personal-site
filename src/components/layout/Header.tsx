import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';
import DarkModeSwitcher from '../DarkModeSwitcher';

/**
 * 頁面頂部標題欄
 */
const Header: React.FC = () => {
  return (
    <header className="bg-gray-300 dark:bg-gray-700 w-full flex justify-between items-center h-16">
      {/* header 左側 */}
      <div className="h-full flex items-center ml-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gray-500 dark:text-gray-500 rounded-full bg-white overflow-hidden inline-block">
          <Link to="/">TY</Link>
        </h1>
      </div>

      {/* header 右側 */}
      <div className="h-full flex items-center space-x-4 mr-4">
        {/* 語系切換按鈕 */}
        <LanguageSwitcher />

        {/* 深色模式切換按鈕 */}
        <DarkModeSwitcher />
      </div>
    </header>
  );
};

export default Header;
