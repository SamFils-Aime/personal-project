import React, { Component } from "react";
import { getSession } from "./redux/reducer/authReducer";
import { connect } from "react-redux";

 class UserProfile extends Component {
  componentDidMount(){
    this.props.getSession()
  }

    render() {
        console.log(this.props.user)
    return (
      <div>
        <h1>
            {this.props.user.username}
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