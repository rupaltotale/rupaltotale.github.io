import React, { Component } from "react";

import PropTypes from "prop-types";

class Heading extends Component {
  render() {
    if (this.props.type === "h2") {
      return (
        <React.Fragment>
          <h2>{this.props.heading}</h2>
          <hr></hr>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>{this.props.heading}</h1>
        <hr className={"style-one"}></hr>
      </React.Fragment>
    );
  }
}

Heading.propTypes = {
  heading: PropTypes.string,
  type: PropTypes.string
};

export default Heading;
