import { useDarkMode } from '../context/DarkModeContext';

/**
 * 深色模式切換按鈕
 */
const DarkModeSwitcher: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-600 dark:bg-gray-200 dark:text-gray-800"
    >
      {isDarkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default DarkModeSwitcher;
