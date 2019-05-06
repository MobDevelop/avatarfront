import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import Login from "../Login/login.js";
import Main from "../Main/main.js";
import { SignUp } from "../Signup/signup.js";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} displayType={0} />
          <Route path="/signup" exact component={SignUp} displayType={0} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  firstname: state.firstname,
  lastname: state.lastname,
  username: state.username,
  emailaddress: state.emailaddress,
  mobilephone: state.mobilephone,
  password: state.password
});

export default compose(
  connect(
    mapStateToProps,
    null
  )
)(Routes);
