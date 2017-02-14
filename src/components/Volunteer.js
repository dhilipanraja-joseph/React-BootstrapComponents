import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, Button, Checkbox } from 'react-bootstrap';

export default class Volunteer extends Component {

  constructor() {
    super();
    this.state= {
      name: "",
      email: "",
      phone: "",
      expertise: "",
      skills: "",
      github: "",
      portfolio: "",
      linkenIn: ""
    };
    this.textChange=this.textChange.bind(this);
    this.formSubmit=this.formSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  formSubmit(e) {
    e.preventDefault();
    console.log("state:",this.state);
  }

  textChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;
    this.setState({[key]: value});
  }

  render() {
    return (
      <div style={{marginBottom:"17.5vh"}} className="container formBox">
        <h2>
          Volunteer With Us
        </h2>
        <hr/>
        <Form horizontal onSubmit={this.formSubmit}>
          <FormGroup controlId="formName">
            <Col sm={4}>
              Full Name *
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="Enter Name"
                data-statekey="name"
                onChange={this.textChange}
                required/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formEmail">
            <Col sm={4}>
              Email *
            </Col>
            <Col sm={8}>
              <FormControl type="email" placeholder="Email"
                data-statekey="email"
                onChange={this.textChange}
                required/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formPhone">
            <Col sm={4}>
              Phone
            </Col>
            <Col sm={8}>
              <FormControl type="tel" placeholder="Phone"
                data-statekey="phone"
                onChange={this.textChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formExperience">
            <Col sm={4}>
              Area of Expertise *
            </Col>
            <Col sm={8}>
              <FormControl componentClass="textarea" placeholder="Experiences"
                data-statekey="expertise"
                onChange={this.textChange}
                required/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formSkills">
            <Col sm={4}>
              Skills *
            </Col>
            <Col sm={8}>
              <FormControl componentClass="textarea" placeholder="Technologies Used"
                data-statekey="skills"
                onChange={this.textChange}
                required/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formGitHub">
            <Col sm={4}>
              GitHub Profile *
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="GitHub Profile"
                data-statekey="github"
                onChange={this.textChange}
                required/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formPortfolio">
            <Col sm={4}>
              Portfolio (optional)
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="Portfolio Link"
                data-statekey="portfolio"
                onChange={this.textChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formLinkedIn">
            <Col sm={4}>
              LinkedIn Profile (optional)
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="LinkedIn Profile"
                data-statekey="linkenIn"
                onChange={this.textChange}
              />
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