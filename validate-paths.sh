#!/bin/bash

# 路徑驗證腳本 - AI操作前的快速檢查工具
# 使用方法: bash validate-paths.sh

echo "🔍 開始檢查專案文件路徑..."
echo "=================================="

# 顏色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 檢查函數
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        return 0
    else
        echo -e "${RED}✗${NC} $1 ${RED}(不存在)${NC}"
        return 1
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
        return 0
    else
        echo -e "${RED}✗${NC} $1/ ${RED}(目錄不存在)${NC}"
        return 1
    fi
}

# 檢查計數器
total_checks=0
passed_checks=0

echo "📁 檢查目錄結構..."
echo "-------------------"

# 檢查主要目錄
directories=(
    "src"
    "src/components"
    "src/pages" 
    "src/data"
    "src/data/courses"
    "src/data/lessons"
    "src/assets"
    "src/utils"
    "src/types"
    "src/hooks"
    "src/stores"
)

for dir in "${directories[@]}"; do
    total_checks=$((total_checks + 1))
    if check_dir "$dir"; then
        passed_checks=$((passed_checks + 1))
    fi
done

echo ""
echo "📄 檢查關鍵文件..."
echo "-------------------"

# 檢查關鍵文件
files=(
    "src/data/courses/all-courses.json"
    "src/data/courses/stage1-course.json"
    "src/data/lessons/stage1-lessons.json"
    "src/data/lessons/stage1-lessons-backup.json"
    "src/components/HeroCarousel.tsx"
    "src/components/Layout.tsx"
    "src/pages/Home.tsx"
    "src/pages/Courses.tsx"
    "src/pages/CourseDetail.tsx"
    "src/pages/LessonViewer.tsx"
    "src/pages/MCPCourse.tsx"
    "src/utils/imageAssets.ts"
    "src/utils/pathManager.ts"
    "src/types/index.ts"
    "package.json"
    "vite.config.ts"
    "tailwind.config.js"
)

for file in "${files[@]}"; do
    total_checks=$((total_checks + 1))
    if check_file "$file"; then
        passed_checks=$((passed_checks + 1))
    fi
done

echo ""
echo "🖼️  檢查圖片資源..."
echo "-------------------"

# 檢查圖片相關
if [ -f "src/assets/ai-tools.jpg" ]; then
    echo -e "${GREEN}✓${NC} src/assets/ai-tools.jpg"
    passed_checks=$((passed_checks + 1))
else
    echo -e "${YELLOW}⚠${NC} src/assets/ai-tools.jpg ${YELLOW}(本地圖片未找到，可能使用網路圖片)${NC}"
fi
total_checks=$((total_checks + 1))

# 檢查 imageAssets.ts 是否存在常見的圖片配置
if [ -f "src/utils/imageAssets.ts" ]; then
    if grep -q "heroImages" "src/utils/imageAssets.ts"; then
        echo -e "${GREEN}✓${NC} imageAssets.ts 包含 heroImages 配置"
        passed_checks=$((passed_checks + 1))
    else
        echo -e "${RED}✗${NC} imageAssets.ts 缺少 heroImages 配置"
    fi
    total_checks=$((total_checks + 1))
    
    if grep -q "courseImages" "src/utils/imageAssets.ts"; then
        echo -e "${GREEN}✓${NC} imageAssets.ts 包含 courseImages 配置"
        passed_checks=$((passed_checks + 1))
    else
        echo -e "${RED}✗${NC} imageAssets.ts 缺少 courseImages 配置"
    fi
    total_checks=$((total_checks + 1))
fi

echo ""
echo "🔧 檢查配置文件..."
echo "-------------------"

# 檢查 package.json 中的重要依賴
if [ -f "package.json" ]; then
    if grep -q "react" "package.json"; then
        echo -e "${GREEN}✓${NC} React 依賴已配置"
        passed_checks=$((passed_checks + 1))
    else
        echo -e "${RED}✗${NC} React 依賴未找到"
    fi
    total_checks=$((total_checks + 1))
    
    if grep -q "typescript" "package.json"; then
        echo -e "${GREEN}✓${NC} TypeScript 依賴已配置"
        passed_checks=$((passed_checks + 1))
    else
        echo -e "${RED}✗${NC} TypeScript 依賴未找到"
    fi
    total_checks=$((total_checks + 1))
fi

echo ""
echo "📊 檢查結果統計"
echo "=================================="
echo "總檢查項目: $total_checks"
echo "通過檢查: $passed_checks"
echo "失敗檢查: $((total_checks - passed_checks))"

if [ $passed_checks -eq $total_checks ]; then
    echo -e "${GREEN}🎉 所有檢查都通過！專案結構完整。${NC}"
    exit 0
elif [ $passed_checks -gt $((total_checks * 3 / 4)) ]; then
    echo -e "${YELLOW}⚠️  大部分檢查通過，但有一些問題需要注意。${NC}"
    exit 1
else
    echo -e "${RED}❌ 發現多個問題，建議先修復文件結構再進行AI操作。${NC}"
    exit 2
fi

echo ""
echo "💡 使用建議："
echo "- 在讓AI執行任務前，先運行此腳本檢查"
echo "- 如果有文件缺失，請先建立或修復"
echo "- 參考 AI_OPERATION_GUIDELINES.md 獲取詳細指引" 