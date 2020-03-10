import React, { Component } from 'react'

export default class Message extends Component {
  constructor(props){
      super(props)
      this.state={
          text:{
            recipient:"",
              textmessage:this.props.text
          }
      }
  }
sendtext =_=>{
    const {text}=this.state
    fetch(`http://localhost:8080/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .then((response)=>console.log(response))
    .catch(err=>console.log(err))
}

    render() {

            var inputStyle={
                backgroundColor: "transparent",
                borderBottom: "solid",
                borderColor:"#00a3cc",
                borderWidth:"1px",
                borderRadius:"5px",
                height: "20px",
            }
        const {text}=this.state
        return (
            <div Message="">
                <input style={inputStyle}
                type="text" 
                placeholder="number" 
                onChange={e=>this.setState({text:{...text, recipient: e.target.value}})}></input>
                <input style={inputStyle}
                type="text" 
                placeholder={this.state.textmessage} 
                onChange={e=>this.setState({text:{...text, textmessage: e.target.value}})}></input>
                <button onClick={this.sendtext}>send message</button>
            </div>
        )
    }
}

