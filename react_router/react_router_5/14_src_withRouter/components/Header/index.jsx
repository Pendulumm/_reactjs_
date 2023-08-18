import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    go = (n) => {
        this.props.history.go(n)
    }
    render() {
        console.log('Header props:', this.props);
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={() => this.go(2)}>前进2</button>&nbsp;
                <button onClick={() => this.go(-2)}>回退2</button>
            </div>

        )
    }
}
let C = withRouter(Header)
console.log('C:', C);
export default C