import React, { Component } from 'react'
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect,Link } from "react-router-dom";
import Insult from "./Insults"



 class UserInsult extends Component {
     constructor(props){
         super(props)
         this.state={
            username:this.props.username,
            insult:[],
         }
     }

     

    
    componentDidMount() {
      // if (prevProps.username !== this.props.username) {
        const user= {username : this.state.username}
      //   console.log(' state has changed.')
        axios.get('/api/faveinsult', user).then((response) => {
          console.log(response);
          this.setState({ insult: response.data });
        });
      }
   

      compdeleteClick=(id)=>{
        console.log(this.state)
        const user= {username : this.state.username}
        axios.delete(`/api/deleteinsult/${id}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.get('/api/faveinsult', user).then((response) => {
          console.log(response);
          this.setState({ insult: response.data });
        });
      
      }
      
    
      

    render() {
      // console.log(this.state.insult.data)
        var divStyle = {
            color: "white", 
            fontSize: "16px",
            width:"20vw",
            backgroundColor:"blue",
            margin: "3px",
            fontfamily: "Open Sans",
          };
          if(this.state.insult){
            console.log(this.state.insult)
        var mapthis= this.state.insult.map(elements=>{
            return (
              <div style={divStyle} key={elements.insult_id}>
                {elements.insult}
                <button onClick={()=>this.compdeleteClick(elements.insult_id)}>delete</button>

              </div>
            )
          })}
          if(!this.props.username){
            return (<Redirect to="/" />);
        }
        return (
            <div>
                <h1 >{mapthis}</h1>
            </div>

        )
    }
}
const mapStateToProp= state=> {
    return{
      username: state.authReducer.username,
         
  }
  }
  export default connect(mapStateToProp,{
    getSession
  })(UserInsult)