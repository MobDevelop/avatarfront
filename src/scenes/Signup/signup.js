import React from "react";
import "./signup.scss";
import url from "../url.js";
export class SignUp extends React.Component {
  signupFunc = e => {
    var formData = {};
    formData["firstname"] = this.refs.s_firstname.value;
    formData["lastname"] = this.refs.s_lastname.value;
    formData["username"] = this.refs.s_username.value;
    formData["emailaddress"] = this.refs.s_emailaddress.value;
    formData["mobilephone"] = this.refs.s_mobilephone.value;
    formData["password"] = this.refs.s_password.value;
    console.log(formData);
    fetch(`//` + url + `/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(response => {
        // handle your response;
        alert(response.status);
        if (response.code === 2) this.props.history.push("/");
      })
      .catch(err => {
        alert(err);
      });
    e.preventDefault();
  };
  render() {
    return (
      <div className="signupPageDiv">
        <form className="signupDiv" onSubmit={this.signupFunc}>
          <input
            type="text"
            id="s_firstname"
            className="formInput"
            placeholder="First Name"
            ref="s_firstname"
            required
          />
          <input
            type="text"
            id="s_lastname"
            className="formInput"
            placeholder="Last Name"
            ref="s_lastname"
            required
          />
          <input
            type="text"
            id="s_username"
            className="formInput"
            placeholder="User Name"
            ref="s_username"
            required
          />
          <input
            type="text"
            id="s_emailaddress"
            className="formInput"
            placeholder="Email Address"
            ref="s_emailaddress"
            required
          />
          <input
            type="text"
            id="s_mobilephone"
            className="formInput"
            placeholder="Mobile Phone"
            ref="s_mobilephone"
            required
          />
          <input
            type="text"
            id="s_password"
            className="formInput"
            placeholder="Password"
            ref="s_password"
            required
          />
          <button id="signupButton" className="formInput">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
