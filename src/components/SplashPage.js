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

export default class SplashPage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div style={{marginBottom: "40px"}}>
        <div style={splahBox}>
          <div className="container">
            <h1> Website4U helps you to excel in your buisness through enhancing your online presence by creating responsive web applications.</h1>
            {/* <p>
              According to Clutch—a Washington, D.C.-based market research firm—surveyed 350 small business owners and managers operating in the U.S. (most with 1 – 10 employees and less than $1 million in yearly revenue). The survey results show that 46 percent do not have a small business website to call their own.
              Among the 54 percent of small businesses that do have a website, 68 percent said it was mobile-friendly. Twenty-three percent of respondents reported that they didn't have a mobile-enabled site, and another 9 percent said they weren't sure if their sites worked well on smartphones and tablets.
            </p> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <PercentageBars display={barTwo}/>
            </div>
            <div className="col-md-6">
              <PercentageBars display={barOne}/>
            </div>
          </div>
          <div style={{textAlign: "center"}}>
            <PercentageCircle/>
          </div>
          <div style={{textAlign: "justify"}}>
            <p>According to this survey, Think about What Customers want from you ??. From Online Review Survey Research</p>
            <ul>
              <li>84% of people trust online reviews as much as a personal recommendation</li>
              <li>7 out of 10 consumers will leave a review for a business if they're asked to</li>
              <li>90% of consumers read less than 10 reviews before forming an opinion about a business</li>
              <li>54% of people will visit the website after reading positive reviews</li>
              <li>73% of consumers think that reviews older than 3 months are no longer relevant</li>
              <li>74% of consumers say that positive reviews make them trust a local business more</li>
              <li>58% of consumers say that the star rating of a business is most important </li>
            </ul>
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
