import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import "./first.scss";
class First extends React.Component {
  render() {
    return (
      <div className="firstContainer">
        <div id="iwrg">
          <meta name="viewport" content="width=device-width" />
          <Menu right isOpen={false}>
            <a href="#" className="menu-item navbar-menu-link">
              HOME
            </a>
            <a href="#" className="menu-item navbar-menu-link">
              ABOUT
            </a>
            <a href="#" className="menu-item navbar-menu-link">
              DEMO
            </a>
            <a href="/login" className="menu-item navbar-menu-link">
              SIGN IN
            </a>
            <a href="#" className="menu-item navbar-menu-link">
              CONTACT
            </a>
          </Menu>
          <div className="container-width">
            <div className="logo-container" />
            <nav className="menu" id="i77n" />
            <div className="clearfix" />

            <div data-gjs="navbar" className="navbar">
              <div className="navbar-container">
                <a href="/" className="navbar-brand">
                  <div id="inaj">NSFCAREER.IO</div>
                </a>
                <div id="iiv4l" ref="iiv41" className="navbar-burger">
                  <div className="navbar-burger-line" />
                  <div className="navbar-burger-line" />
                  <div className="navbar-burger-line" id="igmlg" />
                </div>
                <div data-gjs="navbar-items" className="navbar-items-c">
                  <nav data-gjs="navbar-menu" className="navbar-menu" />
                </div>
              </div>
            </div>
            <div className="lead-title" id="iafn2">
              CAREER: Multiscale Modeling of Axonal Fiber Bundles in the Brain
              <strong id="iccv4r-2">
                <br />
              </strong>
            </div>
            <div className="flex-desc" id="i8qo4l">
              NSF CAREER Project, PI: Reuben H. Kraft, Ph.D., Award Number:
              1846059
              <br />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cell" />
        </div>
        <div className="row" id="i2wmy">
          <div className="cell" id="i92tj">
            <div className="flex-desc" id="iurff">
              Funding Provided By:
              <br />
            </div>
            <img id="ihaa3" alt="" src="/img/image1.png" />
          </div>
        </div>
      </div>
    );
  }
}
export default compose(
  connect(
    null,
    null
  )
)(First);
