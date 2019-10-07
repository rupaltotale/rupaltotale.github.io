import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

class Description extends Component {
  render() {
    return this.props.description.map((item, index) => {
      return (
        <p key={"description-" + index}>
          <FaCheck /> <span>{item}</span>
        </p>
      );
    });
  }
}

Description.propTypes = {
  description: PropTypes.arrayOf(String)
};

export default Description;
