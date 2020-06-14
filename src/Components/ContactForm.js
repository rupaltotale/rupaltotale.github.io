import React, { Component } from "react";
import { Jumbotron, FormControl, Button, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { ReCAPTCHA } from "react-google-recaptcha";

class ContactForm extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  renderSubmitButton() {
    return (
      <Row>
        <Col sm md="auto">
          <Button style={{ float: "right" }} variant="success" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    );
  }

  render() {
    const recaptchaRef = React.createRef();
    return (
      <Jumbotron>
        <form
          action="https://www.form-data.com/_functions/submit/xd8igvkwkekuhax1d5g3ee"
          method="post"
          onSubmit={() => {
            recaptchaRef.current.execute();
          }}
        >
          {/* Name */}
          <label>Full Name*</label>
          <FormControl
            type="textarea"
            name="name"
            className="mr-sm-2"
            required
          />
          {/* Message */}
          <label>Message*</label>
          <FormControl
            as="textarea"
            rows="3"
            name="message"
            className="mr-sm-2"
            required
          />
          {/* Email */}
          <label>Email*</label>
          <FormControl
            type="textarea"
            name="email"
            className="mr-sm-2"
            required
          />
          {/* Rating*/}
          <label>Rate the site?</label>
          <Select
            options={[
              {
                label: "1 - Needs improvement",
                value: "1 - Needs improvement",
              },
              { label: "2 - No comment", value: "2 - No comment" },
              { label: "3 - Good to go", value: "3 - Good to go" },
            ]}
            name="rating"
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey="6LceZLwUAAAAAAc9Uob7Qa6dl0U4Ob1DAj3OXaC2"
          />
          <br />
          {/* Social icons and Submit Button */}
          {this.renderSubmitButton()}
        </form>
      </Jumbotron>
    );
  }
}
export default ContactForm;
