// 类式组件

/* import React, { Component } from 'react'
import root from '../../index'

export default class Hooks_ extends Component {

    state = { count: 0 };

    myRef = React.createRef();

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((prevState) => {
                return { count: prevState.count + 1 }
            })
            console.log('###');
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    add = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }
    unmount = () => {
        root.unmount();
    }
    show = () => {
        alert(this.myRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.show}>点击提示数据</button>
            </div>
        )
    }
} */


import React from 'react'
import root from '../../index'

export default function Hooks_() {
    // console.log('rendered...');

    // 不会因为再次调用useState，让initialState覆盖解构的state
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('tom')
    const myRef = React.useRef();

    // React.useEffect(() => {
    //     console.log('###');
    //     // 相当于 componentDidMount 和 componentDidUpdate
    //     // 没有[]作为第二个参数，所有状态发生改变的时候，本回调都会执行

    //     // setInterval(() => {
    //     //     setCount(count => count + 1)
    //     // }, 1000);
    // })
    React.useEffect(() => {
        console.log('###');
        //相当于 componentDidMount
        // []意味着什么状态都不监测

        let timer = setInterval(() => {
            setCount(count => count + 1)
            console.log('interval###');
        }, 1000);

        // 返回的函数相当于componentWillUnmount
        return () => {
            // console.log('componentWillUnmount');
            clearInterval(timer);
        }
    }, [])
    // React.useEffect(() => {
    //     console.log('###');
    //     // 首次调用相当于 componentDidMount
    //     // [count]意味着监测count(状态)的改变
    // }, [count])
    // React.useEffect(() => {
    //     if (name != 'tom') {
    //         setInterval(() => {
    //             setCount(count => count + 1)
    //         }, 1000);
    //     }
    // }, [name])

    function add() {
        // setCount(count + 1)
        setCount(count => count + 1)
    }
    function changeName() {
        setName('Jack')
    }
    function unmount() {
        // 卸载组件的回调
        root.unmount();
    }
    function show() {
        // 提示输入的回调
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>当前求和为{count},
                <span>名字为{name}</span>
            </h2>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}
