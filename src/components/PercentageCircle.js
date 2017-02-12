import React, { Component } from 'react';

const extCircle= {
  backgroundColor: "red",
};

const valCircle= {
  backgroundColor: "blue",
};

export default class PercentageCircle extends Component {
  render() {
    return (
      <div className="row">
        Circle PercentageBars
        <div className="c100 p84 green">
          <span>84%</span>
          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
      </div>
    );
  }
}
