import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from 'react-typed';
import sharedInfo from '../../public/datas/sharedInfo.json';
import { FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import SocialLink from '../components/home/SocialLink';
import ContactInfo from '../components/home/ContactInfo';

/**
 * 首頁
 */
const Home: React.FC = () => {
  const { t } = useTranslation('home');
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // 動態資料
  const avatarUrl = `${baseUrl}assets/images/personal/${sharedInfo.avatar}`;
  const name = t('name') as string;
  const title = t('title') as string;
  const typeAnimation = t('typeAnimation', { returnObjects: true }) as {
    sentenceHead: string;
    sentences: string[];
  };
  const bioParagraphs = t('bio', { returnObjects: true }) as string[];

  // 預設載入頁面頂部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200 mx-auto px-8 py-8 sm:px-14 min-w-60">
      {/* 個人資料區域 */}
      <section className="w-full mb-11">
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          {/* 大頭貼 */}
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-10/12 sm:w-1/4 sm:max-w-40 rounded-full"
          />
          <div className="mt-4 text-center sm:text-left">
            {/* 姓名 */}
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            {/* 職業 */}
            <h2 className="text-xl sm:text-3xl mb-4">{title}</h2>

            {/* 打字動畫 */}
            {typeAnimation && (
              <div className="text-md my-8">
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
            <div className="flex flex-col gap-4 text-sm">
              <ContactInfo
                href={`tel:${sharedInfo.phone}`}
                icon={<FaPhoneAlt className="text-xl" />}
                text={sharedInfo.phone}
                ariaLabel="Phone Number"
              />
              <ContactInfo
                href={`mailto:${sharedInfo.email}`}
                icon={<MdEmail className="text-xl" />}
                text={sharedInfo.email}
                ariaLabel="Email Address"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 自我介紹區域 */}
      {bioParagraphs && (
        <section className="flex flex-col gap-3 text-base text-justify indent-4 my-7">
          {bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      )}

      {/* 關注我 */}
      <section className="flex items-start text-2xl gap-3 mt-20">
        <h3 className="text-base mr-4">Follow me:</h3>
        <SocialLink
          href={sharedInfo.linkedin}
          icon={<FaLinkedin />}
          ariaLabel="LinkedIn Profile"
        />
        <SocialLink
          href={sharedInfo.github}
          icon={<FaGithub />}
          ariaLabel="GitHub Profile"
        />
      </section>
    </div>
  );
};

export default Home;
