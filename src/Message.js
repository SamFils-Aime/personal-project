import React, { Component } from 'react'

export default class Message extends Component {
  constructor(){
      super()
      this.state={
          text:{
            recipient:"",
              textmessage:""
          }
      }
  }
sendtext =_=>{
    const {text}=this.state
    fetch(`http://localhost:8080/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err=>console.log(err))
}

    render() {
        const {text}=this.state
        return (
            <div>
                <input type="text" placeholder="number" onChange={e=>this.setState({text:{...text, recipient: e.target.value}})}></input>
                <input type="text" placeholder="text" onChange={e=>this.setState({text:{...text, textmessage: e.target.value}})}></input>
                <button onClick={this.sendtext}>send message</button>
            </div>
        )
    }
}

