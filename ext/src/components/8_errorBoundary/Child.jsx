import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        users: [
            { id: '001', name: 'tom', age: 18 },
            { id: '002', name: 'jack', age: 19 },
            { id: '003', name: 'Live', age: 20 }
        ]

        // 当数据出错时
        // users: "xxx"
    }

    render() {
        return (
            <div>
                <h2>Child Component</h2>
                {
                    this.state.users.map((user) => {
                        return (
                            <h4 key={user.id}>{user.name}---{user.age}---</h4>
                        )
                    })
                }
            </div>
        )
    }
}
