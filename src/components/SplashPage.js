import React, { Component } from 'react';
import PercentageBars from './PercentageBars';
import PercentageCircle from './PercentageCircle';
import jq from 'jquery';

const splahBox = {
  color: "white",
  paddingTop: "22vw",
  textAlign: "center",
  backgroundColor: "white",
  marginTop: "-50px",
  background: "url('sm1.jpg') no-repeat center",
  backgroundSize: "cover",
  height: "85vh",
};

const barOne = {
  title: "Less to No online presence (% of Small Businesses)",
  bgColor: "#ffd4d1",
  barColor: "#ff6c6c",
  percentage: "64%",
  thickness: "10px",
  border: "1px solid white"
};

const barTwo = {
  title: "Proper online presence (% of Small Businesses)",
  bgColor: "#aff6ff",
  barColor: "#00bcd4",
  percentage: "54%",
  thickness: "10px",
  border: "1px solid white"
};

const cOne = {
  text: "People trust online reviews as much as a personal recommendation",
  classes: "c100 green",
  percentage: "84",
};

const cTwo = {
  text: "Consumers read less than 10 reviews before forming an opinion about a business",
  classes: "c100 blue",
  percentage: "90",
};

const cThree = {
  text: "People will visit the website after reading positive reviews",
  classes: "c100 orange",
  percentage: "54",
};

const cFour = {
  text: "Consumers think that reviews older than 3 months are no longer relevant",
  classes: "c100 blue",
  percentage: "73",
};

const cFive = {
  text: "Consumers say that positive reviews make them trust a local business more",
  classes: "c100 orange",
  percentage: "74",
};

const cSix = {
  text: "Consumers say that the star rating of a business is most important",
  classes: "c100 green",
  percentage: "58",
};

export default class SplashPage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div style={{marginBottom: "40px"}}>
        <div style={splahBox}>
          <div className="container">
            <h1> VedasWebSolutions helps you to excel in your business through enhancing your online presence by creating responsive web applications.</h1>
          </div>
        </div>
        <div className="container">
          <h3 style={{paddingTop:"10px",textAlign: "center"}}>
             According to Clutch, a Washington, D.C. based market research firm, surveyed 350 small business owners and managers operating in the U.S. (most with 1 – 10 employees and less than $1 million in yearly revenue)
           </h3>
          <div className="row">
            <div className="col-md-6">
              <PercentageBars display={barTwo}/>
            </div>
            <div className="col-md-6">
              <PercentageBars display={barOne}/>
            </div>
          </div>
          <div style={{textAlign:"center"}}>
            <h3>Think about What Customers want from you ?</h3>
            <p>According to the Online Review Survey Research</p>
          </div>
          <div>
              <PercentageCircle display={cOne}/>
              <PercentageCircle display={cTwo}/>
              <PercentageCircle display={cThree}/>
              <PercentageCircle display={cFour}/>
              <PercentageCircle display={cFive}/>
              <PercentageCircle display={cSix}/>
            {/* <ul style={{textAlign: "justify"}}>
              <li>84% of people trust online reviews as much as a personal recommendation</li>
              <li>7 out of 10 consumers will leave a review for a business if they're asked to</li>
              <li>90% of consumers read less than 10 reviews before forming an opinion about a business</li>
              <li>54% of people will visit the website after reading positive reviews</li>
              <li>73% of consumers think that reviews older than 3 months are no longer relevant</li>
              <li>74% of consumers say that positive reviews make them trust a local business more</li>
              <li>58% of consumers say that the star rating of a business is most important </li>
            </ul> */}
            <p>
              Search results are also a powerful way to drive consumers to stores.
              A common myth is that as a result of searching online, shoppers will only visit e-commerce sites.
              In reality, three out of four shoppers who find local information in search results helpful are more likely to visit stores.
            </p>
            <p>
              Shoppers are actually inspired to visit after successfully finding out information such as the in-store availability of an item, store location and hours or pricing at a nearby retail location.
              But when that information isn't available, shoppers may stay away; one in four shoppers say they'll steer clear of a nearby store altogether to avoid the risk of items not being available.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
