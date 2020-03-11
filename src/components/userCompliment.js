import React, { Component } from "react";
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Message from "../Message"


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
  
      
    if (this.state.compliment) {
      console.log(this.state.compliment);
      var mapthis = this.state.compliment.map(elements => {
        return (
          <div className="ucomp" id="com" key={elements.compliment_id}>
            {elements.compliment}
            <Message text={elements.compliment}/>
            <button id="delete" onClick={() => this.compdeleteClick(elements.compliment_id)}>
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
      <div className="usercomp">
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
