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
          <div className="col-sm-6 text-center"> Copyright &#9400;2017. All Rights Reserved. </div>
          {/* <div className="col-sm-4 text-center"> </div> */}
          <div className="col-sm-6 text-center"> <a href="https://www.facebook.com/VedaWebSolutions/" target="_blank">Facebook</a> | <a>Twitter</a> | <a>Instagram</a> | <a>Google+</a></div>
        </div>
      </div>
    );
  }
}
