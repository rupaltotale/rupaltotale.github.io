import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";

import PropTypes from "prop-types";
import Select from "react-select";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  static propTypes = {
    options: PropTypes.array,
  };

  state = {
    selectedTag: null,
    redirectToSearch: false,
  };

  handleChange = (selectedTag) => {
    this.setState({ selectedTag });
  };

  searchForTag() {
    const { selectedTag } = this.state;
    // this.setState({ selectedTag: null });
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
              width: 200,
              margin: 5,
            }),
          }}
          className="mr-sm-3"
          onChange={this.handleChange}
          value={this.state.selectedTag}
          // isMulti
        />
        <Button variant="secondary" onClick={this.searchForTag.bind(this)}>
          Search
        </Button>
      </Form>
    );
  }
}

export default withRouter(SearchBar);
