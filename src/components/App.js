import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const container = {
  fontSize: "17px",
  marginTop: "100px",
};

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div style={container}>
          {this.props.children}
        </div>
          <Footer />
      </div>
    );
  }
}
