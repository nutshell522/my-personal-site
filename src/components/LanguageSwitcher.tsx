import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * 語言切換組件
 */
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  // 是否顯示下拉選單
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // 當前顯示的語言文字
  const [currentLanguageLabel, setCurrentLanguageLabel] = useState('');

  // 語言選項列表
  const languageOptions = useMemo(
    () => [
      { key: 'zh', label: '中文' },
      { key: 'en', label: 'English' },
      { key: 'ja', label: '日本語' },
    ],
    []
  );

  // 當前語言代碼
  const currentLanguageKey = i18n.language;

  /**
   * 切換語言並關閉下拉選單
   * @param languageKey 要切換的語言代碼
   */
  const handleLanguageChange = (languageKey: string) => {
    i18n.changeLanguage(languageKey);
    setDropdownVisible(false);
    localStorage.setItem('language', languageKey);
  };

  // 根據目前語言key更新顯示的語言文字
  useEffect(() => {
    const selectedOption = languageOptions.find(
      (option) => option.key === currentLanguageKey
    );
    setCurrentLanguageLabel(selectedOption?.label || '');
  }, [currentLanguageKey, languageOptions]);

  return (
    <div
      className="relative cursor-pointer h-full w-16 "
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      {/* 顯示目前語言 */}
      <div
        className={`h-full text-gray-800 dark:text-gray-200 ${isDropdownVisible ? 'bg-gray-200 dark:bg-gray-600' : ''} rounded flex items-center justify-center`}
        onClick={() => setDropdownVisible((prev) => !prev)}
      >
        {currentLanguageLabel}
      </div>

      {/* 下拉選單 */}
      {isDropdownVisible && (
        <div className="absolute top-full bg-white dark:bg-gray-800 border rounded shadow-lg z-50">
          {languageOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => handleLanguageChange(option.key)}
              className="block w-full px-6 py-3 text-left text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 "
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
