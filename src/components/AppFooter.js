import React from 'react'

var styles = {
    'title':{
        marginRight:10,
        fontSize:20
    },

    'top':{
        marginTop:20
    }
}

class AppFooter extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     status:"1"
        // }//不要随便保存状态，有可能会出现错乱，不过不明白为什么
    }
    handleClick(event){
        // this.setState({status:event.target.value})
        // this.setState({status:this.refs.active.value})
        // alert('点击的是：'+JSON.stringify(event.target.value))
        this.props.listItem(event.target.value)
    }
    render(){
        return(
            <div>
                <h2 style={styles.top}>show</h2>
                <button type='button'
                style={styles.top}
                className='ui blue button'
                value='1'
                ref='all'
                onClick={this.handleClick.bind(this)}
                >全部</button>

                <button type='button'
                style={styles.top}
                className='ui blue button'
                value='2'
                ref='active'
                onClick={this.handleClick.bind(this)}
                >还未完成</button>

                <button type='button'
                style={styles.top}
                className='ui blue button'
                value='3'
                ref='complete'
                onClick={this.handleClick.bind(this)}
                >已完成</button>
            </div>
        )
    }
}
export default AppFooter;