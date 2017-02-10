import React, { Component } from 'react';
import NavigationBar from './NavigationBar'

const container = {
  // backgroundColor: "white",
  fontSize: "16px",
};

const footerStyle = {
  marginTop: "40px",
  padding: "5px",
  backgroundColor: "#e8e8e8",
  borderTop: "1.5px solid #d0d0d0",
  textAlign: "center",
  color: "grey",
};

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <div style={container}>
          {this.props.children}
        </div>
        <div style={footerStyle}>Footer</div>
      </div>
    );
  }
}
