import React, { Component } from "react";
import PropTypes from "prop-types";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import Description from "./Description";
import Tags from "./Tags";

class JumboListing extends Component {
  renderTimePeriod() {
    return (
      <p>
        <FaCalendarAlt />
        <i>{` ${this.props.startTime}`}</i>
        <i>{this.props.endTime ? ` - ${this.props.endTime}` : ""}</i>
      </p>
    );
  }

  render() {
    const { description, tags } = this.props;
    return (
      <Jumbotron className={this.props.type === "ShadowBox" ? "jumbo" : ""}>
        <Container>
          <h3>{this.props.title}</h3>
          {this.renderTimePeriod()}
          <hr />
          <Row>
            <Col xs={12} md={5}>
              {this.props.gallery}
            </Col>
            <Col xs={12} md={7}>
              <Description description={description}></Description>
            </Col>
          </Row>
          <hr />
          <Tags tags={tags}></Tags>
          {/* <ExternalButton
            url="#"
            text="Learn More"
            variant="primary"
          ></ExternalButton> */}
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
  startTime: PropTypes.string.isRequired,
  // Optional
  endTime: PropTypes.string,
  sourceCodeUrl: PropTypes.string,
  type: PropTypes.oneOf(["GrayBox", "ShadowBox"])
};

export default JumboListing;
