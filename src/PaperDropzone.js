import React, { useState,  } from "react";
import {connect,useSelector} from 'react-redux'
import {getSession} from './redux/reducer/authReducer'

require("dotenv").config();

function PaperDropzone(props) {
  const {
    REACT_APP_CLOUD_NAME,
    REACT_APP_UPLOAD_PRESET
  } = process.env;

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector(state => state.authReducer.user)


  const UploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", REACT_APP_UPLOAD_PRESET);
    setLoading(true);
    console.log(user)
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUD_NAME}/image/upload?public_id=${user.username}`,
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <h1>upload image</h1>
      <input
        type="file"
        name="file"
        placeholder="upload image"
        onChange={UploadImage}
      ></input>
      {loading ? (
        <h3>loading</h3>
      ) : (
        <img src={image} style={{ width: "30vw", borderRadius: "20px" }} alt="user"></img>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
      username: state.authReducer.username,
      password: state.authReducer.password,
      firstname: state.authReducer.firstname,
      lastname: state.authReducer.lastname,
      user: state.authReducer.user

  }
}

export default connect(mapStateToProps, {
  getSession
})(PaperDropzone);