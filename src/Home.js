//import liraries
import React, { Component } from "react";
import { Container, Row, Col, Image, Jumbotron, FormControl } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import Select from "react-select";

// create a component
class Home extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  renderAboutMe() {
    const MyPhoto = require("./picture.png");
    return (
      <div>
        <h2>About Me</h2>
        <Jumbotron>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <h5>Hi, I am Rupal.</h5>
                <p>I am a computer science student at Cal Poly presently.</p>
                <p>
                  I like to work on interesting coding projects, teach, hike,
                  and read classic fiction. Besides computer sicence, I deeply
                  enjoy math, philosophy, and history.
                </p>
                <p>
                  Feel free to explore the projects I have worked on, the
                  classes I have taken, and the places I have worked at over the
                  last two years on this website. If you have any suggestions
                  for me, please do reach out to me (contact details{" "}
                  <FaArrowDown />
                  )!
                </p>
              </Col>
              <Col xs={6} md={4}>
                <Image src={MyPhoto} roundedCircle fluid />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
  render() {
    return (
      <div className="container">
        {this.renderAboutMe()}
        <h2>Get in touch with me</h2>
        <Jumbotron>
		<form>
				{/* Name */}
				<label>Full Name*</label>
				<FormControl
                type="textarea"
                placeholder="Jane Doe..."
                className="mr-sm-2"
              />
				{/* Seasoning(s) */}
				<label>Message*</label>
				<FormControl as="textarea" rows="3" />
				{/* Condiment(s) */}
				<label>Rate the site?</label>
				<Select
					options={[ { label: 1, value: 1 }, { label: 2, value: 2 }, { label: 3, value: 3 } ]}
				/>
				<br />
				{/* Submit Button */}
				<input type="button" value="Submit" onClick={() => {} } style={{float: "right"}}/>
			</form>
        </Jumbotron>
      </div>
    );
  }
}

//make this component available to the app
export default Home;
