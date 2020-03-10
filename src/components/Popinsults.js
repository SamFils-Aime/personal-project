import React, { Component } from 'react'
import Message from "../Message"
import { connect } from "react-redux";
import { getSession } from "../redux/reducer/authReducer";
import axios from "axios";
import UserImgDisplay from"../UserImgDisplay"


 class Popinsults extends Component {
    
  constructor(){
    super()
    this.state={

    }
  }
  
  componentDidMount() {
    this.props.getSession();
    axios.get("/api/popinsult").then(response => {
      this.setState({ insult: response.data });
    });
  }
    render() {
        var divStyle = {
          color: "white",
          width: "30vw",
          borderRadius:"5px",
          margin: "3px",
          };


        if (this.state.insult) {
            console.log(this.state.insult);
            var mapthis = this.state.insult.map(elements => {
              return (
                <div className="fave2"style={divStyle} key={elements.insult_id}>
                  <div className="popusers">
                  {elements.username}
                  </div>
                <UserImgDisplay username={elements.username}/>
                  {elements.insult}
                  <Message text={elements.insult}/>
                </div>
              );
            });
          }
         
        return (
            <div>
                {mapthis}
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
    getSession
  })(Popinsults);
  