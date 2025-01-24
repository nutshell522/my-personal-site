import Layout from './components/layout/Layout';
import AppRoutes from './AppRoutes';
import React from 'react';
import { useDarkMode } from './context/DarkModeContext';

const App: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`app w-screen h-screen flex ${isDarkMode ? 'dark' : ''}`}>
      <div className="w-full h-full bg-main-lightBg dark:bg-main-darkBg">
        <Layout>
          <AppRoutes />
        </Layout>
      </div>
    </div>
  );
};

export default App;
