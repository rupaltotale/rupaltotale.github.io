import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function Home() {
	console.log('here');
	return <h2>Home</h2>;
}

function Education() {
	return <h2>Education</h2>;
}

function Experience() {
	return <h2>Experience</h2>;
}

function Projects() {
	return <h2>Projects</h2>;
}

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<Navbar bg="dark" variant="dark" expand="lg">
						<Navbar.Brand href="/">Rupal Totale</Navbar.Brand>
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
								<FormControl type="text" placeholder="Search" className="mr-sm-2" />
								<Button variant="outline-success">Search</Button>
							</Form>
						</Navbar.Collapse>
					</Navbar>
				</nav>
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
			</div>
		</Router>
	);
}
