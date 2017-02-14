import React, { Component } from 'react';

const footerStyle = {
  height: "150px",
  padding: "45px",
  backgroundColor: "#314146",
  borderTop: "3px solid #3babe4",
  color: "#b5b5b5",
};

export default class Footer extends Component {
  render() {
    return (
      <div style={footerStyle}>
        <div className="row">
          <div className="col-sm-4"> Copyright &#9400;2017. All Rights Reserved. </div>
          <div className="col-sm-4 text-center"> </div>
          <div className="col-sm-4 text-right"> Facebook | Twitter | Instagram</div>
        </div>
      </div>
    );
  }
}
