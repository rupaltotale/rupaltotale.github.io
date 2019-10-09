import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaCalendarAlt } from "react-icons/fa";

class TimePeriod extends Component {
  render() {
    return (
      <p style={{ color: "gray" }}>
        <FaCalendarAlt />
        {` ${this.props.startTime}`}
        {this.props.endTime ? ` - ${this.props.endTime}` : ""}
      </p>
    );
  }
}

TimePeriod.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string
};

export default TimePeriod;
