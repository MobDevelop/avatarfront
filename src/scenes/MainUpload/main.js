import React from "react";
import "./main.scss";
import axios from "axios";
import url from "../url.js";
import { Redirect } from "react-router-dom";
import { MyDropzone } from "../Dropzone/MyDropZone.js";
import LoadingOverlay from "react-loading-overlay";
import Header from "../Header";
let loadingText = "Please wait";
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      plyLocation: "",
      isActive: true
    };

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
        console.log(response);
        const location = response.data.imagePath;
        const plyPath = response.data.plyPath;
        this.setState({
          location: location,
          plyLocation: plyPath,
          isActive: true
        });
        let beforeData = JSON.parse(
          window.sessionStorage.getItem("loginInformaion")
        );
        beforeData.originalImagePath = location;
        beforeData.plyPath = plyPath;
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
      if (
        JSON.parse(window.sessionStorage.getItem("loginInformaion")).role === 0
      ) {
        return (
          <LoadingOverlay
            active={!this.state.isActive}
            spinner
            text={loadingText}
          >
            <Header />
            <div className="spinner">
              <div className="subDiv">
                <MyDropzone receiveFile={file => this.receiveFile(file)} />

                {/*<a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={this.state.location}
                  id="imageUrl"
                >
                  Download Original Image
                </a>*/}
                <div className="imageView">
                  <img src={this.state.location} alt="" />
                </div>
                {this.state.plyLocation !== "" ? (
                  <div>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={this.state.plyLocation}
                      id="imageUrl"
                    >
                      Download zip
                    </a>
                  </div>
                ) : (
                  <div />
                )}
                <div className="buttonGroup">
                  {/* <button onClick={this.uploadAnother}>Upload another</button> */}
                  {/*<button onClick={e => this.downPly(e)}>Down ply</button>*/}
                </div>
              </div>
            </div>
          </LoadingOverlay>
        );
      } else {
        return <Redirect to="/" />;
      }
    } else {
      return <Redirect to="/" />;
    }
  }
}
