import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import "./first.scss";
class First extends React.Component {
  render() {
    return (
      <div className="firstDiv">
        <div className="header">
          <div className="leftTitle">
            <label>NSFCAREER.IO</label>
          </div>
          <div className="rightTitle">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">DEMO</a>
            <a href="login">SIGN IN</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
        <div className="subHeader">
          <label>
            CAREER: Multiscale Modeling of Axonal Fiber Bundles in the Brain
          </label>
        </div>
        <div className="smallHeader">
          <label>
            NSF CAREER Project, PI: Reuben H. Kraft, Ph.D., Award number:
            1846059
          </label>
        </div>
        <div className="fundingText">
          <label>Funding Provided By:</label>
        </div>
        <div className="imageView">
          <img alt="" src="/img/image1.png" />
          <img alt="" src="/img/image2.png" />
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
