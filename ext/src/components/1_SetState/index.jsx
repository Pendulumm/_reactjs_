import React, { Component } from 'react'

export default class SetState_ extends Component {

    state = { count: 0 }

    increse = () => {
        // 对象式的setState

        /* // 1.获取原来的count值
        const { count } = this.state;
        // 2.更新状态
        this.setState({ count: count + 1 }, () => {
            // callback的时机在react改完状态并调完render后执行

            // 注意：这里的count为之前解构的值
            // count 不等于 this.state.count，因为状态更新了
            console.log('count', count);
            console.log('this.state.count', this.state.count);
        });
        // setState是同步方法，但是setState引起react更新的动作是异步的
        // console.log('this.state.count', this.state.count);
        // console.log('\count', count); */

        // 函数式的setState

        /* this.setState((prevState, props) => {
            const { count } = prevState;
            console.log('prevState', prevState);
            console.log('props', props);
            return { count: count + 1 };
        }) */
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }


    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.increse}>点我+1</button>
            </div>
        )
    }
}
