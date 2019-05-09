import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./index.scss";
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="hamMenu">
          <Menu right isOpen={false}>
            <a href="/" className="menu-item navbar-menu-link">
              HOME
            </a>
            <a href="/" className="menu-item navbar-menu-link">
              ABOUT
            </a>
            <a href="/" className="menu-item navbar-menu-link">
              DEMO
            </a>
            <a href="/login" className="menu-item navbar-menu-link">
              SIGN IN
            </a>
            <a href="/" className="menu-item navbar-menu-link">
              CONTACT
            </a>
          </Menu>
        </div>
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
              <nav data-gjs="navbar-menu" className="navbar-menu">
                <a href="/" className="navbar-menu-link">
                  HOME
                </a>
                <a href="/" className="navbar-menu-link">
                  ABOUT
                </a>
                <a href="/" className="navbar-menu-link">
                  DEMO
                </a>
                <a href="/login" className="navbar-menu-link">
                  SIGN IN
                </a>
                <a href="/" className="navbar-menu-link">
                  CONTACT
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
