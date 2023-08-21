import React from 'react'

import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
    const [searchParams, setSearchParams] = useSearchParams();
    /* const location = useLocation();
    console.log('location', location); */

    const id = searchParams.get('id');
    const title = searchParams.get('title');
    const content = searchParams.get('content');
    return (
        <ul>
            <li ><button onClick={() => { setSearchParams('id=008&title=haha&content=xixi') }}>点我更新一下收到的search参数</button></li>
            <li>消息编号：{id}</li>
            <li>消息标题：{title}</li>
            <li>消息内容：{content}</li>
        </ul>
    )
}
