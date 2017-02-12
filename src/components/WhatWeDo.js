import React, { Component } from 'react';

const wBox = {
  textAlign: "center",
};
const WhatDo = {
  color: "white",
  paddingTop: "10px",
  background: "url('sm.jpg') no-repeat center fixed",
  backgroundSize:"cover",
  height: "85vh",
};
const textJus= {
  textAlign: "justify",
  paddingTop :"20px",
};
const BuildWeb={
  background: "url('bookshare-main.jpg') no-repeat center",
  backgroundSize:"cover",
  height: "90vh",
  color: "white",
};
const imgPad={
  marginTop :"60px",
  textAlign: "center",

};
const imgStyle ={
  border :"2px solid black",

};

export default class WhatWeDo extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (

      <div style={wBox}>
        <div style={WhatDo}>
        {/* <h1 className="text-center">What We Do</h1> */}
        {/* <p> We build websites for your buisness and design according to your needs.
          We will provide you the sample snapshots of how your website looks and upon your confirmation and verification,we will build you the website you are really exicted to see meeting all your requirements.
         You are free to select the style,colour and the fonts of your needs and we do consider all your requirements including secure online payments,database management but not limited to.Feel free to send all your requirements and we are ready to build a high quality website for you </p> */}
      </div>
      <div className="container" style={textJus}>
        <div className="row">
          <p> We build websites for your buisness and design according to your needs.
          We will provide you the sample snapshots of how your website looks and upon your confirmation and verification,we will build you the website you are really exicted to see meeting all your requirements.
         You are free to select the style,colour and the fonts of your needs and we do consider all your requirements including secure online payments,database management but not limited to.Feel free to send all your requirements and we are ready to build a high quality website for you </p>
         {/* <h1>Build websites</h1> */}
         <div style={BuildWeb}>
          <h1>Build Website </h1>
         </div>
         <div style={imgPad}>
           <img style={imgStyle} src="ezgif.com-optimize.gif" ></img>
         </div>
    </div>
      </div></div>
    );
  }
}
