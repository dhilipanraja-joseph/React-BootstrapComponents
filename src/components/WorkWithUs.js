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
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    let { render,close } = this.state;
    const formBox= {
      border: "1px solid black",
      padding: "20px",
      width: "700px",
      margin:"auto",
    };
    return (
      <div className="container text-center">
        <h3>
          <span onClick={this._onClick.bind(this,(<div style={formBox}><AskUs/></div>))}>
            Ask Us to build a WebApp
          </span>
           (or)
          <span onClick={this._onClick.bind(this,(<div style={formBox}><Contribute/></div>))}>
            Contribute to our WebApp
          </span>
        </h3>
        {close}
        {render}
      </div>
    );
  }
}
