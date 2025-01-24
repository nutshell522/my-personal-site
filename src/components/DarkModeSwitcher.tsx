import { useDarkMode } from '../context/DarkModeContext';
import { IoMdSunny } from 'react-icons/io';
import { IoMdMoon } from 'react-icons/io';

/**
 * 深色模式切換按鈕
 */
const DarkModeSwitcher: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <label
      className="relative flex items-center justify-between w-12 h-6 rounded-full cursor-pointer bg-darkModeSwitcher-bgLight dark:bg-darkModeSwitcher-bgDark"
      aria-label="Dark mode toggle"
    >
      {/* 隱藏的切換按鈕 */}
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className="hidden"
      />

      {/* 切換滑塊 */}
      <span className="absolute top-0 left-0 w-6 h-6 rounded-full transition-transform duration-300 transform dark:translate-x-full flex items-center justify-center bg-darkModeSwitcher-sliderLight dark:bg-darkModeSwitcher-sliderDark">
        {isDarkMode ? (
          <IoMdMoon
            className="text-darkModeSwitcher-moonIcon"
            aria-label="Dark mode enabled"
          />
        ) : (
          <IoMdSunny
            className="text-darkModeSwitcher-sunIcon"
            aria-label="Light mode enabled"
          />
        )}
      </span>
    </label>
  );
};

export default DarkModeSwitcher;
