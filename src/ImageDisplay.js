import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import React, { Component } from "react";
import { getSession } from "./redux/reducer/authReducer";
import { connect } from "react-redux";
import axios from "axios"
require("dotenv").config();

 class ImageDisplay extends Component {




   returnPNG= (e)=>{
     return `${e}.png`
   }
   render() {
     console.log(this.props.username)
    const { REACT_APP_CLOUD_NAME } = process.env;
    return (
      <div  backgroundColor="transparent">

      <CloudinaryContext cloudName={REACT_APP_CLOUD_NAME}>
          <Image className="userimage" publicId={this.returnPNG(this.props.username)} width="300" height="300" crop="scale" >
            <Transformation
              radius="max"
              background="transparent"
              quality="100"
              overlay="circle"
              flags={["cutter", "relative"]}
              width="1.0" height="1.0"
              gravity="east"
              />
          </Image>
      </CloudinaryContext>
      </div>
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