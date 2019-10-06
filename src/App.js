import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import API from './API';

class App extends Component {
	state = {
		experiences: []
	};

	componentDidMount() {
		const api = new API();
		api.getExperiences((experiences) => {
			console.log(experiences);
			this.setState({ experiences: experiences });
		});
	}

	render() {
		return (
			<Router>
				<Navbar bg="dark" variant="dark" expand="lg">
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
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/education" component={Education} />
					<Route path="/experience">
						<Experience experiences={this.state.experiences} />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/:home?" component={Home} />

					{/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
					<Route path="/">
						<Redirect to="/:home?" />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
