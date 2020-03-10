import React, { Component } from 'react'
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect} from "react-router-dom";
import Message from "../Message"



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
        
          
          if(this.state.insult){
            console.log(this.state.insult)
        var mapthis= this.state.insult.map(elements=>{
            return (
              <div className="uinsult" id="ins" key={elements.insult_id}>
                {elements.insult}
                <Message text={elements.compliment}/>
                <button onClick={()=>this.compdeleteClick(elements.insult_id)}>delete</button>
              </div>
            )
          })}
          if(!this.props.username){
            return (<Redirect to="/" />);
        }
        return (
            <div className="userinsults">
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