import React, { Component } from "react";
import PropTypes from "prop-types";

class Tags extends Component {
  renderTags() {
    return this.props.tags.map((tag, index) => {
      return (
        <span key={"tag-" + index}>
          {index ? ", " : ""}
          {/* <a href="/">{tag}</a> */}
          {tag.value}
        </span>
      );
    });
  }

  render() {
    return (
      <p>
        <span style={{ fontWeight: 500 }}>{"Related Technologies: "}</span>
        {this.renderTags()}
      </p>
    );
  }
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(String)
};

export default Tags;
