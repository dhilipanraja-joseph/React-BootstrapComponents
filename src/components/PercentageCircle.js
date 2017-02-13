import React, { Component } from 'react';

const perN = {
  // fontSize: "20px",
  color: "black",
};

const circleBar = {
  display: "inline-block",
};

export default class PercentageCircle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { classes, percentage, text} = this.props.display;
    return (
      <div className="col-md-4" style={circleBar}>
        <div className={`${classes} p${percentage}`}>
          <span style={perN}>{percentage}%</span>
          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
        <span>{text}</span>
      </div>
    );
  }
}
