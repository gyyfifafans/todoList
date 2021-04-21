import React from 'react'
import AppList from './components/AppList.js'
import AppForm from './components/AppForm.js'
import AppFooter from './components/AppFooter.js'


class App extends React.Component{
    state = {
        choosevalue:'1',
        data:this.props.data
    }

    onChangeCompleteItem(did){
        // const {data} = this.state
        // data.map((id,text,complete),index=>{
        //     if(id==did){
        //         complete = true
        //     }
        // })
        //map的各种方式要熟悉
        //这个return item怎么理解？
        let newData = this.state.data.map((item,index)=>{
            if(item.id===did){
                item.complete=!item.complete
            }
            return item;
        })
        this.setState({data:newData})
    }

    onDeleteItem(did){
        let newdata = this.state.data.map(function (item) {
            if (item.id == did) {
              item.deleteFlag = true
            }
            return item
          })
          this.setState({ data: newdata })
    }

    onListItem(s){
        this.setState({choosevalue:s})
    }
    onAddTodoItem(newItem){
        let newData = this.state.data.concat(newItem)//?concat作用:连接数组，也可以在数组后添加数据，所以对于data是增量更新数据
        this.setState({data:newData})//setState后会重新绘制
        //alert(JSON.stringify(this.state.data))//data数据没变，难道是异步的？在AppList中变了
    }
    //AppForm的addTodoItem方法从form传值出来给onAddTodoItem
    //onAddTodoItem处理完再更新state中的data
    render(){
        const {data,choosevalue} = this.state//切片？
        // alert(JSON.stringify(data))
        return(
            <div className='ui comments'>
                <h1>My Todo with React</h1>
                <div className='ui divider'></div>
                <AppForm 
                   addTodoItem={this.onAddTodoItem.bind(this)}/>
                <AppList data={data} value={choosevalue} 
                   changeCompleteTop={this.onChangeCompleteItem.bind(this)}
                   deleteItemTop={this.onDeleteItem.bind(this)}/>
                <AppFooter 
                   listItem={this.onListItem.bind(this)}/>
            </div>
        )
    }
}
export default App;