import Layout from './components/layout/Layout';
import AppRoutes from './AppRoutes';
import React, { useEffect } from 'react';
import { useDarkMode } from './context/DarkModeContext';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    // ? 筆記: 修正重定向路徑問題，確保不會多次加上 /resume
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');

    // 移除多餘的 /resume，確保路徑正確
    if (redirectPath) {
      const cleanPath = redirectPath.replace('/resume', '');
      navigate(cleanPath);
    }
  }, [navigate]);

  return (
    <div className={`app w-screen h-screen flex ${isDarkMode ? 'dark' : ''}`}>
      <div className="w-full h-full bg-main-lightBg dark:bg-main-darkBg flex">
        <Layout>
          <AppRoutes />
        </Layout>
      </div>
    </div>
  );
};

export default App;
