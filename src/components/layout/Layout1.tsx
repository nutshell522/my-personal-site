import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PiBriefcaseThin } from 'react-icons/pi';
import { BsPerson } from 'react-icons/bs';
import { GoComment } from 'react-icons/go';
import { HiOutlineLightBulb } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';
import BottomNav from './BottomNav';

/**
 * 主頁面佈局元件
 * @param children 子元件內容
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation('ui');
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  // 定義導航項目
  const navItems = useMemo(
    () => [
      { path: '/', label: t('navbarUI.home'), Icon: BsPerson },
      { path: '/about', label: t('navbarUI.about'), Icon: PiBriefcaseThin },
      {
        path: '/projects',
        label: t('navbarUI.projects'),
        Icon: HiOutlineLightBulb,
      },
      { path: '/contact', label: t('navbarUI.contact'), Icon: GoComment },
    ],
    [t]
  );

  // 定義導航順序
  const navOrder = useMemo(() => navItems.map((item) => item.path), [navItems]);
  const [currentIndex, setCurrentIndex] = useState(
    navOrder.indexOf(location.pathname)
  );

  /**
   * 路由變更時，重置主內容卷軸位置
   */
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  /**
   * 根據路由變化計算動畫方向
   * @param newIndex 新的路由索引
   * @returns 動畫方向 (1: 往右, -1: 往左)
   */
  const getAnimationDirection = (newIndex: number) =>
    newIndex > currentIndex ? 1 : -1;

  // 更新目前路由索引
  useEffect(() => {
    setCurrentIndex(navOrder.indexOf(location.pathname));
  }, [location.pathname, navOrder]);

  return (
    <>
      {/* 側邊導航 桌面/平板版畫面 */}
      <Sidebar navItems={navItems} />

      <div className="w-full h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300 overflow-hidden flex flex-col">
        {/* 頁首 */}
        <Header />

        {/* 主內容區域 */}
        <main className="w-full h-full overflow-y-scroll" ref={mainRef}>
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

        {/* 底部導航 手機版畫面 */}
        <BottomNav navItems={navItems.slice(1)} />
      </div>
    </>
  );
};

export default Layout;
