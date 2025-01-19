// #region ui
// navbar
export interface NavbarUI {
  home: string;
  about: string;
  projects: string;
  contact: string;
}

// 關於我
export interface AboutUI {
  title: string;
  experience: { title: string }; // 經歷
  skills: { title: string }; // 技能
}

// 專案
export interface ProjectsUI {
  title: string;
  technologiesTitle: string; // 使用技術標題
  tasksTitle: string; // 任務標題
  buttons: { demo: string; source: string; github: string }; // 按鈕文字
}

// 聯絡資訊
export interface ContactUI {
  title: string;
}
// #endregion

// #region 關於我

// 工作經歷項目
export interface ExperienceItem {
  company: string; // 公司名稱
  position: string; // 職位名稱
  date: string; // 任職期間
  tasks: Task[]; // 該工作中的任務
}

// 任務
export interface Task {
  name: string; // 專案名稱
  descriptions: string[]; // 專案相關描述
}

// 技能
export interface Skills {
  title: string; // 技能標題
  categories: SkillCategory[]; // 多個技能分類
}

// 技能分類
export interface SkillCategory {
  category: string; // 技能類別名稱
  items: string[]; // 該類別的技能列表
}

// #endregion

// #region 專案/作品集
// 整體專案資料
export interface ProjectsUI {
  title: string; // 專案總標題
  items: ProjectItem[]; // 多個專案項目
  demoButton: string; // Demo 按鈕文字
  sourceButton: string; // 原始碼按鈕文字
  githubButton: string; // GitHub 按鈕文字
}

// 單張圖片
export interface ProjectImage {
  src: string; // 圖片路徑
  alt: string; // 圖片描述
}

// 單個專案
export interface ProjectItem {
  name: string; // 專案名稱
  images: ProjectImage[]; // 專案相關圖片
  description: string; // 專案描述
  technologies: string[]; // 使用技術列表
  tasks: string[]; // 專案任務描述
  demo: string | null; // 專案 Demo 連結
  source: string | null; // 專案原始碼連結
  github: string | null; // 專案 GitHub 連結
}

// #endregion
