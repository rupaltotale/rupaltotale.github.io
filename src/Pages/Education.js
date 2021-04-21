import React, { Component } from 'react';

import Heading from '../Components/Heading';
import { Image } from 'react-bootstrap';
import JumboListing from '../Components/JumboListing';
import PropTypes from 'prop-types';

export default class Education extends Component {
  renderRelevantCoursework() {
    return this.props.education.map((course, index) => {
      return (
        <JumboListing
          key={`course-${index}`}
          title={course.title}
          description={course.description}
          tags={course.tags}
          sourceCodeUrl={'https://github.com/rupaltotale'}
          type={'GrayBox'}
          startTime={course.startTime}
        />
      );
    });
  }
  render() {
    return (
      <div className='container'>
        <Heading heading={this.props.heading} type='h2'></Heading>
        {this.props.showInfo && (
          <JumboListing
            title={'Third Year Computer Science Major'}
            subtitle={'Cal Poly SLO'}
            description={[
              'Senior academic standing with 4.0 major GPA and 3.99 overall GPA',
              "Made Dean's Honors list for all quarters attended and President's Honors list for the 2018-2019 school year",
              // 'Intend to minor in Data Science and get a Masters in Computer Science',
              'Data Science Fellow for 2020-2021 academic year',
              'Active member of WISH, Hack4Impact',
              'Relevant coursework discussed below',
            ]}
            gallery={
              <Image
                src={
                  'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Cal_Poly_Mustangs_logo.svg/1200px-Cal_Poly_Mustangs_logo.svg.png'
                }
                fluid
                rounded
                style={{ marginBottom: 10 }}
              />
            }
            sourceCodeUrl={'https://github.com/rupaltotale'}
            type={'ShadowBox'}
            startTime={'Sept 2018'}
            endTime={'Present'}
          />
        )}
        {this.renderRelevantCoursework()}
      </div>
    );
  }
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
  showInfo: PropTypes.bool,
  heading: PropTypes.string,
};

Education.defaultProps = {
  showInfo: true,
};
