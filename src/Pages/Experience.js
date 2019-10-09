import React, { Component } from "react";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";
import JumboListing from "../Components/JumboListing";

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
              style={{ padding: 10 }}
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
        <h1>Experiences</h1>
        {this.renderExperiences()}
      </div>
    );
  }
}

Experience.propTypes = {
  experiences: PropTypes.array
};

export default Experience;
