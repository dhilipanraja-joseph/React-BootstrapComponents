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
      <div>
        Circle PercentageBars
        <div style={extCircle} className="progress-circle p50">
           <span>50%</span>
           <div className="left-half-clipper">
              <div className="first50-bar"></div>
              <div className="value-bar"></div>
           </div>
        </div>
      </div>
    );
  }
}
