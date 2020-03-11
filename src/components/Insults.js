import React, { Component } from "react";
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";
import Message from "../Message";
import { Redirect } from "react-router-dom";

class Insults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insult: "Try our insults",
      newinsult: []
    };
  }

  // componentDidMount() {
  //   const that = this;
  //   axios("/load/insult").then(data => {
  //     that.setState({ insult: data.data });
  //   });
  // }

  insultClick = e => {
    axios
      .post("/api/insult", {
        username: this.props.username,
        insult: e
      })
      .then(() => {})
      .catch(function(error) {
        console.log(error);
      });
  };

  newinsultClick = () => {
    const that = this;
    axios.get("/load/insult").then(response => {
      that.setState({
        newinsult: [...this.state.newinsult, response.data]
      });
    });
  };

  render() {


    var mapthis = this.state.newinsult.map(elements => {
      return (
        <div id="newinsult" >
            {elements}
          <div className="parent">
            <div id="hearts"
              onClick={() => {
                this.insultClick(elements);
              }}
            >
              favourite
            </div >
          </div>
          <Message text={elements} />
        </div>
      );
    });

    if (!this.props.username) {
      return <Redirect to="/" />;
    }

    return (
      <section className="body">
        <div id="conatiner">
        {mapthis}
        </div>
        <button id="hearts" onClick={this.newinsultClick}>+</button>
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
})(Insults);
