import React, {Component} from 'react';

const whyImg={
  background: "url('why1.png') no-repeat center",
  backgroundSize: "cover",
  height: "75vh",
  color: "white",
};

export default class WhyUs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
             <div>
              <div style={whyImg}>
              </div>
              <div className="container" style={{paddingTop:"10px"}}>
                <ul>
                    <li>Websites will be build with latest technologies</li>
                    <li>Customized website designs which makes your website unique</li>
                    <li>Full featured rich web responsive user interface will be designed</li>
                    <li>Have a website design in your mind,let us make it as a website</li>
                    <li>We provide you the screenshots before designing the website,We wait for your design approval</li>
                    <li>We strive hard to meet your requirements</li>
                    <li>No templates will be used</li>
                    <li>We also do social marketing upon your request</li>
                </ul>
            </div>
          </div>
        );
    }
}
