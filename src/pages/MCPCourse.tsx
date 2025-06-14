import React from 'react'
import { Zap, CheckCircle, MessageCircle, Database, Globe, FileText, ArrowRight, Shield, Github, User, ExternalLink, Code } from 'lucide-react'
import { imageAssets } from '../utils/imageAssets'

const MCPCourse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Zap className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Model Context Protocol
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
              Anthropic 開源的標準化協議，讓 AI 工具像 USB-C 一樣通用連接
            </p>
          </div>
        </div>
      </div>

      {/* Section A: 什麼是 MCP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                什麼是 MCP？
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Model Context Protocol (MCP)</strong> 是由 Anthropic 在 2024 年 11 月發布的開源標準化協議。
                </p>
                <p>
                  MCP 解決了 AI 應用程式與各種資料來源和工具連接時的複雜性問題，提供了一個統一的介面標準。
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-purple-600 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-purple-900 mb-2">核心概念</p>
                      <p className="text-purple-700">
                        讓 AI 工具能夠安全、高效地訪問不同的資料源，如資料庫、API、檔案系統等，就像 USB-C 讓所有設備都能通用連接一樣。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={imageAssets.mcp.hero}
                  alt="Claude AI by Anthropic"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Anthropic Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <MessageCircle className="text-purple-600" size={24} />
                  </div>
                  <p className="font-bold text-gray-900">Anthropic</p>
                  <p className="text-sm text-gray-600">創建者</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: MCP 可以做什麼 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              MCP 可以做什麼？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MCP 提供強大的整合能力，讓 AI 助手能夠與各種系統和服務進行交互
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 資料庫整合 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Database className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">資料庫整合</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  PostgreSQL、MySQL 查詢
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  SQLite 本地資料庫
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  NoSQL 資料存取
                </li>
              </ul>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={imageAssets.mcp.feature1}
                  alt="Database Integration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* API 整合 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API 整合</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500" size={20} />
                  GitHub API 操作
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500" size={20} />
                  Slack 訊息發送
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500" size={20} />
                  Google 服務整合
                </li>
              </ul>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={imageAssets.mcp.feature2}
                  alt="API Integration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 檔案系統 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">檔案系統</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500" size={20} />
                  檔案讀寫操作
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500" size={20} />
                  目錄結構分析
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500" size={20} />
                  批次檔案處理
                </li>
              </ul>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={imageAssets.mcp.feature3}
                  alt="File System"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* MCP 架構圖 */}
          <div className="mt-16 bg-white rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">MCP 架構運作流程</h3>
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">AI Client</h4>
                <p className="text-sm text-gray-600">Claude Desktop<br/>Cursor</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="text-gray-400" size={32} />
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={32} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">MCP Protocol</h4>
                <p className="text-sm text-gray-600">標準化介面</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="text-gray-400" size={32} />
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="text-white" size={32} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">MCP Server</h4>
                <p className="text-sm text-gray-600">資料源<br/>服務</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: 推薦 MCP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              推薦 MCP 伺服器
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精選的 MCP 伺服器，讓你快速開始 AI 工具整合
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 官方推薦 */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Shield className="text-purple-600" size={28} />
                官方推薦
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                      <Github className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">GitHub MCP Server</h4>
                      <p className="text-sm text-gray-600">by Anthropic</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    直接與 GitHub 倉庫互動，搜尋程式碼、建立 Issue、管理 Pull Request
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">倉庫管理</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">程式碼搜尋</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Issue 管理</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Database className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">PostgreSQL MCP Server</h4>
                      <p className="text-sm text-gray-600">by Anthropic</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    連接 PostgreSQL 資料庫，執行查詢、更新資料、分析表結構
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">SQL 查詢</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">資料分析</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">表結構</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 社群貢獻 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <User className="text-green-600" size={28} />
                社群貢獻
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Slack MCP Server</h4>
                      <p className="text-sm text-gray-600">by Community</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    發送 Slack 訊息、管理頻道、搜尋聊天記錄
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">訊息發送</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">頻道管理</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                      <FileText className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Google Drive MCP</h4>
                      <p className="text-sm text-gray-600">by Community</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    存取 Google Drive 檔案、建立文件、分享權限管理
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">檔案管理</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">文件建立</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6">
                  <h4 className="font-bold mb-2">探索更多 MCP 伺服器</h4>
                  <p className="text-blue-100 mb-4 text-sm">
                    訪問 GitHub 官方倉庫，發現社群建立的各種 MCP 伺服器
                  </p>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-xl font-medium text-sm hover:bg-blue-50 transition-colors flex items-center gap-2">
                    前往 GitHub
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: 創建自己的 MCP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              創建自己的 MCP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              學習如何建立自定義的 MCP 伺服器，擴展 AI 工具的能力
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">開發流程</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">選擇開發語言</h4>
                    <p className="text-gray-600">支援 Python、TypeScript、Rust 等多種語言</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">定義 Tools 和 Resources</h4>
                    <p className="text-gray-600">設計 AI 可以呼叫的功能和存取的資源</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">實作 MCP 協議</h4>
                    <p className="text-gray-600">使用官方 SDK 快速建立標準化介面</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">測試與部署</h4>
                    <p className="text-gray-600">在 Claude Desktop 中測試並分享給社群</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={imageAssets.mcp.testimonial}
                  alt="MCP Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 程式碼範例 */}
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">簡單的 MCP 伺服器範例</h3>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Code className="text-indigo-600" size={24} />
                  Python 範例
                </h4>
                <div className="bg-gray-900 rounded-2xl p-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`from mcp import McpServer
from mcp.types import Tool

server = McpServer("my-mcp-server")

@server.tool()
def calculator(operation: str, a: float, b: float) -> float:
    """Simple calculator tool"""
    if operation == "add":
        return a + b
    elif operation == "multiply":
        return a * b
    # ... more operations

if __name__ == "__main__":
    server.run()`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="text-blue-600" size={24} />
                  配置文件
                </h4>
                <div className="bg-gray-900 rounded-2xl p-6 overflow-x-auto">
                  <pre className="text-blue-400 text-sm">
{`{
  "mcpServers": {
    "my-calculator": {
      "command": "python",
      "args": ["calculator_server.py"],
      "env": {
        "PYTHONPATH": "/path/to/mcp"
      }
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center gap-3">
                開始建立 MCP 伺服器
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            準備好掌握 MCP 了嗎？
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-12 max-w-2xl mx-auto">
            加入我們的 MCP 專業課程，從基礎概念到實際應用，成為 AI 工具整合專家
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors">
              立即開始學習
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
              查看課程大綱
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MCPCourse 