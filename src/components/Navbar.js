import React, { Component } from 'react'
import ImageDisplay from '../ImageDisplay'
import { getSession, logOut } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

 class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
     username: "p"
    };
  
  }

    componentDidMount() {
        this.props.getSession();
      }


      
  logUserOut=()=>{
    return(
      () => {this.props.logOut()},
      this.setState({username:"q"}
      
      ))
  }
    
    render() {
      if (this.state.username==="q") {
        return <Redirect to="/home" />;
      } 
        return (
            <div className="navbar">
              <Link to="/Usercompliment">
                <div className="compnav"> Favourite Compliments</div>
              </Link>
              <Link to="compliment">
                  <div className="compnav" > 
                    Boast
                  </div>
              </Link>
                <header className="name">
                {this.props.user.firstname} {this.props.user.lastname}
                </header>
                <Link to="/insult">
                  <div className='insultnav'> 
                    Roast
                  </div>
                </Link>
                <Link to="Userinsult">
                  <div className='insultnav'> Favourite Insults</div>
                </Link>

            </div>
        )
    }
}
const mapStateToProp = state => {
    return {
      username: state.authReducer.username,
      password: state.authReducer.password,
      firstname: state.authReducer.firstname,
      lastname: state.authReducer.lastname,
      user: state.authReducer.user
    };
  };
  export default connect(mapStateToProp, {
    getSession,
    logOut
  })(Navbar);
  