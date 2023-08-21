import React, { useState } from 'react'

import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
    const navigate = useNavigate();

    const [messages] = useState([
        { id: '001', title: 'message1', content: 'hello' },
        { id: '002', title: 'message2', content: 'good' },
        { id: '003', title: 'message3', content: 'nice' },
        { id: '004', title: 'message4', content: 'well well' }
    ])
    function showDetail(msg) {
        navigate('detail', {
            replace: false,
            state: {
                id: msg.id,
                title: msg.title,
                content: msg.content
            }
        });
    }

    return (
        <div>
            <ul>
                {
                    messages.map((msg) => {
                        return (
                            // 路由链接
                            <li key={msg.id}>
                                <Link to="detail"
                                    state={{
                                        id: msg.id,
                                        title: msg.title,
                                        content: msg.content
                                    }}>
                                    {msg.title}
                                </Link>
                                <button onClick={() => showDetail(msg)}>查看详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            {/* 指定路由组件的展示位置 */}
            <Outlet />
        </div>
    )
}
