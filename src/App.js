import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  CardDeck
} from "react-bootstrap";
import Home from "./Home";
import CardListing from "./CardListing";
import JumboListing from "./JumboListing";
import Education from "./Education";
import Projects from "./Projects";

function Experience() {
  return <h2>Experience</h2>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Link to="/">
            <Navbar.Brand href="/">Rupal Totale</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">
                <Nav.Link href="/">Home</Nav.Link>
              </Link>
              <Link to="/education">
                <Nav.Link href="/education">Education</Nav.Link>
              </Link>

              <Link to="/experience">
                <Nav.Link href="/experience">Experience</Nav.Link>
              </Link>

              <Link to="/projects">
                <Nav.Link href="/projects">Projects</Nav.Link>
              </Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          {/* This needs to be last */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
