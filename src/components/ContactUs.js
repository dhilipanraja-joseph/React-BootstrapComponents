import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, Button, Checkbox } from 'react-bootstrap';
import jq from 'jquery';

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state= {
      From: "Contact Form",
      name: "",
      email: "",
      phone: "",
      description: ""
    };
    this.formSubmit= this.formSubmit.bind(this);
    this.textChange= this.textChange.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    let data= this.state;
    jq.ajax({
      type: 'POST',
      url: '/api/sendmail',
      data
    });
  }

  textChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;
    this.setState({[key]: value});
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    let { name, email, phone, description }= this.state;
    return (
      <div style={{marginBottom:"17.5vh"}} className="container formBox">
        <h2>Contact Us</h2>
        <hr/>
        <Form horizontal onSubmit={this.formSubmit}>
          <FormGroup controlId="formHorizontalName">
            <Col sm={4}>
              Full Name *
            </Col>
            <Col sm={8}>
              <FormControl type="text" value={name} placeholder="Enter Name"
                onChange={this.textChange}
                data-statekey="name"
                required/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={4}>
              Email *
            </Col>
            <Col sm={8}>
              <FormControl type="email" value={email} placeholder="Email"
                onChange={this.textChange}
                data-statekey="email"
                required/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={4}>
              Phone
            </Col>
            <Col sm={8}>
              <FormControl type="tel" value={phone} placeholder="Phone"
                onChange={this.textChange}
                data-statekey="phone" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={4}>
              Description *
            </Col>
            <Col sm={8}>
              <FormControl componentClass="textarea" value={description} placeholder="(How can we help you)"
                onChange={this.textChange}
                data-statekey="description"
                required/>
            </Col>
          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
