import React, { Component } from "react";
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect,Link } from "react-router-dom";
import Compliment from "./Compliment";

class UserCompliment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      compliment: ""
    };
  }

  componentDidMount() {
    const user = { username: this.state.username };
    axios.get("/api/favecompliment", user).then(response => {
      console.log(response);
      this.setState({ compliment: response.data });
    });
  }

  compdeleteClick = id => {
    console.log(this.state);
    const user = { username: this.state.username };

    axios
      .delete(`/api/deletecompliment/${id}`)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
      axios
      .get("/api/favecompliment", user).then(response => {
        console.log(response);
        this.setState({ compliment: response.data });
      }
      )}

  render() {
    var divStyle = {
      color: "red",
      fontSize: "16px",
      width: "20vw",
      backgroundColor: "#f57f17",
      margin: "3px",
      padding: "0",
      fontfamily: "Open Sans"
    };
    if (this.state.compliment) {
      console.log(this.state.compliment);
      var mapthis = this.state.compliment.map(elements => {
        return (
          <div style={divStyle} key={elements.compliment_id}>
            {elements.compliment}
            <button
              onClick={() => this.compdeleteClick(elements.compliment_id)}
            >
              delete
            </button>
          </div>
        );
      });
    }

    if(!this.props.username){
      return (<Redirect to="/" />);
  }

    return (
      <div>
        <h1>{mapthis}</h1>
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
})(UserCompliment);
