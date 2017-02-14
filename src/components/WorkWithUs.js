import React, { Component } from 'react';
import AskUs from './AskUs';
import Contribute from './Contribute';

export default class WorkWithUs extends Component {
  constructor() {
    super();
    this.state= { render: <div/> };
    this._close= this._close.bind(this);
  }
  _close() {
    this.setState({ render: <div/> });
  }
  _onClick(c) {
    this.setState({ render: c });
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    let { render }= this.state;
    const formBox= {
      border: "1px solid black",
      padding: "20px",
      width: "700px",
      margin:"auto",
    };
    const Close= (
      <div onClick={this._close}>
        Close (X)
      </div>
    );
    const form1= (
      <div style={formBox}>
        <span className="text-right">
          {Close}
        </span>
        <AskUs/>
      </div>
    );
    const form2= (
      <div style={formBox}>
        <span className="text-right">
          {Close}
        </span>
        <Contribute/>
      </div>
    );
    return (
      <div className="container">
        <h3 className="text-center">
          <span onClick={this._onClick.bind(this,form1)}>
            Ask Us to build a WebApp
          </span>
           (or)
          <span onClick={this._onClick.bind(this,form2)}>
            Contribute to our WebApp
          </span>
        </h3>
        {render}
      </div>
    );
  }
}
