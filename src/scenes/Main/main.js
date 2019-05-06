import React from "react";
import "./main.scss";
import axios from "axios";
import url from "../url.js";
import { MyDropzone } from "../Dropzone/MyDropZone.js";
import LoadingOverlay from "react-loading-overlay";
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      plyLocation: "",
      isActive: true
    };

    this.downPly = this.downPly.bind(this);
    this.uploadAnother = this.uploadAnother.bind(this);
    this.receiveFile = this.receiveFile.bind(this);
  }
  uploadAnother = () => {
    this.setState({ location: "" });
  };
  downPly = () => {
    this.setState({ isActive: false });
    console.log("downPly");
    fetch(`//` + url + `/downPly?location=` + this.state.location, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(res => {
        return res.json();
      })
      .then(resp => {
        const location = resp.Location;
        this.setState({ plyLocation: location, isActive: true });
      });
  };
  receiveFile = file => {
    const formData = new FormData();
    formData.append("file", file);
    this.setState({ isActive: false });
    axios
      .post(`//` + url + `/uploadImage`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(async response => {
        // handle your response;
        const location = response.data.Location;
        this.setState({ location: location, isActive: true });
        console.log(location);
      })
      .catch(error => {
        console.log(error);
        this.setState({ isActive: true });
        // handle your error
      });
  };
  render() {
    return (
      <LoadingOverlay
        active={!this.state.isActive}
        spinner
        text="Please wait..."
        className="spinner"
      >
        <div className="subDiv">
          <MyDropzone receiveFile={file => this.receiveFile(file)} />
          <label id="imageUrl">{this.state.location}</label>
          <div className="imageView">
            <img src={this.state.location} alt="" />
          </div>
          <label id="imageUrl">{this.state.plyLocation}</label>
          <div className="buttonGroup">
            <button onClick={this.uploadAnother}>Upload another</button>
            <button onClick={this.downPly}>Down ply</button>
          </div>
        </div>
      </LoadingOverlay>
    );
  }
}
