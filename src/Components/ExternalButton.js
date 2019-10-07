import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

class ExternalButton extends Component {
  render() {
    const { url, text, variant } = this.props;
    return (
      <Button
        variant={variant}
        onClick={() => {
          window.open(
            `${url}`,
            "_blank" // <- This is what makes it open in a new window.
          );
        }}
      >
        {text} <FaExternalLinkAlt />
      </Button>
    );
  }
}

ExternalButton.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string
};

export default ExternalButton;
