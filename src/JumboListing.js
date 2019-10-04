import React, { Component } from "react";
import PropTypes from "prop-types";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

class JumboListing extends Component {
  renderDescription() {
    return this.props.description.map((item, index) => {
      return (
        <p key={"description-" + index}>
          <FaCheck /> <span>{item}</span>
        </p>
      );
    });
  }

  render() {
    return (
      <Jumbotron className={this.props.type === "ShadowBox" ? "jumbo" : ""}>
        <Container>
          <h3>{this.props.title}</h3>
          <Row>
            <Col xs={12} md={5}>
              {this.props.gallery}
            </Col>
            <Col xs={12} md={7}>
              {this.renderDescription()}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

JumboListing.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  gallery: PropTypes.element.isRequired,
  // Optional
  sourceCodeUrl: PropTypes.string,
  type: PropTypes.oneOf(["GrayBox", "ShadowBox"])
};

export default JumboListing;
