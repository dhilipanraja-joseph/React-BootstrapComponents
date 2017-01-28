import React, { Component } from 'react';
import AskUs from './AskUs';
import Contribute from './Contribute';


export default class WorkWithUs extends Component {
  constructor() {
    super();
    this.state = {
      render: ""
    };
  }
  _onClick(c) {
    this.setState({render: c});
    console.log(c);
  }
  render() {
    let { render } = this.state;
    if (render) 
    return (
      <div>
        <h3 className="text-center">
          <span onClick={this._onClick.bind(this,"AskUs")}>Ask Us to build a WebApp</span>
          (or) <span onClick={this._onClick.bind(this,"Contribute")}>Contribute to our WebApp</span>
        </h3>
      </div>
    );
  }
}
