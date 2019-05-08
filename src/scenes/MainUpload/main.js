import React from "react";
import "./main.scss";
import axios from "axios";
import url from "../url.js";
import { Redirect } from "react-router-dom";
import { MyDropzone } from "../Dropzone/MyDropZone.js";
import LoadingOverlay from "react-loading-overlay";
import { Link, Route } from "react-router-dom";
let loadingText = "Please wait";
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
  componentDidMount() {
    this.setState({
      plyLocation: JSON.parse(window.sessionStorage.getItem("loginInformaion"))
        .plyPath,
      location: JSON.parse(window.sessionStorage.getItem("loginInformaion"))
        .originalImagePath
    });
  }
  uploadAnother = () => {
    this.setState({ location: "", plyLocation: "" });
  };
  downPly = () => {
    loadingText = `Please wait...
    It will takes few minuts.
    We are getting ply file and texture file and uploading those of them.`;
    this.setState({ isActive: false });
    console.log(
      JSON.parse(window.sessionStorage.getItem("loginInformaion")).username
    );
    fetch(
      `//` +
        url +
        `/downPly?location=` +
        this.state.location +
        `&username=` +
        JSON.parse(window.sessionStorage.getItem("loginInformaion")).username,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        }
      }
    )
      .then(res => {
        return res.json();
      })
      .then(resp => {
        const location = resp.Location.split(".jpg")[0];
        this.setState({ plyLocation: location, isActive: true });
        let beforeData = JSON.parse(
          window.sessionStorage.getItem("loginInformaion")
        );
        beforeData.plyPath = location;
        window.sessionStorage.setItem(
          "loginInformaion",
          JSON.stringify(beforeData)
        );
      })
      .catch(err => {
        this.setState({ isActive: true });
        alert("Error ocurred");
      });
  };
  receiveFile = file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "user",
      JSON.parse(window.sessionStorage.getItem("loginInformaion")).username
    );
    loadingText = `Please wait...
    Uploading your photo...`;
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
        let beforeData = JSON.parse(
          window.sessionStorage.getItem("loginInformaion")
        );
        beforeData.originalImagePath = location;
        window.sessionStorage.setItem(
          "loginInformaion",
          JSON.stringify(beforeData)
        );
        console.log(location);
      })
      .catch(error => {
        alert("Error ocurred");
        this.setState({ isActive: true });
        // handle your error
      });
  };
  render() {
    if (JSON.parse(window.sessionStorage.getItem("loginInformaion")) != null) {
      return (
        <LoadingOverlay
          active={!this.state.isActive}
          spinner
          text={loadingText}
          className="spinner"
        >
          <div className="subDiv">
            <MyDropzone receiveFile={file => this.receiveFile(file)} />
            <label id="imageUrl">{this.state.location}</label>
            <div className="imageView">
              <img src={this.state.location} alt="" />
            </div>
            {this.state.plyLocation !== "" ? (
              <div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={this.state.plyLocation + ".ply"}
                  id="imageUrl"
                >
                  {this.state.plyLocation + ".ply"}
                </a>
                <a
                  href={this.state.plyLocation + ".jpg"}
                  rel="noopener noreferrer"
                  target="_blank"
                  id="imageUrl"
                >
                  {this.state.plyLocation + ".jpg"}
                </a>
              </div>
            ) : (
              <div />
            )}
            <div className="buttonGroup">
              <button onClick={this.uploadAnother}>Upload another</button>
              <button onClick={this.downPly}>Down ply</button>
            </div>
          </div>
        </LoadingOverlay>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
