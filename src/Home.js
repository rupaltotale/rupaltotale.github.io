//import liraries
import React, { Component } from 'react';
import { Container, Row, Col, Image, Jumbotron, FormControl, Button } from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';
import Select from 'react-select';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';

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

	renderSubmitButton() {
		return (
			<Button style={{ float: 'right' }} variant="primary" type="submit">
				Submit
			</Button>
		);
	}

	renderContactMe() {
		return (
			<div>
				<h2>Contact Me</h2>
				<Jumbotron>
					<form
						accept-charset="UTF-8"
						action="https://usebasin.com/f/845c279d47ef"
						enctype="multipart/form-data"
						method="POST"
						// onSubmit={this.handleSubmit.bind(this)}
					>
						{/* Name */}
						<label>Full Name*</label>
						<FormControl
							type="textarea"
							name="name"
							placeholder="Jane Doe..."
							className="mr-sm-2"
							required
						/>
						{/* Message */}
						<label>Message*</label>
						<FormControl
							as="textarea"
							rows="3"
							name="message"
							placeholder="Jane Doe..."
							className="mr-sm-2"
							required
						/>
						{/* Email */}
						<label>Email*</label>
						<FormControl
							type="textarea"
							name="email"
							placeholder="foo@bar.com"
							className="mr-sm-2"
							required
						/>
						{/* Rating*/}
						<label>Rate the site?</label>
						<Select
							options={[
								{ label: '1 - Needs improvement', value: 1 },
								{ label: '2 - No comment', value: 2 },
								{ label: '3 - Good to go', value: 3 }
							]}
							name="rating"
						/>
						<br />
						{/* Social icons and Submit Button */}
						<Row>
							<Col xs md={1}>
								<SocialIcon
									url="https://www.linkedin.com/in/rupal-totale-098360141/"
									target="_blank"
									rel="noopener noreferrer"
								/>
							</Col>
							<Col xs md={1}>
								<SocialIcon
									url="https://github.com/rupaltotale"
									target="_blank"
									rel="noopener noreferrer"
								/>
							</Col>
							<Col xs md={1}>
								<SocialIcon
									url="mailto:rupaltotale@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
								/>
							</Col>
							<Col xs md={{ span: 3, offset: 6 }}>
								{this.renderSubmitButton()}
							</Col>
						</Row>
					</form>
				</Jumbotron>
			</div>
		);
	}
	render() {
		return (
			<div className="container">
				{this.renderAboutMe()}
				{this.renderContactMe()}
			</div>
		);
	}
}

//make this component available to the app
export default Home;
