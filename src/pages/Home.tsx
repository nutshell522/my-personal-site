import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from 'react-typed';
import sharedInfo from '../../public/datas/sharedInfo.json';

const Home: React.FC = () => {
  const { t } = useTranslation('home');
  const bio = t('bio', { returnObjects: true }) as string[];
  const avatar = sharedInfo.avatar;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="transition-colors duration-300 flex flex-col items-center justify-center h-screen text-gray-800 dark:text-gray-200">
      {/* 大頭貼 */}
      <img
        src={`/assets/images/personal/${avatar}`}
        alt="avatar"
        className="w-32 h-32 rounded-full mb-4"
      />
      {/* 姓名 */}
      <h1 className="text-4xl font-bold mb-4">{t('name')}</h1>
      {/* 職業 */}
      <h2 className="text-2xl font-semibold mb-6">{t('title')}</h2>

      {/* 打字動畫 */}
      <div className="text-xl font-semibold">
        <span>{t('typeAnimation.sentenceHead')} </span>
        <ReactTyped
          strings={
            t('typeAnimation.sentences', { returnObjects: true }) as string[]
          }
          typeSpeed={100}
          backSpeed={50}
          backDelay={1300}
          loop
        />
      </div>

      {/* 介紹 */}
      {bio.map((b, index) => (
        <p key={index} className="text-lg mb-2">
          {b}
        </p>
      ))}
    </div>
  );
};

export default Home;
