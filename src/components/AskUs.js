import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, Button, Checkbox } from 'react-bootstrap';

export default class AskUs extends Component {

  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup>
            <Col sm={2}>
              Full Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Enter Name"/>
            </Col>
            <Col sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="name@email.com"/>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
