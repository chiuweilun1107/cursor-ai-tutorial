#!/bin/bash

# Cursor Learning 專案設定腳本
echo "🚀 開始設定 Cursor Learning 專案..."

# 檢查 Node.js 是否安裝
if ! command -v node &> /dev/null; then
    echo "❌ 錯誤：請先安裝 Node.js (https://nodejs.org/)"
    exit 1
fi

echo "✅ 找到 Node.js 版本: $(node --version)"

# 檢查 npm 是否安裝
if ! command -v npm &> /dev/null; then
    echo "❌ 錯誤：請先安裝 npm"
    exit 1
fi

echo "✅ 找到 npm 版本: $(npm --version)"

# 安裝依賴
echo "📦 安裝專案依賴..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ 依賴安裝成功"
else
    echo "❌ 依賴安裝失敗"
    exit 1
fi

# 複製環境變數檔案
if [ ! -f .env.local ]; then
    echo "📄 建立環境變數檔案..."
    cp .env.example .env.local
    echo "✅ 已建立 .env.local 檔案"
else
    echo "ℹ️  .env.local 檔案已存在"
fi

echo ""
echo "🎉 專案設定完成！"
echo ""
echo "接下來可以執行以下指令："
echo "  npm run dev     # 啟動開發伺服器"
echo "  npm run build   # 建置生產版本"
echo "  npm run preview # 預覽生產版本"
echo ""
echo "開發伺服器將在 http://localhost:3000 啟動"
echo ""
echo "祝您學習愉快！ 🚀"
