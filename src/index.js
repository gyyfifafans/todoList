import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

let data = [
    {id:1,text: '天气不错哦！！！',complete:false},
    {id:2,text: '饭不错哦！！！',complete:false},
    {id:3,text: '出去玩啊！！！',complete:true},
]

ReactDOM.render(<App data={data}/>,document.getElementById("app"));