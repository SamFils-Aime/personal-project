import React, { Component } from "react";
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";

 class Insults extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      insult: "default",
   };
  }

  componentDidMount() {
    const that = this;
    axios("/load/insult").then(data => {
      that.setState({ insult: data.data });
    });
  }

  insultClick=()=>{
    console.log(this.state)
    axios.post('/api/insult', {
      username: this.props.username,
      insult: this.state.insult
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
    <h2 style={divStyle}>{this.state.insult}</h2>
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