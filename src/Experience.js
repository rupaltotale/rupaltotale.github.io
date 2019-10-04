import React, { Component } from 'react';
import JumboListing from './JumboListing';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Experience extends Component {
	// constructor(props) {
	//   super(props);
	// }

	renderExperiences() {
		return this.props.experiences.map((experience, index) => {
			return (
				<JumboListing
					key={`experience-${index}`}
					title={experience.title}
					description={experience.description}
					tags={experience.tags}
					gallery={
						// `./${experience.gallery}.png`
						<Image src={experience.gallery} fluid rounded />
					}
					startTime={experience.startTime}
					endTime={experience.endTime}
					type={'ShadowBox'}
				/>
			);
		});
	}

	render() {
		return (
			<div className="container">
				<h2 style={{ textAlign: 'center' }}>My Experiences</h2>
				<br />
				{this.renderExperiences()}
			</div>
		);
	}
}

Experience.propTypes = {
	experiences: PropTypes.array
};

export default Experience;
