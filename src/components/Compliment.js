import React, { Component } from "react";
import axios from "axios";

export default class Compliment extends Component {
  constructor(props) {
    super(props);
    this.state = { compliments: "default" };
  }

  componentDidMount() {
    const that = this;
    axios.get("https://complimentr.com/api").then((response) => {
      console.log(response.data.compliment);
      that.setState({ compliments: response.data.compliment });
    });
  }

  
  render() {
      var divStyle = {
        color: "white", 
        fontSize: "16px",
        width:"20vw",
        backgroundColor:"#f57f17",
        margin: "0",
        padding: "0",
        fontfamily: "Open Sans",
      };
    console.log(this.state.compliments);
  return <h1 style={divStyle}>{this.state.compliments}</h1>;
  }
}