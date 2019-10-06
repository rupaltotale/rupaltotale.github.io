import React, { Component } from 'react';
import { Row, Col, Jumbotron, FormControl, Button } from 'react-bootstrap';
import Select from 'react-select';
import { SocialIcon } from 'react-social-icons';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', email: '', message: '' };
	}

	renderSubmitButton() {
		return (
			<Button style={{ float: 'right' }} variant="primary" type="submit">
				Submit
			</Button>
		);
	}

	render() {
		return (
			<Jumbotron>
				<form action="https://www.form-data.com/_functions/submit/xd8igvkwkekuhax1d5g3ee" method="post">
					{/* Name */}
					<label>Full Name*</label>
					<FormControl type="textarea" name="name" className="mr-sm-2" required />
					{/* Message */}
					<label>Message*</label>
					<FormControl as="textarea" rows="3" name="message" className="mr-sm-2" required />
					{/* Email */}
					<label>Email*</label>
					<FormControl type="textarea" name="email" className="mr-sm-2" required />
					{/* Rating*/}
					<label>Rate the site?</label>
					<Select
						options={[
							{ label: '1 - Needs improvement', value: '1 - Needs improvement' },
							{ label: '2 - No comment', value: '2 - No comment' },
							{ label: '3 - Good to go', value: '3 - Good to go' }
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
							<SocialIcon url="mailto:rupaltotale@gmail.com" target="_blank" rel="noopener noreferrer" />
						</Col>
						<Col xs md={{ span: 3, offset: 6 }}>
							{this.renderSubmitButton()}
						</Col>
					</Row>
				</form>
			</Jumbotron>
		);
	}
}
export default ContactForm;
