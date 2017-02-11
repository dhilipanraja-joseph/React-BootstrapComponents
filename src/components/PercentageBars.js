import React, { Component } from 'react';

const barBox = {
  backgroundColor: "#f7f5f5",
  padding: "10px",
  margin: "20px",
};

const barTitle = {
  fontSize: "18px",
};

const perStyle = {
  fontSize: "28px",
};

export default class PercentageBars extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { title, bgColor, barColor, percentage, thickness, border } = this.props.display;
    const outBar = {
      backgroundColor: bgColor,
      border
    };
    const inBar = {
      height: thickness,
      backgroundColor: barColor,
      width: percentage,
    };
    return (
      <div style={barBox}>
        <div>
          <span style={barTitle}>{title}</span>
          <div style={{textAlign: "right"}}>
            <span style={perStyle}>{percentage}</span>
          </div>
        </div>
        <div style={outBar}>
          <div style={inBar}>
          </div>
        </div>
      </div>
    );
  }
}
