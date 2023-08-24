import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {
        hasError: ''    // 用于标识子组件是否产生错误
    }

    // 当Parent的子组件出现报错时候，会触发getDerivedStateFromError的调用
    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError>>>', error);
        return { hasError: error }
    }

    componentDidCatch(error, errorInfo) {
        // 可以统计错误次数，反馈给服务器，用于解决bug
        console.log('error rendering component');
        /* console.log('error>>>', error);
        console.log('errorInfo>>>', errorInfo); */
    }

    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                {/* 错误边界适用于生产环境，开发环境不适用 */}
                {this.state.hasError ? <h2>当前网络不稳定，请稍候再试</h2> : <Child />}
            </div>
        )
    }
}
