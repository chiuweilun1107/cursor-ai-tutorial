/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多環境變數...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 