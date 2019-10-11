import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Experience from "./Experience";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.queryString = require("query-string");
    this.parsed = this.queryString.parse(this.props.location.search);
  }
  state = {
    experiences: [],
    selectedTag: {}
  };

  componentWillReceiveProps() {
    console.log(this.parsed.tagValue);
    const experiences = _.filter(this.props.experiences, experience => {
      console.log(experience);
      return (
        experience.tags
          .map(tag => {
            return tag.value;
          })
          .indexOf(this.parsed.tagValue) > -1
      );
    });
    this.setState({ experiences });
  }

  render() {
    return (
      <div className="container">
        <h1>{`Search Results for ${this.parsed.tagLabel}`}</h1>
        <Experience experiences={this.state.experiences} />
      </div>
    );
  }
}

SearchResults.propTypes = {};

export default SearchResults;
