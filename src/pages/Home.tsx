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
    <div className="flex flex-col sm:flex-row items-center justify-center text-gray-800 dark:text-gray-200 mx-auto px-8 sm:px-0 min-w-60 h-full">
      {/* 大頭貼區域 */}
      <AvatarSection avatarUrl={avatarUrl} />

      {/* 個人資料區域 */}
      <PersonalInfo
        name={name}
        title={title}
        typeAnimation={typeAnimation}
        bioParagraphs={bioParagraphs}
      />
    </div>
  );
};

/**
 * 大頭貼區域
 */
const AvatarSection: React.FC<{ avatarUrl: string }> = ({ avatarUrl }) => (
  <div className="w-10/12 max-w-80 sm:w-80 h-80 sm:h-full relative flex justify-center items-center sm:ml-0 lg:ml-52">
    <img
      src={avatarUrl}
      alt="Avatar"
      className="w-10/12 max-w-80 sm:w-80 rounded-full sm:rounded-none sm:h-full sm:top-0 sm:left-40 sm:object-cover"
    />
    {/* 遮罩 (僅桌面版顯示) */}
    <div className="hidden sm:block w-80 h-full opacity-30 bg-gray-400 dark:bg-slate-800 absolute top-0 left-0"></div>
  </div>
);

/**
 * 個人資料區域
 */
const PersonalInfo: React.FC<{
  name: string;
  title: string;
  typeAnimation: { sentenceHead: string; sentences: string[] };
  bioParagraphs: string[];
}> = ({ name, title, typeAnimation, bioParagraphs }) => (
  <div className="w-full flex flex-col items-center justify-center gap-4 mb-4 sm:gap-16 sm:px-16">
    <div className="mt-4 text-center sm:text-left">
      {/* 姓名與職業 */}
      <h1 className="text-3xl lg:text-5xl font-bold mb-2 sm:mb-6">{name}</h1>
      <h2 className="text-xl lg:text-2xl mb-4">{title}</h2>

      {/* 打字動畫 */}
      {typeAnimation && (
        <div className="text-sm lg:text-lg my-8">
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

      {/* 自我介紹 */}
      {bioParagraphs && (
        <section className="flex flex-col gap-3 text-base text-justify indent-4 my-7">
          {bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      )}

      {/* 關注我 */}
      <section className="flex items-start text-2xl gap-3 mt-20 sm:mt-10">
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
  </div>
);

export default Home;
