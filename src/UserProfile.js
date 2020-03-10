import React, { Component } from "react";
import { getSession, logOut,resetFields}  from "./redux/reducer/authReducer";
import { connect } from "react-redux";
import Popcompliment from "./components/Popcompliment";
import Popinsults from "./components/Popinsults";
import ImageDisplay from "./ImageDisplay";
import { Redirect, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  
  }

  componentDidMount() {
      this.props.getSession()
  }
     

 
  logUserOut=()=>{
       axios.get("/auth/logOut")
            .then(() => {
              this.props.resetFields()
              console.log(this.props.user)
            })
            .catch(err => { console.log(err) })
        }
  
render(){
    if (!this.props.username) {
      return <Redirect to="/" />;
    } 
  
    return (
      <div className="background">
        {this.Redirect}
        <Navbar />
        <div className="first">
          <div className="divul">
          <ul>
            <ImageDisplay />
            <Link to="/Usercompliment">
              <li>{this.props.username}'s Compliments list`</li>
            </Link>
            <Link to="/Userinsult">
              <li id="even">{this.props.username}'s Insult list`</li>
            </Link>
            <Link to="/insult">
              <li>live on the wild side</li>
            </Link>
            <Link to="compliment">
              <li id="even">show your best side</li>
            </Link>
            <Link to="/update">
              <li>Update your user name</li>
            </Link>
            <Link to="/home">
            <li  id="even" onClick={ this.logUserOut}> Log Out</li>
            </Link>
          </ul>
          </div>
          <div className="faves">
            <div className="comp">
              <Popcompliment />
            </div>
          <div className="insult">
            <Popinsults />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    username: state.authReducer.username,
    firstname: state.authReducer.firstname,
    lastname: state.authReducer.lastname,
    user: state.authReducer.user
  };
};
export default connect(mapStateToProp, {
  getSession,
  logOut,
  resetFields
})(UserProfile);
