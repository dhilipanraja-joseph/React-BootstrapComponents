import React, {Component} from 'react';

const wBox = {
    textAlign: "center"
};

const WhatDo = {
    content: "",
    display: "block",
    position: "fixed",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    zIndex: "-10",
    color: "white",
    background: "url('sm.jpg') no-repeat center center",
    backgroundSize: "cover",
    height: "85vh",
};

const textJus = {
    textAlign: "justify",
    paddingTop: "20px"
};

const BuildWeb = {
    background: "url('bookshare-main.jpg') no-repeat center",
    backgroundSize: "cover",
    height: "80vh",
    color: "white"
};

const imgBorder = {
    border: "2px solid black",
    margin: "auto"
};

const imgSize = {
  width: "100px",
  paddingRight :"10px",

};

export default class WhatWeDo extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
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
                <div style={{
                    marginTop: "80vh",
                    paddingBottom: "40px",
                    backgroundColor: "white"
                }}>

                    <div className="container text-center">
                        <div style={textJus}>
                            <p>
                                We build websites for your buisness and design according to your needs. We will provide you the sample snapshots of how your website looks and upon your confirmation and verification,we will build you the website you are really exicted to see meeting all your requirements. You are free to select the style,colour and the fonts of your needs and we do consider all your requirements including secure online payments,database management but not limited to.Feel free to send all your requirements and we are ready to build a high quality website for you
                            </p>
                            {/* <h1>Build websites</h1> */}
                            <div style={BuildWeb}>
                                <h1>Build Website
                                </h1>
                            </div>
                        </div>
                        <div style={{
                            marginTop: "60px"
                        }}>
                            <img style={imgBorder} src="ezgif.com-optimize.gif" className="img-responsive"></img>
                        </div>
                    </div>
                    <div className="container" style={textJus}>
                        <h1>Social Media Marketing</h1>
                        <p>Social media marketing is the process of gaining website traffic or attention through social media sites. Do you need help getting started with your social media marketing strategy? Do you know what to include? Goals and objectives guide your social media strategy to help you successfully connect with your customers.
                        </p>
                        <ul>Benefits of Social Marketing
                        <li>Social media marketing provides companies with a way to reach new customers and engage with existing customers.</li>
                      <li>Social media marketing programs usually center on efforts to create content that attracts attention and encourages readers to share it across their social networks.</li></ul>
                    </div>
                    <div>
                      <img style={imgSize} src="fb.png"></img>
                      <img style={imgSize} src="twit.png"></img>
                      <img style={imgSize} src="insta.png"></img>
                      <img style={imgSize} src="glisting.png"></img>
                  </div>
                </div>
            </div>
        );
    }
}
