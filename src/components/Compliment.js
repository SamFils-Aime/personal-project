import React, { Component } from "react";
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";

 class Compliment extends Component {
  constructor(props) {
    super(props);
    this.state = { compliment: "default" };
  }

  componentDidMount() {
    const that = this;
    axios.get("https://complimentr.com/api").then((response) => {
      console.log(response.data.compliment);
      that.setState({ compliment: response.data.compliment });
    });
  }
  compClick=()=>{
    console.log(this.state)
    axios.delete('/api/compliment', {
      username: this.props.username,
      compliment: this.state.compliment
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
        backgroundColor:"#f57f17",
        margin: "0",
        padding: "0",
        fontfamily: "Open Sans",
      };
    console.log(this.state.compliment);
  return (<div>
    <h1 style={divStyle}>{this.state.compliment}</h1>
    <button onClick={this.compClick}>ADD compliment</button>
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
})(Compliment)