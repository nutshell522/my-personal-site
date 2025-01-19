import React, { useState, useEffect, useMemo } from 'react';
import { PiBriefcaseThin } from 'react-icons/pi';
import { BsPerson } from 'react-icons/bs';
import { GoComment } from 'react-icons/go';
import { HiOutlineLightBulb } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from './Sidebar';
import Header from './Header';
import BottomNav from './BottomNav';
import { motion } from 'framer-motion';

/**
 * 主頁面佈局
 * @param children 子元件
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation('ui');
  const location = useLocation();

  // 導航順序
  const navOrder = useMemo(() => ['/', '/about', '/projects', '/contact'], []);
  const [currentIndex, setCurrentIndex] = useState(
    navOrder.indexOf(location.pathname)
  );

  // 動態計算動畫方向
  const getAnimationDirection = (newIndex: number) =>
    newIndex > currentIndex ? 1 : -1;

  useEffect(() => {
    setCurrentIndex(navOrder.indexOf(location.pathname));
  }, [location.pathname, navOrder]);

  return (
    <>
      <Sidebar
        navItems={[
          { path: '/', label: t('navbarUI.home'), Icon: BsPerson },
          { path: '/about', label: t('navbarUI.about'), Icon: PiBriefcaseThin },
          {
            path: '/projects',
            label: t('navbarUI.projects'),
            Icon: HiOutlineLightBulb,
          },
          { path: '/contact', label: t('navbarUI.contact'), Icon: GoComment },
        ]}
      />
      <div className="w-full h-screen bg-gray-200 dark:bg-gray-900 transition-all duration-300 overflow-hidden flex flex-col">
        <Header />
        <main className="w-full h-full overflow-y-scroll">
          <motion.div
            key={location.pathname}
            initial={{
              opacity: 0,
              x:
                getAnimationDirection(navOrder.indexOf(location.pathname)) *
                100,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>

        <BottomNav
          navItems={[
            {
              path: '/about',
              label: t('navbarUI.about'),
              Icon: PiBriefcaseThin,
            },
            {
              path: '/projects',
              label: t('navbarUI.projects'),
              Icon: HiOutlineLightBulb,
            },
            { path: '/contact', label: t('navbarUI.contact'), Icon: GoComment },
          ]}
        />
      </div>
    </>
  );
};

export default Layout;
