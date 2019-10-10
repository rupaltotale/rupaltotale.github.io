import React, { Component } from "react";
import PropTypes from "prop-types";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import Description from "./Description";
import Tags from "./Tags";
import TimePeriod from "./TimePeriod";

class JumboListing extends Component {
  render() {
    const { description, tags } = this.props;
    return (
      <Jumbotron
        className={
          this.props.type === "ShadowBox" ? "jumbo-shadow" : "jumbo-gray"
        }
      >
        <Container>
          <h3>{this.props.title}</h3>
          <TimePeriod
            startTime={this.props.startTime}
            endTime={this.props.endTime}
          />
          <hr />
          <Row>
            {this.props.gallery && (
              <Col xs={12} md={5}>
                {this.props.gallery}
              </Col>
            )}
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
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  startTime: PropTypes.string.isRequired,
  // Optional
  gallery: PropTypes.element,
  endTime: PropTypes.string,
  sourceCodeUrl: PropTypes.string,
  type: PropTypes.oneOf(["GrayBox", "ShadowBox"])
};

export default JumboListing;