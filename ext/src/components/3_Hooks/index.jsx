// 类式组件

/* import React, { Component } from 'react'

export default class Hooks_ extends Component {

    state = { count: 0 };

    add = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <div>
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
 */

import React from 'react'

export default function Hooks_() {

    const [count, setCount] = React.useState(0)

    function add() {
        // setCount(count + 1)
        setCount(count => count + 1)
    }

    return (
        <div>
            <h2>当前求和为{count}</h2>
            <button onClick={add}>点我+1</button>
        </div>
    )
}
