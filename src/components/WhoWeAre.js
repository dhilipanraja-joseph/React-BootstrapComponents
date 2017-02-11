import React, { Component } from 'react';
import jq from 'jquery';

export default class WhoWeAre extends Component {
  componentDidMount() {
    jq('#navBar').addClass('navResize').removeClass('navSize');
  }
  render() {
    return (
      <div className="container">
      <h1 className="text-center">WhoWeAre</h1>
      <p>We are a group of developers
        who are striven to work hard with thirst of learning new technologies,
        Graduate's in Bachelors degree with majors in Computer Science and Engineering.
        Looking forward to create websites for you to enhance your buisness presence online.</p>
    </div>
    );
  }
}
