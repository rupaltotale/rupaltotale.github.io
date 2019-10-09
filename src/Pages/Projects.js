import React, { Component } from "react";
import PropTypes from "prop-types";
import { CardDeck, Card } from "react-bootstrap";
import CardListing from "../Components/CardListing";
import ProjectPicture from "../Images/project.png";

export default class Projects extends Component {
  renderProjects() {
    const decks = []
    let children = []
    this.props.projects.map((project, index) => {
      children.push(<CardListing
        key={`project-${index}`}
        title={project.title}
        description={project.description}
        tags={project.tags}
        sourceCodeUrl={project.url ? project.url : null}
        startTime={project.startTime}
        galleryUrl={project.gallery ? project.gallery : ProjectPicture}
      />)
      if (index % 2) {
        decks.push(<CardDeck style={{margin:20}}>{children}</CardDeck>)
        children = []
      }
    });
    decks.push(<CardDeck style={{margin:20}}>{children}</CardDeck>)
    return (
      <div>
        {decks}
      </div>
    );
  }
  render() {
    return (
      <div className="container">
        <br />
        {this.renderProjects()}
        <br></br>
      </div>
    );
  }
}
Projects.propTypes = {
  projects: PropTypes.array
};
