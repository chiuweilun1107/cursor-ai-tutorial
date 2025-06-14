# 🏗️ CursorLearning 專案架構說明

## 📁 專案目錄結構

```
CursorLearning/
├── .cursor/                          # Cursor IDE 配置
│   └── rules/                       # AI 操作規範文件
│       ├── project-architecture-standards.mdc    # 專案架構規範
│       ├── owasp-security-standards.mdc          # OWASP 安全規範
│       └── path-resource-standards.mdc           # 路徑資源規範
├── src/                             # 主要源代碼
│   ├── components/                  # React 組件
│   │   ├── ui/                     # 基礎 UI 組件
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   └── index.ts            # 統一導出
│   │   ├── layout/                 # 佈局組件
│   │   │   ├── Layout.tsx
│   │   │   ├── HeroCarousel.tsx
│   │   │   ├── NewHeroSection.tsx
│   │   │   └── index.ts            # 統一導出
│   │   ├── course/                 # 課程相關組件
│   │   └── common/                 # 通用組件
│   ├── pages/                      # 頁面組件
│   │   ├── Home.tsx
│   │   ├── Courses.tsx
│   │   ├── CourseDetail.tsx
│   │   ├── LessonViewer.tsx
│   │   ├── MCPCourse.tsx
│   │   ├── UnderDevelopment.tsx
│   │   ├── Tips.tsx
│   │   ├── FAQ.tsx
│   │   ├── lessons/                # 課程子頁面
│   │   └── profile/                # 用戶檔案頁面
│   ├── data/                       # 數據文件
│   │   ├── courses/                # 課程基本信息
│   │   │   ├── all-courses.json
│   │   │   └── stage1-course.json
│   │   ├── lessons/                # 課程內容
│   │   │   ├── stage1-lessons.json
│   │   │   ├── stage1-lessons-backup.json
│   │   │   └── lesson-templates/   # 課程模板
│   │   ├── progress/               # 學習進度
│   │   └── static/                 # 靜態配置
│   ├── assets/                     # 靜態資源
│   │   ├── images/                 # 圖片資源
│   │   │   ├── heroes/            # 輪播圖片
│   │   │   │   └── hero-ai-tools.jpg
│   │   │   ├── courses/           # 課程封面
│   │   │   ├── ui/                # UI 裝飾圖片
│   │   │   └── avatars/           # 用戶頭像
│   │   └── icons/                  # 圖標資源
│   │       ├── brands/
│   │       ├── social/
│   │       └── ui/
│   ├── utils/                      # 工具函數
│   │   ├── pathManager.ts          # 路徑管理器
│   │   └── imageAssets.ts          # 圖片資源管理
│   ├── hooks/                      # 自定義 React Hooks
│   ├── stores/                     # 狀態管理
│   ├── types/                      # TypeScript 類型定義
│   ├── App.tsx                     # 主應用組件
│   └── main.tsx                    # 應用入口點
├── public/                         # 公共靜態資源
├── validate-paths.sh               # 路徑驗證腳本
├── package.json                    # 項目配置
├── vite.config.ts                  # Vite 配置
├── tsconfig.json                   # TypeScript 配置
├── tailwind.config.js              # Tailwind CSS 配置
└── README.md                       # 項目說明
```

## 🎯 架構設計原則

### **1. 關注點分離**
- **UI組件** (`components/ui/`): 可重用的基礎UI組件
- **佈局組件** (`components/layout/`): 頁面佈局相關組件
- **業務組件** (`components/course/`): 課程業務邏輯組件
- **頁面組件** (`pages/`): 路由頁面組件

### **2. 資源管理**
- **圖片分類**: 按用途分類到不同子目錄
- **數據分離**: 課程、課程內容、進度數據分別管理
- **路徑統一**: 使用 `pathManager.ts` 統一管理所有路徑

### **3. 可維護性**
- **統一導出**: 每個目錄都有 `index.ts` 統一導出
- **類型安全**: 完整的 TypeScript 類型定義
- **路徑驗證**: 自動化腳本驗證文件路徑正確性

## 🔧 開發規範

### **組件命名**
- React 組件: `PascalCase.tsx` (例: `HeroCarousel.tsx`)
- 工具函數: `camelCase.ts` (例: `pathManager.ts`)
- 數據文件: `kebab-case.json` (例: `all-courses.json`)

### **導入規範**
```typescript
// ✅ 推薦：使用統一導出
import { Button, Card, Modal } from '../components/ui'
import { Layout, HeroCarousel } from '../components/layout'

// ❌ 避免：直接導入個別文件
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
```

### **路徑使用**
```typescript
// ✅ 推薦：使用路徑管理器
import { fileMap } from '../utils/pathManager'
const coursePath = fileMap.allCourses

// ❌ 避免：硬編碼路徑
const coursePath = 'src/data/courses/all-courses.json'
```

## 🚀 開發工作流程

### **1. 新增組件**
1. 確定組件分類 (ui/layout/course/common)
2. 在對應目錄創建組件文件
3. 更新該目錄的 `index.ts` 文件
4. 在 `pathManager.ts` 中註冊路徑

### **2. 新增圖片資源**
1. 確定圖片用途分類
2. 使用規範命名格式
3. 放置到對應的子目錄
4. 在 `imageAssets.ts` 中註冊

### **3. 修改數據文件**
1. 確認文件路徑是否在 `fileMap` 中
2. 創建備份文件 (如需要)
3. 執行修改操作
4. 運行 `validate-paths.sh` 驗證

## 📋 驗證工具

### **路徑驗證腳本**
```bash
# 執行完整的路徑驗證
bash validate-paths.sh
```

### **建構驗證**
```bash
# 確保所有導入路徑正確
npm run build
```

## 🔄 遷移指南

如果您有舊的文件需要遷移到新架構：

1. **檢查文件類型** - 確定應該放在哪個目錄
2. **移動文件** - 使用正確的命名格式
3. **更新導入** - 修復所有導入該文件的地方
4. **註冊路徑** - 在相應的管理器中註冊
5. **測試驗證** - 執行驗證腳本確認無誤

## 📚 相關文檔

- [專案架構規範](.cursor/rules/project-architecture-standards.mdc)
- [OWASP安全規範](.cursor/rules/owasp-security-standards.mdc)  
- [路徑資源管理規範](.cursor/rules/path-resource-standards.mdc)

---

**遵循這個架構可以確保專案的可維護性、可擴展性和團隊協作效率。** 