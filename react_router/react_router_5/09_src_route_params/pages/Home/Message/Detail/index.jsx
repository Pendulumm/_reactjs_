import React, { Component } from 'react'


const detailData = [
    { id: '01', content: 'Hi~' },
    { id: '02', content: 'Goodbye~' },
    { id: '03', content: 'GoodNight~' }
]

export default class Detail extends Component {
    render() {
        console.log('Detail props:', this.props);


        const { id, title } = this.props.match.params;      // 接收params参数
        const findResult = detailData.find((detailObj) => {
            return detailObj.id === id;
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
