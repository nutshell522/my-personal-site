# **我的履歷網站**

## **專案簡介**

這是一個基於 React 和 TypeScript 構建的個人履歷網站，結合 Tailwind CSS、Framer Motion 提升使用者體驗，展示了個人資訊。

此專案不僅是個人履歷的展示平台，也是一個技術學習與實踐的示範案例，包含了多語系支持與深色模式切換等功能。

---

## **技術棧**

- **前端框架**：React + TypeScript
- **樣式**：Tailwind CSS、SCSS
- **動畫**：Framer Motion
- **路由管理**：React Router DOM
- **部署**：GitHub Pages

---

## **資料夾結構**

```
resume/
├── public/                  # 公共資源
│   ├── datas/               # JSON 文件（個人資料維護）
│   ├── locales/             # 多語系文件
│   └── assets/              # 靜態資源與樣式 (圖片)
├── src/
│   ├── assets/              # 靜態資源
│   │   ├── styles/          # SCSS 樣式文件
│   ├── components/          # 可重用元件
│   ├── hooks/               # 自訂 Hook
│   ├── pages/               # 頁面元件
│   │    └── types/          # 頁面所需的型別定義
│   ├── animations/          # 動畫配置
│   ├── App.tsx              # 主應用入口
│   ├── AppRoute.tsx         # 路由配置
│   ├── i18n.ts              # 多語系初始化
│   └── main.tsx             # 應用程式入口
├── .env                     # 環境變數
├── postcss.config.cjs       # PostCSS 配置
├── tailwind.config.js       # Tailwind CSS 配置
├── tsconfig.json            # TypeScript 配置
├── package.json             # 專案依賴與腳本
└── vite.config.ts           # Vite 配置
```

---

## **使用方法**

### **1. 複製專案**

```bash
git clone https://github.com/nutshell522/resume.git
cd resume
```

### **2. 安裝依賴**

```bash
npm install
```

### **3. 啟動開發伺服器**

```bash
npm run dev
```

### **4. 編譯與部署**

- **編譯**：
  ```bash
  npm run build
  ```
- **部署至 GitHub Pages**：
  ```bash
  npm run deploy
  ```

---

## **可維護內容**

- **UI介面**：`public/locales/{{lang}}/ui.json`
- **首頁**：`public/locales/{{lang}}/home.json`
- **關於我**：`public/locales/{{lang}}//about.json`
- **作品集**：`public/locales/{{lang}}//projects.json`
- **聯絡方式**：`public/datas/sharedInfo.json`

  更新這些 JSON 文件即可輕鬆維護網站內容。

---

## **開發者**

- **姓名**：殷易暄 / Ted Yin
- **聯絡方式**：jjboy830227@gmail.com
- **GitHub**：https://github.com/nutshell522

---
