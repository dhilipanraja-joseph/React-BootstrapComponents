import React, { Component } from 'react';
import jq from 'jquery';

export default class WhyUs extends Component {
  componentDidMount() {
    jq('#navBar').addClass('navResize').removeClass('navSize');
  }
  render() {
    return (
      <div className="container">
      <h1 className="text-center">WhyUs</h1>
    </div>
    );
  }
}
