import React, { Component } from 'react';
import { Container, Row, Col, Image, Jumbotron, FormControl, Button } from 'react-bootstrap';
import Select from 'react-select';
import { SocialIcon } from 'react-social-icons';

const encode = (data) => {
	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
};

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', email: '', message: '' };
	}

	/* Here’s the juicy bit for posting the form submission */

	handleSubmit = (e) => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...this.state })
		})
			.then(() => alert('Success!'))
			.catch((error) => alert(error));

		e.preventDefault();
	};

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

	renderSubmitButton() {
		return (
			<Button style={{ float: 'right' }} variant="primary" type="submit">
				Submit
			</Button>
		);
	}

	render() {
		const { name, email, message } = this.state;
		return (
			<div>
				<h2>Contact Me</h2>
				<Jumbotron>
					<form action="https://www.form-data.com/_functions/submit/xd8igvkwkekuhax1d5g3ee" method="post">
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
}
export default ContactForm;
