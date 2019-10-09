import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import { Navbar, Nav, Form, Button, Row, Col } from "react-bootstrap";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import API from "./API";
import Select from "react-select";
import { SocialIcon } from "react-social-icons";

class App extends Component {
  state = {
    experiences: [],
    education: [],
    projects: []
  };

  componentDidMount() {
    const api = new API();
    api.get("Experiences", experiences => {
      console.log(experiences);
      this.setState({ experiences });
    });
    api.get("Education", education => {
      console.log(education);
      this.setState({ education });
    });
    api.get("Projects", projects => {
      console.log(projects);
      this.setState({ projects });
    });
  }
  renderNavBar() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        // className="navbar"
      >
        {/* <NavLink to="/home"> */}
        <Navbar.Brand href="/">Rupal Totale</Navbar.Brand>
        {/* </NavLink> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/home">
              <Nav.Link href="/home">Home</Nav.Link>
            </NavLink>
            <NavLink to="/education">
              <Nav.Link href="/education">Education</Nav.Link>
            </NavLink>

            <NavLink to="/experience">
              <Nav.Link href="/experience">Experience</Nav.Link>
            </NavLink>

            <NavLink to="/projects">
              <Nav.Link href="/projects">Projects</Nav.Link>
            </NavLink>
          </Nav>
          {/* {this.renderSearch()} */}
        </Navbar.Collapse>
      </Navbar>
    );
  }

  renderSearch() {
    return (
      <Form inline>
        <Select
          options={[
            {
              label: "Java",
              value: "java"
            },
            { label: "Python", value: "python" },
            { label: "JavaScript", value: "javascript" }
          ]}
          name="rating"
          styles={{
            container: (provided, state) => ({
              ...provided,
              width: 150,
              margin: 5
            })
          }}
          className="mr-sm-3"
          // isMulti
        />
        <Button variant="success">Search</Button>
      </Form>
    );
  }

  renderContent() {
    /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */

    return (
      <Switch>
        <Route path="/education">
          <Education education={this.state.education}></Education>
        </Route>
        <Route path="/experience">
          <Experience experiences={this.state.experiences} />
        </Route>
        <Route path="/projects">
          <Projects projects={this.state.projects} />
        </Route>
        <Route path="/home" component={Home} />

        {/* If none of the previous routes render anything,
      this route acts as a fallback.
      Important: A route with path="/" will *always* match
      the URL because all URLs begin with a /. So that's
      why we put this one last of all */}
        <Route path="/">
          <Redirect to="/home" component={Home} />
        </Route>
      </Switch>
    );
  }
  renderSocialIcons() {
    const socialMediaUrls = [
      "https://www.linkedin.com/in/rupal-totale-098360141/",
      "https://github.com/rupaltotale",
      "mailto:rupaltotale@gmail.com"
    ];
    return (
      <div>
        {socialMediaUrls.map((url, index) => {
          return (
            <SocialIcon
              url={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: 10 }}
            />
          );
        })}
        {/* <Col xs md={"auto"}>
          <ExternalButton
            text="Resume"
            url="https://drive.google.com/file/d/1vMm9cj3EDBEbwMzjvXXTM0f8K09bDTVb/view?usp=sharing"
            variant="secondary"
          ></ExternalButton>
        </Col> */}
      </div>
    );
  }
  renderFooter() {
    return (
      <div className="footer">
        {this.renderSocialIcons()}
        <h6>© Rupal Totale</h6>
      </div>
    );
  }

  render() {
    return (
      <div className="outer-container">
        <Router>
          {this.renderNavBar()}
          {this.renderContent()}
          {this.renderFooter()}
        </Router>
      </div>
    );
  }
}

export default App;
