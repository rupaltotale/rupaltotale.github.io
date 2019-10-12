import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";

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
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.searchStart = el;
          }}
        ></div>
        <h1
          style={{ textAlign: "center" }}
        >{`Search Results for ${this.parsed.tagLabel}`}</h1>
        <hr></hr>
        {this.state.experiences.length > 0 && (
          <div>
            <h2> {`Experiences related to ${this.parsed.tagLabel}`} </h2>
            <Experience experiences={this.state.experiences} />
          </div>
        )}
        {this.state.education.length > 0 && (
          <div>
            <h2> {`Course work related to ${this.parsed.tagLabel}`} </h2>
            <Education education={this.state.education} showInfo={false} />
          </div>
        )}
        {this.state.projects.length > 0 && (
          <div>
            <h2> {`Projects related to ${this.parsed.tagLabel}`} </h2>
            <Projects projects={this.state.projects} />
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
