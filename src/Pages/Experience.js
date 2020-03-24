import React, { Component } from "react";

import Heading from "../Components/Heading";
import { Image } from "react-bootstrap";
import JumboListing from "../Components/JumboListing";
import PropTypes from "prop-types";

class Experience extends Component {
  // constructor(props) {
  //   super(props);
  // }

  renderExperiences() {
    return this.props.experiences.map((experience, index) => {
      return (
        <JumboListing
          key={`experience-${index}`}
          title={experience.title}
          description={experience.description}
          tags={experience.tags}
          gallery={
            // `./${experience.gallery}.png`
            <Image
              style={{ marginBottom: 10 }}
              src={experience.gallery}
              fluid
              rounded
            />
          }
          startTime={experience.startTime}
          endTime={experience.endTime}
          type={"ShadowBox"}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <Heading heading={this.props.heading} type="h2"></Heading>
        {this.renderExperiences()}
      </div>
    );
  }
}

Experience.propTypes = {
  experiences: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired
};

export default Experience;
