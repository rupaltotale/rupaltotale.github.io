import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image, Jumbotron, Card } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

// create a component

class CustomListing extends Component {
	constructor(props) {
		super(props);
	}
	renderDescription() {
		return this.props.description.map((item, key) => {
			return (
				<p>
					<FaCheck /> <span>{item}</span>
				</p>
			);
		});
	}
	render() {
		return (
			// <Jumbotron>
			// 	<h3 style={{ textAlign: 'center' }}>{this.props.title}</h3>
			// 	<Container>
			// 		<Row>
			// 			<Col xs={12} md={3}>
			// 				{this.props.gallery}
			// 			</Col>
			// 			<Col xs={12} md={9}>
			// 				{this.renderDescription()}
			// 			</Col>
			// 		</Row>
			// 	</Container>
			// </Jumbotron>
			<div>
				<br />
				<Card>
					<Card.Img variant="top" src="./logo512.png" width="300" height="300" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</div>
		);
	}
}

CustomListing.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.arrayOf(PropTypes.string).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	gallery: PropTypes.element.isRequired,
	// Optional
	sourceCodeUrl: PropTypes.string
};
//make this component available to the app
export default CustomListing;
