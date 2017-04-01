import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import jq from 'jquery';

const headerStyle = {
  fontSize: "20px",
};

const itemStyle = {
  fontSize: "15px",
};

export default class NavigationBar extends Component {
  _handleScroll(e) {
    let scrollTop = e.srcElement.body.scrollTop;
    if(scrollTop > 70) {
      jq('#navBar').addClass('navResize').removeClass('navSize');
    } else {
      jq('#navBar').addClass('navSize').removeClass('navResize');
    }
  }
  componentDidMount() {
    jq('#navBar').addClass('navSize').removeClass('navResize');
    window.addEventListener('scroll',this._handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this._handleScroll);
  }
  navigate(to) {
    browserHistory.push(to);
  }
  render() {
    return (
      <div>
        <Navbar id="navBar" fixedTop collapseOnSelect>
          <Navbar.Header className="navHead">
            <img className="navbar-left" id="logo" src="vws.png"/>
            <Navbar.Brand className="brandName">
              <Link to="/">
                  VedasWebSolutions
              </Link>
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
              <NavDropdown eventKey={4} style={itemStyle} title="Work With Us" id="workWithUsDrop">
                <MenuItem
                  style={itemStyle}
                  onClick={this.navigate.bind(this,'/ContactUs')}
                  eventKey={4.1}
                  >Contact Us
                </MenuItem>
                <MenuItem
                  style={itemStyle}
                  onClick={this.navigate.bind(this,'/Volunteer')}
                  eventKey={4.2}
                  >Volunteer
                </MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
