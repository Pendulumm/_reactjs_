import React, { Component, Fragment } from 'react'
import './index.css'

// 创建Context对象
const MyContext = React.createContext()

export default class Context_ extends Component {
    state = {
        username: 'tom',
        age: 18
    };

    render() {
        const { username, age } = this.state;

        return (
            <div className='parent'>
                <h3>top component</h3>
                <h4>username:{username}</h4>
                <MyContext.Provider value={{ username, age }} >
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>component B</h3>
                {/* <h4>props from top---username:</h4> */}
                <C />
            </div>
        )
    }
}
/* class C extends Component {
    static contextType = MyContext;
    // contextType = MyContext;    // contextType was defined as an instance property on C. Use a static property to define contextType instead.
    render() {
        console.log('Component C:', this);
        return (
            <div className='grandson'>
                <h3>component C</h3>
                <h4>props from B---username:{this.context.username},age:{this.context.age}</h4>
            </div>
        )
    }
} */

function C() {
    return (
        <div className='grandson'>
            <h3>component C</h3>
            <MyContext.Consumer>
                {
                    value => (
                        <h4>props from B---username:{value.username},age:{value.age}</h4>
                    )
                }
            </MyContext.Consumer>
        </div>
    )
}
