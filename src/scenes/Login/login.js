import React from "react";
import "./login.scss";
import { connect } from "react-redux";
import url from "../url.js";
import userType from "../Actions";
import { compose } from "recompose";
class Login extends React.Component {
  constructor(props) {
    super(props);
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
        this.saveUser(response.data);
        window.sessionStorage.setItem(
          "loginInformaion",
          JSON.stringify(response.data)
        );
        console.log(
          JSON.parse(window.sessionStorage.getItem("loginInformaion")).firstname
        );
      });
    e.preventDefault();
  };
  saveUser = data => {
    this.props.saveUser(
      userType.SET_USER,
      data.firstname,
      data.lastname,
      data.username,
      data.emailaddress,
      data.mobilephone,
      data.password
    );
  };
  render() {
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
const mapDispatchToProps = dispatch => {
  return {
    saveUser: (
      type,
      firstname,
      lastname,
      username,
      emailaddress,
      mobilephone,
      password
    ) => {
      dispatch({
        type: type,
        firstname: firstname,
        lastname: lastname,
        username: username,
        emailaddress: emailaddress,
        mobilephone: mobilephone,
        password: password
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
