import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { FaCheck, FaCalendarAlt } from 'react-icons/fa';

class JumboListing extends Component {
	renderDescription() {
		return this.props.description.map((item, index) => {
			return (
				<p key={'description-' + index}>
					<FaCheck /> <span>{item}</span>
				</p>
			);
		});
	}

	renderTimePeriod() {
		return (
			<p>
				<FaCalendarAlt />
				<i>{` ${this.props.startTime}`}</i>
				<i>{this.props.endTime ? ` - ${this.props.endTime}` : ''}</i>
			</p>
		);
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

	render() {
		return (
			<Jumbotron className={this.props.type === 'ShadowBox' ? 'jumbo' : ''}>
				<Container>
					<h3>{this.props.title}</h3>
					{this.renderTimePeriod()}
					<hr />
					<Row>
						<Col xs={12} md={5}>
							{this.props.gallery}
						</Col>
						<Col xs={12} md={7}>
							{this.renderDescription()}
						</Col>
					</Row>
					<hr />
					{this.renderTagsSection()}
				</Container>
			</Jumbotron>
		);
	}
}

JumboListing.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.arrayOf(PropTypes.string).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	gallery: PropTypes.element.isRequired,
	startTime: PropTypes.string.isRequired,
	// Optional
	endTime: PropTypes.string,
	sourceCodeUrl: PropTypes.string,
	type: PropTypes.oneOf([ 'GrayBox', 'ShadowBox' ])
};

export default JumboListing;
