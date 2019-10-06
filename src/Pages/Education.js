import React, { Component } from "react";
import PropTypes from "prop-types";
import JumboListing from "../Components/JumboListing";
import { Image } from "react-bootstrap";

export default class Education extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <JumboListing
          title={"Second Year Computer Science Major at Cal Poly, SLO"}
          description={[
            "Junior academic standing with 4.0 major GPA and 3.98 overall GPA. Have made Dean's Honors list for all quarters attended and President's Honors list for the 2018-2019 school year",
            "Active member of WISH, SWE, Hack4Impact, and Cal Poly App Development",
            "Intend to minor in Data Science and Math and get a Masters in Computer Science",
            "Relevant coursework discussed below"
          ]}
          tags={["Java", "C", "Python"]}
          gallery={
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Cal_Poly_Mustangs_logo.svg/1200px-Cal_Poly_Mustangs_logo.svg.png"
              }
              fluid
              rounded
            />
          }
          sourceCodeUrl={"https://github.com/rupaltotale"}
          type={"ShadowBox"}
          startTime={"Sept 2018"}
          endTime={"Present"}
        />
      </div>
    );
  }
}

Education.propTypes = {
  education: PropTypes.array
};
