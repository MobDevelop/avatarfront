import React from "react";
import "./index.scss";
import { Redirect } from "react-router-dom";
import url from "../url.js";
import LoadingOverlay from "react-loading-overlay";
export class ShowAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
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
  render() {
    if (JSON.parse(window.sessionStorage.getItem("loginInformaion")) != null) {
      if (
        JSON.parse(window.sessionStorage.getItem("loginInformaion")).role === 1
      ) {
        if (this.state.users !== null && this.state.users !== undefined) {
          console.log(this.state.users);
          return (
            <div className="showContainer">
              <div className="myRow">
                {this.state.users.map((user, num) => {
                  return (
                    <div className="myCol" key={num}>
                      <div>
                        <div>
                          <label>{user.firstname + " "}</label>
                          <label>{user.lastname}</label>
                        </div>
                        <img
                          alt=""
                          src={user.originalImagePath}
                          className="imageStyle"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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
