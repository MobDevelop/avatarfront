import React from "react";
import "./index.scss";
import { Redirect } from "react-router-dom";
import url from "../url.js";
import LoadingOverlay from "react-loading-overlay";
import Header from "../Header";
import axios from "axios";
export class ShowAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      isActive: true
    };
    this.upload = {};
  }
  componentDidMount() {
    fetch(`//` + url + `/getAllUsers`, {
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
        this.setState({ users: resp });
      });
  }
  uploadImage(username) {
    console.log(username);
    //console.log(this.upload.files[0], username);
    const formData = new FormData();
    formData.append("file", this.upload[username].files[0]);
    formData.append("user", username);
    this.setState({ isActive: false });
    axios
      .post(`//` + url + `/uploadImage`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(async response => {
        // handle your response;
        fetch(`//` + url + `/getAllUsers`, {
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
            this.setState({ users: resp, isActive: true });
          });
      })
      .catch(error => {
        alert("Error ocurred");
        this.setState({ isActive: true });
        // handle your error
      });
  }
  urlOpen(url) {
    if (url === "") {
      alert(
        "A picture needs to be uploaded before creating an avatar. Please upload an image."
      );
      return;
    }
    window.open(url, "_blank");
  }
  render() {
    if (JSON.parse(window.sessionStorage.getItem("loginInformaion")) != null) {
      if (
        JSON.parse(window.sessionStorage.getItem("loginInformaion")).role === 1
      ) {
        if (this.state.users !== null && this.state.users !== undefined) {
          console.log(this.state.users);
          return (
            <LoadingOverlay
              active={!this.state.isActive}
              spinner
              text="Please wait..."
            >
              <meta name="viewport" content="width=device-width" />
              <Header />
              <div className="showContainer">
                <div className="myRow">
                  {this.state.users.map((user, num) => {
                    return (
                      <div className="myCol" key={num}>
                        <div className="card">
                          <div>
                            <label>{user.firstname + " "}</label>
                            <label>{user.lastname}</label>
                          </div>
                          <div>
                            <img
                              alt=""
                              src={user.originalImagePath}
                              className="imageStyle"
                            />
                          </div>

                          <div>
                            <input
                              type="file"
                              ref={ref => (this.upload[user.username] = ref)}
                              onChange={e => this.uploadImage(user.username)}
                              style={{ display: "none" }}
                            />
                            <button
                              onClick={e => this.upload[user.username].click()}
                            >
                              Upload Image
                            </button>
                            <button onClick={() => this.urlOpen(user.plyPath)}>
                              Download Zip
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </LoadingOverlay>
          );
        } else {
          return (
            <LoadingOverlay
              active={!this.state.isActive}
              spinner
              text="Please wait..."
              className="spinner"
            />
          );
        }
      } else {
        return <Redirect to="/" />;
      }
    } else {
      return <Redirect to="/" />;
    }
  }
}
