import React from "react";
import "./login.scss";
import { connect } from "react-redux";
import url from "../url.js";
import userType from "../Actions";
import { compose } from "recompose";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }
  loginFunc = e => {
    var formData = {};
    formData["username"] = this.refs.l_username.value;
    formData["password"] = this.refs.l_password.value;
    fetch(`//` + url + `/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(response => {
        alert(response.status);
        if (response.code === 2) {
          this.saveUser(response.data);
          window.sessionStorage.setItem(
            "loginInformaion",
            JSON.stringify(response.data)
          );
          this.setState({ login: true });
        }
      });
    e.preventDefault();
  };
  saveUser = data => {
    this.props.saveUser(userType.SET_USER, data);
  };
  render() {
    if (this.state.login === true) {
      if (
        JSON.parse(window.sessionStorage.getItem("loginInformaion")).role === 1
      )
        return <Redirect to="/showall" />;
      else return <Redirect to="/main" />;
    } else {
      return (
        <div className="mainDiv">
          <form className="loginDiv" onSubmit={this.loginFunc}>
            <input
              type="text"
              id="l_username"
              className="formInput"
              placeholder="User name"
              ref="l_username"
              required
            />
            <input
              type="text"
              id="l_password"
              className="formInput"
              placeholder="Password"
              ref="l_password"
              required
            />
            <button id="loginButton" className="formInput">
              Login
            </button>
            <div className="textDiv">
              Not registered?
              <a id="signup" href="signup">
                Create an account
              </a>
            </div>
          </form>
        </div>
      );
    }
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveUser: (type, userData) => {
      dispatch({
        type: type,
        userData
      });
    }
  };
};
export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Login);
