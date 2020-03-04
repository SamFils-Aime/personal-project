import React, { Component } from "react";
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";

class Compliment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compliment: "try our compliments",
      newcompliment: []
    };
  }

  // componentDidMount() {
  //   const that = this;
  //   axios.get("https://complimentr.com/api").then(response => {
  //     that.setState({ compliment: response.data.compliment });
  //   });
  // }
  compClick = (e) => {
    console.log(e)
    axios
      .post("/api/compliment", {
        username: this.props.username,
        compliment: e
      })
      .then(()=> {
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  newCompClick = () => {
    const that = this;
    axios.get("https://complimentr.com/api").then(response => {
      that.setState({
        newcompliment: [...this.state.newcompliment, response.data.compliment]
      });
    });
  };

  render() {

    var divStyle = {
      color: "white",
      fontSize: "16px",
      width: "20vw",
      backgroundColor: "#f57f17",
      margin: "5px",
      padding: "0",
      fontfamily: "Open Sans"
    };

    var mapthis = this.state.newcompliment.map((elements, index) => {
      return (
          <h1 style={divStyle}>
            {elements}
            <button onClick={()=>{this.compClick(elements)}}>favourite</button>
          </h1>
      );
    });

    
    return (
      <div>
        <h1 style={divStyle}>
          {this.state.compliment}
          {/* <button onClick={this.compClick}>favourite</button> */}
        </h1>
          {mapthis}
        <button onClick={this.newCompClick}>more compliment</button>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    username: state.authReducer.username
  };
};
export default connect(mapStateToProp, {
  getSession
})(Compliment);
