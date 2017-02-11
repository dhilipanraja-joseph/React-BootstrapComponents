import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const headerStyle = {
  fontSize: "30px",
};

const NavStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "30px",
  borderRadius: "0",
  border: "0px solid white",
  fontFamily: "BreeSerif",
};

const navSize = {
  backgroundColor: "rgba(255, 255, 255,1)",
  padding: "10px",
  borderRadius: "0",
  border: "0px solid white",
  fontFamily: "BreeSerif",
}

const itemStyle = {
  fontSize: "15px",
};

export default class NavigationBar extends Component {
  navigate(to) {
    browserHistory.push(to);
  }
  render() {
    return (
      <div>
        <Navbar id="navBar" fixedTop collapseOnSelect>
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
                onClick={this.navigate.bind(this,'/WhoWeAre')}
                eventKey={2}>Who We Are
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
