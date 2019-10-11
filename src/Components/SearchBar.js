import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Redirect, withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

class SearchBar extends Component {
  static propTypes = {};

  state = {
    selectedTag: null,
    redirectToSearch: false
  };

  handleChange = selectedTag => {
    this.setState({ selectedTag }, () =>
      console.log(`Option selected:`, this.state.selectedTag)
    );
  };

  searchForTag() {
    const { selectedTag } = this.state;
    if (selectedTag) {
      this.props.history.push(
        `/search?tagValue=${selectedTag.value}&tagLabel=${selectedTag.label}`
      );
    } else {
      alert("Please choose a tag to search for");
    }
  }

  render() {
    return (
      <Form inline>
        <Select
          options={this.props.options}
          name="search"
          styles={{
            container: (provided, state) => ({
              ...provided,
              width: 300,
              margin: 5
            })
          }}
          className="mr-sm-3"
          onChange={this.handleChange}
          // isMulti
        />
        <Button variant="success" onClick={this.searchForTag.bind(this)}>
          Search
        </Button>
      </Form>
    );
  }
}

export default withRouter(SearchBar);
