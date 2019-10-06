//import liraries
import React, { Component } from 'react';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import { FaArrowDown, FaCheckCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ContactForm from './ContactForm';

// create a component
class Home extends Component {
	//   constructor(props) {
	//     super(props);
	//   }
	renderAboutMe() {
		const MyPhoto = require('./picture.png');
		return (
			<div>
				<h2>About Me</h2>
				<Jumbotron className="jumbo-aboutme">
					<Container>
						<Row>
							<Col xs={12} md={3}>
								<Image src={MyPhoto} roundedCircle fluid />
							</Col>
							<Col xs={12} md={9}>
								<h5>Hi, I am Rupal.</h5>
								<p>{'I am a computer science student at Cal Poly presently.'}</p>
								<p>
									{`I like to work on interesting coding projects, teach, hike,
                  and read classic fiction. Besides computer sicence, I deeply
                  enjoy philosophy, and history.`}
								</p>
								<p>
									{`Feel free to explore the projects I have worked on, the
                  classes I have taken, and the places I have worked at over the
                  last two years on this website. If you have any suggestions
                  for me or exciting oppurtunities you believe I would be a good
                  fit for, please do reach out (contact details`}{' '}
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

	async handleSubmit(e) {
		e.preventDefault();
		// console.log('Submitting form');
		// const name = 'Jane Doe';
		// const email = 'janedoe.gmail.com';
		// const message = 'Lorem ipsum';
		// const form = await axios
		// 	.post('https://usebasin.com/f/845c279d47ef.json', {
		// 		name,
		// 		email,
		// 		message
		// 	})
		// 	.then((response) => {
		// 		if (response.data.msg === 'success') {
		// 			alert('Message Sent.');
		// 			this.resetForm();
		// 		} else if (response.data.msg === 'fail') {
		// 			alert('Message failed to send.');
		// 		}
		// 	});
	}

	renderFormSubmitted(name, message, email, rating) {
		return (
			<Jumbotron style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<h3>Form submitted successfully</h3>
				<IconContext.Provider value={{ color: 'green', className: 'global-class-name' }}>
					<div style={{ padding: 10 }}>
						<FaCheckCircle size={100} />
					</div>
				</IconContext.Provider>
				<hr />
				<h6 style={{ textAlign: 'center' }}>
					Thank you for reaching out. I will get back to you through the provided email with a custom response
					in around 5 business days. Here is what was submitted:
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
					<b>Rating: </b> {rating ? rating : 'Not any'}
				</p>
			</Jumbotron>
		);
	}

	render() {
		const queryString = require('query-string');
		const parsed = queryString.parse(this.props.location.search);
		console.log(parsed);
		return (
			<div className="container">
				{this.renderAboutMe()}

				<h2>Contact Me</h2>
				{parsed.submit ? (
					this.renderFormSubmitted(parsed['?name'], parsed.message, parsed.email, parsed.rating)
				) : (
					<ContactForm />
				)}
			</div>
		);
	}
}

//make this component available to the app
export default Home;
