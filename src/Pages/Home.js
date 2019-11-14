//import liraries
import React, { Component } from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import { FaArrowDown, FaCheckCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import ContactForm from "../Components/ContactForm";
import ProfilePicture from "../Images/picture.png";

// create a component
class Home extends Component {
  constructor(props) {
    super(props);
    this.submitted = false;
  }

  componentDidUpdate() {
    if (this.submitted) {
      window.scroll({ top: 2500, left: 0, behavior: "smooth" });
    }
  }

  renderAboutMe() {
    return (
      <div>
        <h2>About Me</h2>
        <Jumbotron className="jumbo-aboutme">
          <Container>
            <Row>
              <Col xs={12} md={3}>
                <Image src={ProfilePicture} roundedCircle fluid />
              </Col>
              <Col xs={12} md={9}>
                <h3 style={{ color: "wheat" }}>Hi, I am Rupal.</h3>
                <p>
                  {`I am a computer science student at Cal Poly presently. 
                  I have dabbled with web and app development in the past through hackathons, internships, and personal projects.
                  I would like to explore these areas further by working on interesting and meaningful coding projects in the future.`}
                </p>
                <p>
                  {`Besides coding, I deeply enjoy teaching, reading, and the simple things in life.`}{" "}
                </p>
                <p>
                  {`Feel free to explore the projects I have worked on, the
                  classes I have taken, and the places I have worked at over the
                  last two years on this website. If you would like to connect with me, don't hesitate to shoot me a quick message (contact details`}{" "}
                  <FaArrowDown />
                  {`)!`}
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }

  renderFormSubmitted(name, message, email, rating) {
    this.submitted = true;
    return (
      <Jumbotron
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h3>Form submitted successfully</h3>
        <IconContext.Provider
          value={{ color: "green", className: "global-class-name" }}
        >
          <div style={{ padding: 10 }}>
            <FaCheckCircle size={100} />
          </div>
        </IconContext.Provider>
        <hr />
        <h6 style={{ textAlign: "center" }}>
          Thank you for reaching out. I will get back to you through the
          provided email with a custom response in around 5 business days. Here
          is what was submitted:
        </h6>
        <br />
        <p>
          <b>Name: </b> {name}
        </p>
        <p>
          <b>Message: </b> {message}
        </p>
        <p>
          <b>Email: </b> {email}
        </p>
        <p>
          <b>Rating: </b> {rating ? rating : "Not any"}
        </p>
      </Jumbotron>
    );
  }

  render() {
    const queryString = require("query-string");
    const parsed = queryString.parse(this.props.location.search);
    return (
      <div className="container">
        {this.renderAboutMe()}

        <h2 className={"sectionHeadingForHome"}>Contact Me</h2>
        {parsed.submit ? (
          this.renderFormSubmitted(
            parsed["?name"],
            parsed.message,
            parsed.email,
            parsed.rating
          )
        ) : (
          <ContactForm />
        )}
      </div>
    );
  }
}

//make this component available to the app
export default Home;
