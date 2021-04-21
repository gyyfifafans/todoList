import React from 'react'


var styles = {
    'title':{
        paddingLeft:'20px',
        paddingRight:'50px',
        position:'relative'
    },
    'delete':{
        marginRight:'20px',
        marginLeft:'50px',
    }
}
// AppTodos-> 父 AppList-> 父 App-> 子 AppList-> 子 AppTodos
class AppTodos extends React.Component{
    //返回id
    handleComplete(){
        this.props.changeCompleteItem(this.props.id)//id本来是父组件返回过来的，所以是this.props.id，直接用

    }
    handleDelete(){
        this.props.deleteItem(this.props.id)
    }
    render(){
        return (
            <div className='comment'>
                <div className='content'>
                    <input type='checkbox' checked={this.props.complete?true:false} onChange={this.handleComplete.bind(this)}/>
                    <span className='author' style={styles.title}>
                        {this.props.text}
                        <span className={this.props.complete?'line':''}/>
                    </span>

                    <span className='author' style={styles.title}>
                        {this.props.complete?'已完成':'未完成'}
                    </span>
                    <span className='author'>{this.props.id}</span>
                    <span className='ui blue button' style={styles.delete} onClick={this.handleDelete.bind(this)}>
                        删除
                    </span>
                </div>
            </div>
        )
    }
}
export default AppTodos;