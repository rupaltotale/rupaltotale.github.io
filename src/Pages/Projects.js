import React, { Component } from "react";
import PropTypes from "prop-types";
import { CardDeck } from "react-bootstrap";
import CardListing from "../Components/CardListing";
import ProjectPicture from "../Images/project.png";

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
      <CardDeck style={{ margin: 20 }} key={`project-deck-${-1}`}>
        {children}
      </CardDeck>
    );
    return <div>{decks}</div>;
  }
  render() {
    return (
      <div className="container">
        <h2 className={"sectionHeading"}>{this.props.heading}</h2>
        {this.renderProjects()}
      </div>
    );
  }
}
Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  heading: PropTypes.string
};
