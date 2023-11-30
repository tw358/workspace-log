'use client'

import { useRouter } from 'next/navigation'
import { Button, Flex } from 'antd';

export default function Page() {
    const router = useRouter()

    return (
        <Flex gap="small" wrap="wrap">
            <Button type="primary"  onClick={() => router.push('/sitelog')}>工作日志</Button>
            <Button type="primary"  onClick={() => router.push('/changelog')}>更新日志</Button>
        </Flex>
    )
}