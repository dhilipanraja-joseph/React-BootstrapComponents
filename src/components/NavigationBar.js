import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const headerStyle = {
  color: "white",
  fontSize: "25px",
};

const NavStyle = {
  borderRadius: "0",
  fontFamily: "BreeSerif",
};

const itemStyle = {
  fontSize: "15px",
};

export default class NavigationBar extends Component {
  constructor() {
    super();
  }
  navigate(to) {
    browserHistory.push(to);
  }
  render() {
    return (
      <div>
        <Navbar style={NavStyle} inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link style={headerStyle} to="/">Website4U</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem
                style={itemStyle}
                onClick={this.navigate.bind(this,'/WhatWeDo')}
                eventKey={1}>What We Do
              </NavItem>
              <NavItem
                style={itemStyle}
                onClick={this.navigate.bind(this,'/WhoAreWe')}
                eventKey={2}>Who Are We
              </NavItem>
              <NavItem
                style={itemStyle}
                onClick={this.navigate.bind(this,'/WhyUs')}
                eventKey={3}>Why Us
              </NavItem>
              <NavItem
                style={itemStyle}
                onClick={this.navigate.bind(this,'/WorkWithUs')}
                eventKey={4}>Work With Us
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
