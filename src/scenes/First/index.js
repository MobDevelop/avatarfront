import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import Header from "../Header";
import "./first.scss";
class First extends React.Component {
  render() {
    return (
      <div className="firstContainer">
        <div id="iwrg">
          <meta name="viewport" content="width=device-width" />
          <Header />
          <div className="container-width">
            <div className="logo-container" />
            <nav className="menu" id="i77n" />
            <div className="clearfix" />

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
