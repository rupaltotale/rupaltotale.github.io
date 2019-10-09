import React, { Component } from "react";
import PropTypes from "prop-types";

class Tags extends Component {
  renderTags() {
    const sortedTags = this.props.tags.sort(function(tag1, tag2) {
      return tag1.toLowerCase().localeCompare(tag2.toLowerCase());
    });
    return sortedTags.map((tag, index) => {
      return (
        <span key={"tag-" + index}>
          {index ? ", " : ""}
          <a href="/">{tag}</a>
        </span>
      );
    });
  }

  render() {
    return (
      <p>
        <span>{"Tags: "}</span>
        {this.renderTags()}
      </p>
    );
  }
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(String)
};

export default Tags;
