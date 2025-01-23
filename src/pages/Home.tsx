import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from 'react-typed';
import sharedInfo from '../../public/datas/sharedInfo.json';
import { FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

/**
 * 首頁
 */
const Home: React.FC = () => {
  const { t } = useTranslation('home');

  // 動態內容
  const avatar = `/assets/images/personal/${sharedInfo.avatar}`;
  const name = t('name');
  const title = t('title');
  const typeAnimation = t('typeAnimation', { returnObjects: true }) as {
    sentenceHead: string;
    sentences: string[];
  };
  const bio = t('bio', { returnObjects: true }) as string[];

  // 初始化時滾動到頁面頂部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200 mx-auto px-8 py-8 sm:px-14 min-w-60">
      {/* 個人資料卡片 */}
      <section className="mb-11">
        <div className="flex items-center justify-center gap-4 mb-4 flex-col sm:flex-row">
          {/* 大頭貼 */}
          <img
            src={avatar}
            alt="avatar"
            className="w-full max-w-32 rounded-full sm:w-1/4 sm:max-w-40"
          />
          <div className="mt-4">
            {/* 姓名 */}
            <h1 className="text-xl sm:text-3xl font-bold mb-2">{name}</h1>
            {/* 職業 */}
            <h2 className="text-sm sm:text-3xl mb-8">{title}</h2>

            {/* 打字動畫 */}
            {typeAnimation && (
              <div className="text-2xs mb-8">
                <span>{typeAnimation.sentenceHead} </span>
                <ReactTyped
                  strings={typeAnimation.sentences}
                  typeSpeed={100}
                  backSpeed={50}
                  backDelay={1300}
                  loop
                />
              </div>
            )}

            {/* 聯絡方式 */}
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={`tel:${sharedInfo.phone}`}
                className="flex items-center gap-2"
              >
                <FaPhoneAlt className="text-sm" />
                {sharedInfo.phone}
              </a>
              <a
                href={`mailto:${sharedInfo.email}`}
                className="flex items-center gap-2"
              >
                <MdEmail className="text-sm" />
                {sharedInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 自我介紹 */}
      {bio && (
        <section className="text-xs sm:text-base text-justify indent-4">
          {bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      )}

      {/* 關注我 */}
      <section className="flex items-start justify-start text-2xl gap-2 pt-16 w-full">
        <h3 className="text-xs mr-4">Follow me:</h3>
        <a
          href={sharedInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="flex items-center gap-2 mr-2"
        >
          <FaLinkedin />
        </a>
        <a
          href={sharedInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="flex items-center gap-2"
        >
          <FaGithub />
        </a>
      </section>
    </div>
  );
};

export default Home;
