import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';

// 讀取 .env 檔案中的環境變數
dotenv.config();

export default defineConfig(() => {
  // 獲取環境變數中的 base 路徑，預設為 '/'
  const base = process.env.VITE_BASE_URL || '/';

  return {
    // 配置 Vite 插件，這裡加載 React 支援
    plugins: [react()],
    // 設定靜態資源的基礎路徑
    base: base,
    build: {
      rollupOptions: {
        input: {
          // 指定應用的入口文件
          main: './index.html',
        },
        output: {
          // 定義輸出的 JavaScript 文件命名格式
          entryFileNames: 'assets/[name]-[hash].js',
          // 定義分割塊的文件命名格式
          chunkFileNames: 'assets/[name]-[hash].js',
          // 定義靜態資源（如圖片、CSS）的文件命名格式
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
  };
});
