import React, { Component } from 'react'
import Message from "../Message"
import { connect } from "react-redux";
import { getSession } from "../redux/reducer/authReducer";
import axios from "axios";
import UserImgDisplay from"../UserImgDisplay"






 class Popcompliment extends Component {
    
  constructor(){
    super()
    this.state={

    }
  }
  
  componentDidMount() {
    this.props.getSession();
    axios.get("/api/popcompliment").then(response => {
      this.setState({ compliment: response.data });
    });
  }
    render() {
        var divStyle = {
            color: "white",
            width: "30vw",
            borderRadius:"5px",
            margin: "3px",
          };


        if (this.state.compliment) {
            var mapthis = this.state.compliment.map(elements => {
              return (
                <div className="faves1" style={divStyle} key={elements.compliment_id}>
                  <div className="popusers">
                  {elements.username}
                  </div>
                <UserImgDisplay username={elements.username}/>
                  {elements.compliment}
                  <Message text={elements.compliment}/>
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
  })(Popcompliment);
  