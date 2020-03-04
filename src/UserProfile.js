import React, { Component } from "react";
import { getSession } from "./redux/reducer/authReducer";
import { connect } from "react-redux";
import Compliment from "./components/Compliment"
import Insult from "./components/Insults"
import UserCompliment from "./components/UserCompliment"
import UserInsult from "./components/UserInsult"
import ImageDisplay from "./ImageDisplay";
import Message from "./Message"
import { Redirect,Link } from "react-router-dom";




 class UserProfile extends Component {


  componentDidMount(){
    this.props.getSession()
  }

    render() {
     

        if(!this.props.username){
            return (<Redirect to="/" />);
        }
        
    return (
      <div>
        <h1>
            <ImageDisplay/>
            {this.props.user.username}
            <Link to='/Usercompliment'>
    <button>{this.props.username}'s Compliments list`</button>
            </Link>
            <Link to='/Userinsult'>
    <button>{this.props.username}'s Insult list`</button>
            </Link>
            <Compliment/>
            <Insult/>
            <Message/>

        </h1>
      </div>
    );
  }
}

const mapStateToProp= state=> {
  return{
    username: state.authReducer.username,
        password: state.authReducer.password,
        firstname: state.authReducer.firstname,
        lastname: state.authReducer.lastname,
        user: state.authReducer.user
}
}
export default connect(mapStateToProp,{
  getSession
})(UserProfile)