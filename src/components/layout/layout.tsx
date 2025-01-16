import React from 'react';
import Nav from './Nav';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Nav />
      <div
        className={`w-full h-screen bg-gray-200 dark:bg-gray-900 transition-all duration-300 overflow-hidden`}
      >
        <Header />
        <main
          className={`w-full h-full transition-all duration-300 overflow-y-scroll`}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
