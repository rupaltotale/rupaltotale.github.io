import React, { Component } from "react";
import PropTypes from "prop-types";
import JumboListing from "./JumboListing";
import { Image } from "react-bootstrap";
import Tabletop from "tabletop";
import API from "./API";

class Experience extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    experiences: []
  };

  componentDidMount() {
    const api = new API();
    api.getExperiences(experiences => {
      console.log(experiences);
      this.setState({ experiences: experiences });
    });
  }

  renderExperiences() {
    return this.state.experiences.map((experience, index) => {
      return (
        <JumboListing
          key={`experience-${index}`}
          title={experience.title}
          description={experience.description}
          tags={experience.tags}
          gallery={
            // `./${experience.gallery}.png`
            <Image src={experience.gallery} fluid rounded></Image>
          }
          sourceCodeUrl={"https://github.com/rupaltotale"}
          type={"ShadowBox"}
        />
      );
    });
  }

  render() {
    const MyPhoto = require("./project.png");
    return (
      <div className="container">
        <br></br>
        {this.renderExperiences()}
      </div>
    );
  }
}

Experience.propTypes = {};

export default Experience;
