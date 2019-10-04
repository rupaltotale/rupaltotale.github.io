import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { FaCheck, FaExternalLinkAlt } from 'react-icons/fa';

// create a component

class CardListing extends Component {
	renderDescription() {
		return this.props.description.map((item, index) => {
			return (
				<p key={'description-' + index}>
					<FaCheck /> <span>{item}</span>
				</p>
			);
		});
	}

	renderTags() {
		return this.props.tags.map((tag, index) => {
			return (
				<span key={'tag-' + index}>
					{index ? ', ' : ''}
					<a href="/">{tag}</a>
				</span>
			);
		});
	}

	renderTagsSection() {
		return (
			<p>
				<span>{'Tags: '}</span>
				{this.renderTags()}
			</p>
		);
	}

	renderSourceCodeButton() {
		return (
			<Button
				variant="dark"
				type="button"
				onClick={() => {
					window.open(
						'https://github.com/rupaltotale',
						'_blank' // <- This is what makes it open in a new window.
					);
				}}
			>
				Source Code <FaExternalLinkAlt />
			</Button>
		);
	}

	render() {
		return (
			<Card bg="light" border="dark">
				<Card.Img variant="top" src={this.props.galleryUrl} />
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>{this.renderDescription()}</Card.Text>
				</Card.Body>
				<Card.Footer>
					{/* <small className="text-muted">Last updated 3 mins ago</small> */}
					{this.renderTagsSection()}
					{this.renderSourceCodeButton()}
				</Card.Footer>
			</Card>
		);
	}
}

CardListing.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.arrayOf(PropTypes.string).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	galleryUrl: PropTypes.string.isRequired,
	// Optional
	sourceCodeUrl: PropTypes.string
};
//make this component available to the app
export default CardListing;
