'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'
import ReactMarkdown from 'react-markdown'

const textContent = `
# 工作日志
        
 ## 【2023-11-30】更新日志自检BUG

- 用户端
    - 修复 引用文件右侧栏详情页文件图标缺少引用
    - 修复 多选文件右侧栏警告信息布局错误
    - 修复 文件名过长时，文件右侧栏详情页会遮盖分页
- 管理端
    - 修复 登录策略管理列表未绑定IP/IP段，创建时间
    - 修复 策略弹窗点击确认未调用接口并且无法关闭弹窗

`;

export default function Page() {
    const router = useRouter()

    return <div>
        <Button type="primary" onClick={() => router.back()}>返回主页</Button>
        <ReactMarkdown>{textContent}</ReactMarkdown>
    </div>
}