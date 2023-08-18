import React, { useState } from 'react'

export default function Home() {
    const [sum, setSum] = useState(1)
    return (
        <div>
            <h3>我是Home的内容</h3>
            <h4>当前sum的值是:{sum}</h4>
            <button onClick={() => setSum(2)}>点我将sum变为2</button>
        </div>
    )
}
