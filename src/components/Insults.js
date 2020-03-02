import React, { Component } from "react";
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";

 class Insults extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      insults: "default",
      username:""
   };
  }

  componentDidMount() {
    const that = this;
    axios("/load/insult").then(data => {
      that.setState({ insults: data.data });
    });
  }

  insultClick=()=>{
    axios.post('/api/insult', {
      username: this.props.username,
      insults: this.state.insults
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    console.log(this.state)
      var divStyle = {
        color: "white", 
        fontSize: "16px",
        width:"20vw",
        backgroundColor:"blue",
        margin: "3",
        fontfamily: "Open Sans",
      };
  return( <div>
    <h2 style={divStyle}>{this.state.insults}</h2>
    <button onClick={this.insultClick}>ADD Insults</button>
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
})(Insults)