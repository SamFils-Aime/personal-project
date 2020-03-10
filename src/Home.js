import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { getSession, logOut}  from "./redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios"

 class Home extends Component {
    
    componentDidMount() {
          //  this.props.logOut()
      }
    
    render() {
        return (
            <div className="home">
                <Link to="/">
                welcome
                </Link>
            </div>
        )
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
    logOut
  })(Home);
  