import React, { Component } from "react";

import Education from "./Education";
import Experience from "./Experience";
import Heading from "../Components/Heading";
import Projects from "./Projects";
import PropTypes from "prop-types";
import _ from "lodash";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.queryString = require("query-string");
    this.parsed = this.queryString.parse(this.props.location.search);
  }
  state = {
    experiences: [],
    education: [],
    projects: [],
    selectedTag: {}
  };

  componentDidUpdate() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  componentWillReceiveProps(newProps) {
    this.parsed = this.queryString.parse(newProps.location.search);
    this.props = { ...newProps };
    this.componentDidMount();
  }

  filterData(data) {
    return (
      data.tags
        .map(tag => {
          return tag.value;
        })
        .indexOf(this.parsed.tagValue) > -1
    );
  }

  componentDidMount() {
    const experiences = _.filter(this.props.experiences, experience =>
      this.filterData(experience)
    );
    const education = _.filter(this.props.education, education =>
      this.filterData(education)
    );
    const projects = _.filter(this.props.projects, project =>
      this.filterData(project)
    );
    this.setState({
      experiences,
      education,
      projects
    });
  }

  render() {
    return (
      <div className="container">
        <Heading
          heading={`Search Results for ${this.parsed.tagLabel}`}
          type="h1"
        ></Heading>
        {this.state.education.length > 0 && (
          <div>
            <Education
              education={this.state.education}
              showInfo={false}
              heading={`Course work related to ${this.parsed.tagLabel}`}
            />
          </div>
        )}
        {this.state.experiences.length > 0 && (
          <div>
            <Experience
              experiences={this.state.experiences}
              heading={`Experiences related to ${this.parsed.tagLabel}`}
            />
          </div>
        )}
        {this.state.projects.length > 0 && (
          <div>
            <Projects
              projects={this.state.projects}
              heading={`Projects related to ${this.parsed.tagLabel}`}
            />
          </div>
        )}
      </div>
    );
  }
}

SearchResults.propTypes = {
  education: PropTypes.array,
  experiences: PropTypes.array,
  projects: PropTypes.array
};

export default SearchResults;
