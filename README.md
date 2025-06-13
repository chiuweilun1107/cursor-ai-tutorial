# Cursor Learning - AI程式編輯器教學平台

一個專為學習Cursor AI程式編輯器而設計的互動式教學平台，提供從基礎到進階的完整學習路徑。

## 🚀 專案特色

- **🎠 升級版輪播系統**：5頁面輪播 + 懸停暫停 + 優化布局
- **📚 結構化課程**：從初級到高級的完整學習路徑
- **🎯 互動式學習**：實作專案和進度追蹤
- **💡 實用技巧**：AI提示詞最佳實務和快捷鍵指南
- **📱 響應式設計**：支援桌面、平板和手機
- **🎨 現代化UI**：使用Tailwind CSS的美觀介面
- **♿ 無障礙設計**：支援鍵盤導航和螢幕閱讀器

## 🛠 技術棧

- **前端框架**：React 18 + TypeScript
- **建構工具**：Vite
- **樣式**：Tailwind CSS
- **路由**：React Router DOM
- **圖標**：Lucide React
- **開發工具**：ESLint + TypeScript

## 📦 安裝與啟動

### 前置需求

- Node.js 16.0 或更高版本
- npm 或 yarn 套件管理器

### 安裝步驟

1. **克隆專案** (如果是從git倉庫)
   ```bash
   git clone <repository-url>
   cd CursorLearning
   ```

2. **安裝依賴**
   ```bash
   npm install
   # 或
   yarn install
   ```

3. **啟動開發伺服器**
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

4. **開啟瀏覽器**
   
   訪問 [http://localhost:3000](http://localhost:3000)

## 🎮 輪播功能使用指南

### 鍵盤操作
- `←` / `→` 切換頁面
- `空格鍵` 暫停/恢復自動播放
- `Esc` 停止自動播放

### 滑鼠操作
- **懸停暫停**：滑鼠移到輪播區域自動暫停
- **點擊導航**：使用左右箭頭按鈕
- **直接跳轉**：點擊底部圓點導航
- **播放控制**：點擊右上角播放/暫停按鈕

詳細功能說明請參閱 [CAROUSEL_FEATURES.md](CAROUSEL_FEATURES.md)

### 其他指令

```bash
# 建置生產版本
npm run build

# 預覽生產版本
npm run preview

# 型別檢查
npm run type-check
```

## 📁 專案結構

```
CursorLearning/
├── public/                 # 靜態資源
├── src/
│   ├── components/         # 可重用組件
│   │   ├── Layout.tsx     # 主要布局組件
│   │   ├── HeroCarousel.tsx # 首頁輪播組件 🆕
│   │   ├── Badge.tsx      # 徽章組件
│   │   ├── ProgressBar.tsx # 進度條組件
│   │   └── LoadingSpinner.tsx # 載入動畫組件
│   ├── pages/             # 頁面組件
│   │   ├── Home.tsx       # 首頁
│   │   ├── Courses.tsx    # 課程總覽
│   │   ├── BeginnerCourse.tsx # 初級課程
│   │   ├── IntermediateCourse.tsx # 中級課程
│   │   ├── AdvancedCourse.tsx # 高級課程
│   │   ├── Tips.tsx       # 實用技巧
│   │   └── FAQ.tsx        # 常見問題
│   ├── types/             # TypeScript 型別定義
│   │   └── index.ts       # 主要型別定義
│   ├── data/              # 靜態資料
│   │   └── courses.ts     # 課程資料
│   ├── utils/             # 工具函數
│   │   └── index.ts       # 通用工具函數
│   ├── App.tsx            # 主應用組件
│   ├── main.tsx           # 應用入口點
│   └── index.css          # 全域樣式
├── index.html             # HTML 模板
├── package.json           # 專案配置
├── tsconfig.json          # TypeScript 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── vite.config.ts         # Vite 配置
└── README.md              # 專案說明
```

## 🎯 功能特色

### 🎠 升級版輪播系統
- **5頁面內容**：Cursor AI介紹、效率提升、未來技能、完整課程、學習社群
- **智能暫停**：滑鼠懸停自動暫停，離開後自動恢復
- **多元控制**：支援滑鼠、鍵盤、觸控操作
- **視覺指示**：進度條、點狀導航、暫停提示
- **無障礙支援**：完整的鍵盤導航和螢幕閱讀器支援

### 📖 課程系統
- **三階段學習路徑**：初級、中級、高級
- **進度追蹤**：即時顯示學習進度
- **實作專案**：每個階段都有對應的實作練習

### 💡 學習資源
- **實用技巧頁面**：快捷鍵和最佳實務
- **AI提示詞範例**：有效的AI對話範例
- **常見問題解答**：解決學習過程中的疑問

### 🎨 用戶體驗
- **響應式設計**：在各種裝置上都有良好體驗
- **直觀導航**：清楚的課程結構和進度指示
- **現代化介面**：簡潔美觀的設計風格
- **流暢動畫**：平滑的轉場和微互動效果

## 🚧 開發計劃

### 已完成 ✅
- [x] 基礎專案架構
- [x] 響應式布局設計
- [x] 升級版輪播系統（5頁面 + 懸停暫停 + 優化布局）🆕
- [x] 首頁和課程總覽
- [x] 初級課程頁面
- [x] 實用技巧和FAQ頁面
- [x] 基礎組件庫
- [x] 無障礙功能支援

### 進行中 🔄
- [ ] 中級和高級課程內容
- [ ] 用戶進度本地存儲
- [ ] 更多互動功能

### 規劃中 📋
- [ ] 影片播放功能
- [ ] 代碼編輯器整合
- [ ] 用戶帳戶系統
- [ ] 社群討論功能
- [ ] 成就系統

## 🤝 貢獻指南

歡迎貢獻！請遵循以下步驟：

1. Fork 專案
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📝 授權

此專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案

## 📞 聯繫方式

- 專案連結：[GitHub Repository](#)
- 問題回報：[GitHub Issues](#)
- 聯繫郵箱：[your-email@example.com](mailto:your-email@example.com)

## 🙏 致謝

- [Cursor](https://cursor.com) - 優秀的AI程式編輯器
- [React](https://reactjs.org/) - 前端框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Lucide](https://lucide.dev/) - 圖標庫
- [Vite](https://vitejs.dev/) - 建構工具

---

**讓AI成為你的程式設計夥伴！** 🚀
