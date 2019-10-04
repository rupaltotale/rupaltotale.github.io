import React, { Component } from "react";
import PropTypes from "prop-types";
import { CardDeck } from "react-bootstrap";
import CardListing from "./CardListing";

export default class Projects extends Component {
  render() {
    return (
      <div className="container">
        <br></br>
        <CardDeck>
          <CardListing
            title={"Fictional University Website With Wordpress"}
            description={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "Duis aute irure dolor in reprehenderit in voluptate Duis aute irure dolor in reprehenderit in voluptate.",
              "Duis aute irure dolor in reprehenderit in voluptate Duis aute irure dolor in reprehenderit in voluptate."
            ]}
            tags={["abc", "xyz", "123"]}
            galleryUrl={"project.png"}
            sourceCodeUrl={"https://github.com/rupaltotale"}
          />
          <CardListing
            title={"CPE 357: Systems Programming"}
            description={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate.",
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
            ]}
            tags={["abc", "xyz", "123"]}
            galleryUrl={"project.png"}
            sourceCodeUrl={"https://github.com/rupaltotale"}
          />
        </CardDeck>
      </div>
    );
  }
}
