import React, { Component } from "react";
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";
import Message from "../Message";
import { Redirect } from "react-router-dom";

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
  compClick = e => {
    console.log(e);
    axios
      .post("/api/compliment", {
        username: this.props.username,
        compliment: e
      })
      .then(() => {})
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
    var mapthis = this.state.newcompliment.map(elements => {
      return (
        <div className="newcomp">
          {elements}
          <div id="parent">
            <div
              className="hearts"
              onClick={() => {
                this.compClick(elements);
              }}
            >
              favourite
            </div>
          <Message text={elements} />
          </div >
        </div>
      );
    });

    if (!this.props.username) {
      return <Redirect to="/" />;
    }
    return (
      <section id="body">
        <div className="container">
            {mapthis}
        </div>
        <button className="plus" onClick={this.newCompClick}>+</button>
      </section>
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
