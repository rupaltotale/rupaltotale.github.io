import React, { Component } from "react";

import { CardDeck } from "react-bootstrap";
import CardListing from "../Components/CardListing";
import Heading from "../Components/Heading";
import ProjectPicture from "../Images/project.png";
import PropTypes from "prop-types";

export default class Projects extends Component {
  renderProjects() {
    const decks = [];
    let children = [];
    this.props.projects.map((project, index) => {
      children.push(
        <CardListing
          key={`project-item-${index}`}
          title={project.title}
          description={project.description}
          tags={project.tags}
          sourceCodeUrl={project.url ? project.url : null}
          startTime={project.startTime}
          endTime={project.endTime}
          galleryUrl={project.gallery ? project.gallery : ProjectPicture}
        />
      );
      if (index % 2) {
        decks.push(
          <CardDeck style={{ marginBottom: 30 }} key={`project-deck-${index}`}>
            {children}
          </CardDeck>
        );
        children = [];
      }
      return null;
    });
    decks.push(
      <CardDeck style={{ marginBottom: 30 }} key={`project-deck-${-1}`}>
        {children}
      </CardDeck>
    );
    return <div>{decks}</div>;
  }
  render() {
    return (
      <div className="container">
        <Heading heading={this.props.heading} type="h2"></Heading>
        {this.renderProjects()}
      </div>
    );
  }
}
Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  heading: PropTypes.string
};
