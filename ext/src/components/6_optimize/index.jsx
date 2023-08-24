import React, { Component, PureComponent } from 'react'
import './index.css'

export default class Optimize_ extends PureComponent {

    state = {
        carName: 'benz c63',
        stu: ['小张', '小李', '小王']
    }

    /* shouldComponentUpdate(nextProps, nextState) {
        // console.log('nextProps>>>', nextProps, '---------', 'nextState>>> ', nextState);
        // console.log('this.props>>>', this.props, '---------', 'this.state>>> ', this.state);
        if (this.state.carName === nextState.carName) {
            return false;
        } else {
            return true;
        }
    } */

    changeCar = () => {
        this.setState(
            prevState => ({
                carName: 'toyota'
            })
        )

        /* let obj = this.state;
        obj.carName = 'toyota';

        // 这里setState的参数地址并没有发生变化
        this.setState(obj); */
    }
    addPerson = () => {
        const { stu } = this.state;
        /* stu.unshift('小刘');
        this.setState({ stu }); */
        this.setState({ stu: ['小刘', ...stu] });
    }

    render() {
        console.log('Parent redered');
        const { carName } = this.state;
        return (
            <div className='parent'>
                <h3>top component</h3>
                <h4>{this.state.stu}</h4>
                <span>car name:{carName}</span><br />
                <button onClick={this.changeCar}>点我换车</button>
                <button onClick={this.addPerson}>添加小刘</button>
                <Child carName="xxx" />
            </div>
        )
    }
}

class Child extends PureComponent {

    /* shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps>>>', nextProps);
        console.log('this.props>>>', this.props);
        return !this.props.carName === nextProps.carName
    } */

    render() {
        console.log('Child redered');
        return (
            <div className='child'>
                <h3>child component</h3>
                <span>props---carName:{this.props.carName}</span>
            </div>
        )
    }
}
