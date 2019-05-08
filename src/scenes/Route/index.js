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
import First from "../First";
import { Main } from "../MainUpload/main.js";
import { SignUp } from "../Signup/signup.js";
import { ShowAll } from "../ShowAll";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={First} displayType={0} />
          <Route path="/main" exact component={Main} displayType={0} />
          <Route path="/login" exact component={Login} displayType={0} />
          <Route path="/signup" exact component={SignUp} displayType={0} />
          <Route path="/showall" exact component={ShowAll} displayType={0} />
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
