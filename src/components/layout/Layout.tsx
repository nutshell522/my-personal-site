import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PiBriefcaseLight } from 'react-icons/pi';
import { GoComment } from 'react-icons/go';
import { HiOutlineLightBulb } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// import Sidebar from './Sidebar';
import Header from './Header';
import BottomNav from './BottomNav';

/**
 * 主頁面佈局
 * @param children 子元件內容
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation('ui'); // 使用 i18n 的翻譯功能
  const location = useLocation(); // 取得當前路由位址
  const mainRef = useRef<HTMLDivElement>(null); // 參考主內容區域

  const SMALL_SCREEN_HEADER_HEIGHT = 46; // 小視窗 Header 高度
  const LARGE_SCREEN_HEADER_HEIGHT = 64; // 大視窗 Header 高度
  const BOTTOM_NAV_HEIGHT = 56; // BottomNav 固定高度
  const SM_BREAKPOINT = 640; // Tailwind CSS 的 sm 尺寸像素值

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight); // 紀錄視口高度
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < SM_BREAKPOINT
  ); // 是否為小螢幕
  const [isRefreshing, setIsRefreshing] = useState(false); // 下拉刷新狀態
  const [touchStartY, setTouchStartY] = useState<number | null>(null); // 初始觸控點
  const [pullDistance, setPullDistance] = useState(0); // 下拉距離

  /**
   * 監聽視口高度變化
   * ? 筆記: iOS Safari 和 Chrome 的 UI 會動態調整，導致 `window.innerHeight` 變化，
   * 因此需要動態更新視口高度來避免顯示問題。
   */
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setIsSmallScreen(window.innerWidth < SM_BREAKPOINT);
    };
    window.addEventListener('resize', handleResize);

    // 清除監聽器
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 動態計算 Header 高度
  const headerHeight = isSmallScreen
    ? SMALL_SCREEN_HEADER_HEIGHT
    : LARGE_SCREEN_HEADER_HEIGHT;

  // 計算主內容高度
  const mainContentHeight = isSmallScreen
    ? viewportHeight - headerHeight - BOTTOM_NAV_HEIGHT
    : viewportHeight - headerHeight;

  // 定義導航項目
  const navItems = useMemo(
    () => [
      { path: '/about', label: t('navbarUI.about'), Icon: PiBriefcaseLight },
      {
        path: '/projects',
        label: t('navbarUI.projects'),
        Icon: HiOutlineLightBulb,
      },
      { path: '/contact', label: t('navbarUI.contact'), Icon: GoComment },
    ],
    [t]
  );

  // 定義導航順序，用於計算動畫方向
  const navOrder = useMemo(() => navItems.map((item) => item.path), [navItems]);
  const [currentIndex, setCurrentIndex] = useState(
    navOrder.indexOf(location.pathname)
  );

  /**
   * 路由變更時，重置主內容卷軸位置
   * ? 筆記: 當使用者切換頁面時，應該將 `main` 卷軸重置到頂部，提升使用體驗。
   */
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  /**
   * 更新當前路由索引
   * ? 筆記: 需要同步當前路由的索引來計算滑動動畫方向。
   */
  useEffect(() => {
    setCurrentIndex(navOrder.indexOf(location.pathname));
  }, [location.pathname, navOrder]);

  /**
   * 處理下拉開始事件
   */
  const handleTouchStart = (e: React.TouchEvent) => {
    if (mainRef.current?.scrollTop === 0) {
      setTouchStartY(e.touches[0].clientY); // 設置初始觸控點
    }
  };

  /**
   * 處理下拉移動事件
   */
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY !== null) {
      const currentY = e.touches[0].clientY;
      const distance = currentY - touchStartY;

      // 設定下拉距離
      if (distance > 0) {
        setPullDistance(distance);
      }
    }
  };

  /**
   * 處理下拉結束事件
   * 若下拉超過 50px，觸發刷新邏輯
   */
  const handleTouchEnd = async () => {
    if (pullDistance > 50) {
      setIsRefreshing(true);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // 模擬刷新延遲
      setIsRefreshing(false);
    }
    setTouchStartY(null); // 重置觸控點
    setPullDistance(0); // 重置下拉距離
  };

  return (
    <>
      {/*  捨棄版本，nav改放header */}
      {/* 側邊導航 (桌面/平板版) */}
      {/* <Sidebar navItems={navItems} /> */}

      {/* 主頁面佈局 */}
      <div
        className="w-full flex flex-col"
        style={{ height: `${viewportHeight}px` }} // 動態設置高度
      >
        {/* 頁首 */}
        <Header height={headerHeight} navItems={navItems} />

        {/* 主內容區域 */}
        <main
          className="w-full overflow-y-auto text-main-lightText dark:text-main-darkText relative"
          style={{ height: `${mainContentHeight}px` }}
          ref={mainRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* 下拉提示區域 */}
          <div
            className="absolute top-0 left-0 w-full text-center text-sm text-gray-500 dark:text-gray-400 transition-all duration-300"
            style={{
              height: `${isRefreshing ? 50 : pullDistance}px`,
              lineHeight: `${isRefreshing ? 50 : pullDistance}px`,
            }}
          >
            {isRefreshing
              ? 'Refreshing...' // 顯示刷新狀態
              : pullDistance > 0 && 'Pull to refresh'}{' '}
            {/* 提示下拉 */}
          </div>

          {/* 子元件內容動畫顯示 */}
          <motion.div
            key={location.pathname}
            initial={{
              opacity: 0,
              x:
                navOrder.indexOf(location.pathname) > currentIndex ? 100 : -100,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:w-full sm:h-full"
          >
            {children}
          </motion.div>
        </main>

        {/* 底部導航 (手機版) */}
        <BottomNav navItems={navItems} height={BOTTOM_NAV_HEIGHT} />

        {/* Safe area 適配區域 */}
        <div className="pb-safe" />
      </div>
    </>
  );
};

export default Layout;
