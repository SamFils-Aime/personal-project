import React, { Component } from "react";
import { getSession } from "../redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios";
import Message from "../Message"
import { Redirect} from "react-router-dom";


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

  insultClick = (e) => {
    axios
      .post("/api/insult", {
        username: this.props.username,
        insult: e
      })
      .then(()=> {
      })
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
    var divStyle = {
      color: "white",
      fontSize: "16px",
      width: "20vw",
      backgroundColor: "blue",
      margin: "3",
      fontfamily: "Open Sans"
    };

    var mapthis = this.state.newinsult.map(elements => {
      return (
          <div className='geninsult' style={divStyle}>
        <h2>
          {elements}
          <button onClick={()=>{this.insultClick(elements)}}>favourite</button>
        </h2>
          <Message text={elements}/>
        </div>
      );
    });

    if (!this.props.username) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h2 style={divStyle}>{this.state.insult}
        {/* <button onClick={this.insultClick}>favourite</button> */}
        </h2>
        {mapthis}
        <button onClick={this.newinsultClick}>more insult</button>
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
})(Insults);
