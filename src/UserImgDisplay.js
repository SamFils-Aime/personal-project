import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import React, { Component } from "react";
import { getSession } from "./redux/reducer/authReducer";
import { connect } from "react-redux";
require("dotenv").config();

 export default class UserImgDisplay extends Component {

   returnPNG= (e)=>{
     return `${e}.png`
   }
   render() {
    const { REACT_APP_CLOUD_NAME } = process.env;
    return (
      <div  backgroundColor="transparent">

      <CloudinaryContext cloudName={REACT_APP_CLOUD_NAME}>
          <Image className="userimage" publicId={this.returnPNG(this.props.username)} width="300" height="300" crop="scale" >
            <Transformation
              radius="max"
              background="transparent"
              quality="100"
              overlay="horizon"
              flags={["cutter", "relative"]}
              width="1.0" height="1.0"
              />
          </Image>
      </CloudinaryContext>
      </div>
    );
  }
}
