import React from "react"
import { Component } from "react"

class Message extends Component{
    constructor(){
        super() 
        this.state = {
            message : 'welcome visitor..'
        }
    }

    changeMessage=() => {
        try {
            console.log('state is going to chage', this.state)
        this.setState({
            message:'Thanks for subscribing'
        },()=>{
            console.log('updated');
        })
        } catch (error) {
            console.log('err',error.message);
        }
        
    }

    render() {
        return (
       <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}
//returns only one element//
export default Message