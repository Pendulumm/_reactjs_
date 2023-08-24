import React, { Component } from 'react'
import './index.css'
import C from '../1_SetState'

/*
    <A children="Hello">
        标签体内容是一个特殊的标签属性
        Hello
    </A>
*/

export default class RenderProps_ extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>top component</h3>
                <A render={(name) => <C name={name} />} />

            </div>
        )
    }
}

class A extends Component {
    state = { name: 'tom' };
    render() {
        console.log(this);
        const { name } = this.state;
        return (
            <div className='a'>
                <h3>A component</h3>
                {/* {this.props.children} */}

                {/* Vue---> slot */}
                {this.props.render(name)}
                {/* <B /> */}
            </div>
        )
    }
}

class B extends Component {
    render() {
        // console.log('B rendered');
        return (
            <div className='b'>
                <h3>B component</h3>
                <h4>props---name:{this.props.name}</h4>
            </div>
        )
    }
}
