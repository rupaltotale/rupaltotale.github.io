import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Description from "./Description";
import Tags from "./Tags";
import ExternalButton from "./ExternalButton";

// create a component

class CardListing extends Component {
  render() {
    const { description, tags } = this.props;
    return (
      <Card bg="light">
        <Card.Img variant="top" src={this.props.galleryUrl} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <Description description={description}></Description>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          <Tags tags={tags}></Tags>
          <ExternalButton
            text="Source Code"
            url="https://github.com/"
            variant="dark"
          ></ExternalButton>
        </Card.Footer>
      </Card>
    );
  }
}

CardListing.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  galleryUrl: PropTypes.string.isRequired,
  // Optional
  sourceCodeUrl: PropTypes.string
};
//make this component available to the app
export default CardListing;
