import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {

    render() {
        // console.log('MyNavLink props:', this.props);
        return (
            <NavLink activeClassName="active_test" className="list-group-item" {...this.props} />
        )
    }
}
