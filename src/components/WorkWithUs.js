import React, { Component } from 'react';
import AskUs from './AskUs';
import Contribute from './Contribute';

export default class WorkWithUs extends Component {
  constructor() {
    super();
    this.state = {
      render: <div/>,
      close: <div/>
    };
    this._close=this._close.bind(this);
  }
  _close(){
    this.setState({
      render: <div/>,
      close: <div/>
    });
  }
  _onClick(c) {
    this.setState({
      render: c,
      close: <div onClick={this._close}>Close (X)</div>
    });
  }
  render() {
    let { render,close } = this.state;
    return (
      <div className="text-center container">
        <h3>
          <span onClick={this._onClick.bind(this,<AskUs/>)}>
            Ask Us to build a WebApp
          </span>
           (or)
          <span onClick={this._onClick.bind(this,<Contribute/>)}>
            Contribute to our WebApp
          </span>
        </h3>
         {close}
         {render}
      </div>
    );
  }
}
