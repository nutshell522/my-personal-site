# **我的履歷網站**

## **專案簡介**

基於 React、TypeScript、Tailwind CSS、SCSS 和 Framer Motion 構建的個人履歷網站。網站展示了個人資料、關於我、作品集及聯絡方式。

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
my-resume/
├── public/                  # 公共資源
│   └── index.html
├── src/
│   ├── assets/              # 靜態資源與樣式
│   │   ├── data/            # JSON 文件（個人資料、作品集等）
│   │   └── styles/          # SCSS 樣式文件
│   │   └── images/          # 圖片
│   ├── components/          # 可重用的元件
│   ├── hooks/               # 自訂 Hook
│   ├── pages/               # 頁面元件
│   ├── animations/          # 動畫配置
│   ├── App.tsx              # 主應用入口
│   └── index.tsx            # 應用程式入口
├── postcss.config.cjs       # PostCSS 配置
├── tailwind.config.js       # Tailwind CSS 配置
├── tsconfig.json            # TypeScript 配置
└── package.json             # 專案依賴與腳本
```

---

## **使用方法**

### **1. 複製專案**

```bash
git clone https://github.com/nutshell522/my-resume.git
cd my-resume
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

- **個人資料**：`src/assets/data/profile.json`
- **關於我**：`src/assets/data/about.json`
- **作品集**：`src/assets/data/projects.json`

更新這些 JSON 文件即可輕鬆維護網站內容。

---

## **開發者**

- **姓名**：殷易暄
- **聯絡方式**：jjboy830227@gmail.com
- **GitHub**：https://github.com/nutshell522

---
