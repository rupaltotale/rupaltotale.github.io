import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Tags extends Component {
  searchForTag(selectedTag) {
    console.table(selectedTag);
    console.log(selectedTag[0].value);
    this.props.history.push(
      `/search?tagValue=${selectedTag[0].value}&tagLabel=${selectedTag[0].label}`
    );
  }
  renderTags() {
    return this.props.tags.map((tag, index) => {
      return (
        <span key={"tag-" + index}>
          <button
            className={"tag-button"}
            onClick={this.searchForTag.bind(this, [tag])}
          >
            {tag.label}
          </button>
          {/* {tag.label} */}
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

export default withRouter(Tags);
