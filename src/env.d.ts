/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string; // 基礎路徑
  readonly VITE_EMAILJS_SERVICE_ID: string; // EmailJS 服務 ID
  readonly VITE_EMAILJS_TEMPLATE_ID: string; // EmailJS 模板 ID
  readonly VITE_EMAILJS_USER_ID: string; // EmailJS 使用者 ID
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
