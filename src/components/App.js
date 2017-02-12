import React, { Component } from 'react';
import NavigationBar from './NavigationBar'

const container = {
  fontSize: "17px",
  marginTop: "100px",
};

const footerStyle = {
  height: "200px",
  padding: "5px",
  backgroundColor: "#314146",
  borderTop: "3px solid #3babe4",
  textAlign: "center",
  color: "white",
};

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <div style={container}>
          {this.props.children}
        </div>
        <div style={footerStyle}>
          Footer
        </div>
      </div>
    );
  }
}
