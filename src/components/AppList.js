import React from 'react'
import AppTodos from './AppTodos'


class AppList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dele:''
        }

    }
    changeCompleteDone(id){
        this.props.changeCompleteTop(id)
    }
    //没有在这里出delete的需求是因为在这里处理会有错乱的问题，state的错乱，放在最顶层的父组件里处理，给数据添加一个字段deleteFlag
    //然后在子组件中展示的时候加入判断这个deleteFlag字段
    deleteDone(did){
        // let newData=this.props.data.map((item,index)=>{
        //     if(item.id===did){
                
        //     }
        // })
        // this.setState({dele:did})
        this.props.deleteItemTop(did)
    }
    //继续向上返回id
    render(){
        //const d = deleteItem
        const v = this.props.value
        //alert(JSON.stringify(this.props.data))
        const a = this.props.data.map(({id,text,complete,deleteFlag},index)=>{
            //alert(JSON.stringify(this.props.data))

            if (v == '1' && deleteFlag!=true) {
                return  <AppTodos 
                                key={index} 
                                id={id} 
                                text={text} 
                                complete={complete}
                                changeCompleteItem={this.changeCompleteDone.bind(this)}
                                deleteItem={this.deleteDone.bind(this)}
                          />
            }
      
            if (v == '2' && complete === false && deleteFlag!=true) {
                return  <AppTodos 
                                key={index} 
                                id={id} 
                                text={text} 
                                complete={complete}
                                changeCompleteItem={this.changeCompleteDone.bind(this)}
                                deleteItem={this.deleteDone.bind(this)}
                          />
            }
      
            if (v == '3' && complete === true && deleteFlag!=true) {
                return  <AppTodos 
                                key={index} 
                                id={id} 
                                text={text} 
                                complete={complete} 
                                changeCompleteItem={this.changeCompleteDone.bind(this)}
                                deleteItem={this.deleteDone.bind(this)}
                          />
            }
        })
        return(
            <div>{a}</div>
        )
    }
}
export default AppList;