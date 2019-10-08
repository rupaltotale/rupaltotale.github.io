//import liraries
import React, { Component } from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import { FaArrowDown, FaCheckCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import ContactForm from "../Components/ContactForm";
import ProfilePicture from "../Images/picture.png";
import { SocialIcon } from "react-social-icons";

// create a component
class Home extends Component {
  constructor(props) {
    super(props);
    this.submitted = false;
  }

  componentDidUpdate() {
    if (this.submitted) {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  }

  renderSocialIcons() {
    const socialMediaUrls = [
      "https://www.linkedin.com/in/rupal-totale-098360141/",
      "https://github.com/rupaltotale",
      "mailto:rupaltotale@gmail.com"
    ];
    return (
      <Row className="justify-content-center">
        {socialMediaUrls.map((url, index) => {
          return (
            <Col xs md={2} key={`social-media-${index}`}>
              <SocialIcon url={url} target="_blank" rel="noopener noreferrer" />
            </Col>
          );
        })}
        {/* <Col xs md={"auto"}>
          <ExternalButton
            text="Resume"
            url="https://drive.google.com/file/d/1vMm9cj3EDBEbwMzjvXXTM0f8K09bDTVb/view?usp=sharing"
            variant="secondary"
          ></ExternalButton>
        </Col> */}
      </Row>
    );
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
                <h5>Hi, I am Rupal.</h5>
                <p>
                  {`I am a computer science student at Cal Poly presently. 
                  I have dabbled with web and app development in the past through hackathons, internships, and personal projects.
                  I would like to further explore these areas in the future by working on interesting and meaningful coding projects.`}
                </p>
                <p>{`Besides coding, I deeply enjoy teaching, reading, and star gazing.`}</p>
                <p>
                  {`Feel free to explore the projects I have worked on, the
                  classes I have taken, and the places I have worked at over the
                  last two years on this website. If you would like to connect with me, don't hesitate to shoot me a quick message (contact details`}{" "}
                  <FaArrowDown />
                  {`)!`}
                </p>
              </Col>
            </Row>
            <hr></hr>
            {this.renderSocialIcons()}
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

        <h2>Contact Me</h2>
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
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        ></div>
      </div>
    );
  }
}

//make this component available to the app
export default Home;
