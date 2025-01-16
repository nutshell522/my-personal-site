import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/base.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { DarkModeProvider } from './context/DarkModeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>
);
