import React from 'react'
import uuid from 'uuid'

var styles = {
    'title':{
        width:200,
        display:'inline-block',
        marginRight:10,
        verticalAlign:'top'
    }
}

class AppForm extends React.Component{
    constructor (props){
        super(props)
        this.state = {value:''}//key-value形式
    }
    
    
    handleChange(event){
        this.setState({value:event.target.value})
    }
    handleSubmit(event){//接受动作event，给addTodoItem传值
        event.preventDefault() //作用：阻止浏览器默认事件，难道是刷新？刷新，新加的数据会消失
        //let text = this.refs.text.value//refs废止了，替换的写法是什么?如何获取form内input的输入值
        let text = this.state.value
        if(!text.trim()){//用法去掉字符串两端空白符
            alert("input can't be null")
            return
        }

        let id = uuid()
        //传回给父组件的原因难道是因为绘制AppList是通过父组件的data填充的
        //平行子组件->父组件->子组件
        this.props.addTodoItem({id,text,complete:false})
        this.setState({value:''})
    }//form标签，input标签
    //form两个事件：submit和onSubmit，前者直接提交表单
    render(){
        return(
            <form className='ui reply form'
                  onSubmit={this.handleSubmit.bind(this)}>
                <div className='field' style={styles.title}>
                    {/* <input type='text' placeholder='TODO' ref='text'/> */}
                    <input type='text' placeholder='TODO' value={this.state.value} onChange={this.handleChange.bind(this)}/>
                </div>
                <button type='submit' className='ui blue button'>
                添加
                </button>
            </form>
            
        )
    }
}
export default AppForm;