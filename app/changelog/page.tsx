'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'
import ReactMarkdown from 'react-markdown'

const textContent = `
# 更新日志
        
 ## 【2023-11-30】更新日志

- 用户端
    - 新增 文件右侧栏详情页文件图标
    - 新增 文件右侧栏详情页分享按钮和分享功能
    - 新增 文件右侧栏多选文件页警告图标
    - 新增 文件右侧栏详情页文件路径点击跳转功能
    - 优化 文件右侧栏详情页布局和详细信息的描述列表样式
    - 优化 文件右侧栏相关代码
    - 修复 文件右侧栏详情页文件图标宽度被压缩导致图标变形的问题
    - 修复 文件右侧栏标签页头部间距错误问题
- 管理端
    - 新增 登录策略设置页面
    - 新增 策略表单可增加多个IP或IP段
    - 优化 使用正则对验证方法验证网段是否合法，验证是ip还是ip地址段并给出提示
    - 修复 组织同步无法进行OU和用户同步的BUG
    - 移除 移除AD用户管理中组织同步和用户同步按钮
    
 ## 【2023-12-08】更新日志
`;

export default function Page() {
    const router = useRouter()

    return <div>
        <Button type="primary" onClick={() => router.back()}>返回主页</Button>
        <ReactMarkdown>{textContent}</ReactMarkdown>
    </div>
}