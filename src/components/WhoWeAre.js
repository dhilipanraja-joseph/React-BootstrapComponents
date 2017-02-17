import React, {Component} from 'react';

const Whowe={
  background: "url('baytown.jpg') no-repeat center",
  backgroundSize: "cover",
  height: "75vh",
  color: "white",
  paddingTop:"10px",
};

export default class WhoWeAre extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={Whowe}>
          <h1 className="text-center">Who We Are</h1>
        </div>
        <div className="container" style={{paddingTop:"10px"}}>
          <p>VedasWebSolutions is commited to empowering your buisness presence online and to grow your market.We focus on producing the quality web responsive websites. We are a group of developers who are striven to work hard with thirst of learning new technologies, Graduate's in Bachelors degree with majors in Computer Science and Engineering. Looking forward to create websites for you to enhance your buisness online presence.</p>
          <p>VedasWebSolutions is headquatered in Baytown,TX</p>
        </div>
      </div>
    );
  }
}
