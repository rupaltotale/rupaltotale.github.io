import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import API from "./API";
import { SocialIcon } from "react-social-icons";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ScrollToTop from "./Components/ScrollToTop";
import SearchResults from "./Pages/SearchResults";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.api = new API();
  }

  state = {
    experiences: [],
    education: [],
    projects: [],
    loading: true,
    redirectToSearch: false,
    selectedTag: null
  };

  componentDidMount() {
    this.api.get("Experiences", experiences => {
      this.setState({ experiences });
    });
    this.api.get("Education", education => {
      this.setState({ education });
    });
    this.api.get("Projects", projects => {
      this.setState({ projects });
    });
  }

  renderNavBar() {
    const { experiences, education, projects } = this.state;
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
            <NavLink
              to="/home"
              className={"navlink"}
              activeClassName={"navlink-active"}
            >
              Home
            </NavLink>
            <NavLink
              to="/education"
              className={"navlink"}
              activeClassName={"navlink-active"}
            >
              Education
            </NavLink>
            <NavLink
              to="/experience"
              className={"navlink"}
              activeClassName={"navlink-active"}
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={"navlink"}
              activeClassName={"navlink-active"}
            >
              Projects
            </NavLink>
          </Nav>
          <SearchBar
            options={this.api.getUniqueTags(
              experiences.length && education.length && projects.length
            )}
          ></SearchBar>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  renderActivityIndicator() {
    const { experiences, projects, education } = this.state;
    if (!experiences.length && !projects.length && !education.length) {
      return (
        <Loader
          type="TailSpin"
          color="#111111"
          height={100}
          width={100}
          timeout={0}
          className={"activityIndicator"}
        />
      );
    }
    return null;
  }

  renderContent() {
    /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
    const { experiences, projects, education } = this.state;
    return (
      <Switch>
        <Route
          path="/experience"
          render={props => <Experience {...props} experiences={experiences} />}
        />
        <Route
          path="/education"
          render={props => <Education {...props} education={education} />}
        />
        <Route
          path="/projects"
          render={props => <Projects {...props} projects={projects} />}
        />
        <Route
          path="/search"
          render={props => (
            <SearchResults
              {...props}
              experiences={experiences}
              education={education}
              projects={projects}
            />
          )}
        ></Route>
        <Route path="/home" component={Home} />

        {/* If none of the previous routes render anything,
      this route acts as a fallback. */}
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
              key={`social-icon-${index}`}
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
      <footer className="footer">
        {this.renderSocialIcons()}
        <h6>© Rupal Totale</h6>
      </footer>
    );
  }

  render() {
    return (
      <div className="outer-container">
        <Router>
          <ScrollToTop>
            {this.renderNavBar()}
            {this.renderActivityIndicator()}
            {this.renderContent()}
            {this.renderFooter()}
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
