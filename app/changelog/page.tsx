import React from 'react'
import ReactMarkdown from 'react-markdown'

const textContent = `
# 更新日志
        
 ## 【2023-12-01】更新日志

- 用户端
    - 新增  文件右侧栏详情页文件图标
    - 新增 文件右侧栏详情页分享按钮和分享功能
    - 新增 文件右侧栏多选文件页警告图标
    - 优化 文件右侧栏详情页布局和详细信息的描述列表样式
    - 修复 文件右侧栏详情页文件图标宽度被压缩导致图标变形的问题
- 管理端`;

export default function Page() {
    return <ReactMarkdown>{textContent}</ReactMarkdown>
}