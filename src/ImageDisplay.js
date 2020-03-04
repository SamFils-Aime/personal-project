import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import React, { Component } from "react";
import { getSession } from "./redux/reducer/authReducer";
import { connect } from "react-redux";
require("dotenv").config();

 class ImageDisplay extends Component {
  render() {
    const { REACT_APP_CLOUD_NAME } = process.env;
    return (
      <CloudinaryContext cloudName={REACT_APP_CLOUD_NAME}>
        <div>
          <Image publicId={this.props.username} width="200" height="200" crop="scale">
            <Transformation
              height="150"
              width="150"
              radius="max"
            />
            <Transformation
              quality="100"
            />
          </Image>
        </div>
      </CloudinaryContext>
    );
  }
}
const mapStateToProp= state=> {
  return{
    username: state.authReducer.username,
        password: state.authReducer.password,
        firstname: state.authReducer.firstname,
        lastname: state.authReducer.lastname,
        user: state.authReducer.user
}
}
export default connect(mapStateToProp,{
  getSession
})(ImageDisplay)