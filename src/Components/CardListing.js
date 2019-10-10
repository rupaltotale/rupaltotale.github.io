import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Description from "./Description";
import Tags from "./Tags";
import ExternalButton from "./ExternalButton";
import TimePeriod from "./TimePeriod";
// create a component

class CardListing extends Component {
  render() {
    const { description, tags } = this.props;
    return (
      <Card bg="light">
        <a
          href={this.props.galleryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card.Img
            variant="top"
            src={this.props.galleryUrl}
            className={"project-image"}
          />
        </a>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <TimePeriod
              startTime={this.props.startTime}
              endTime={this.props.endTime}
            />
            <Description description={description}></Description>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          <Tags tags={tags}></Tags>
          {this.props.sourceCodeUrl && (
            <ExternalButton
              text="Source Code"
              url={this.props.sourceCodeUrl}
              variant="dark"
            ></ExternalButton>
          )}
        </Card.Footer>
      </Card>
    );
  }
}

CardListing.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  galleryUrl: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  // Optional
  endTime: PropTypes.string,
  sourceCodeUrl: PropTypes.string
};
//make this component available to the app
export default CardListing;
