import React from "react";
import './hero.css';


function Hero(){
    return(
       <section className="hero">
  <div className="star-background">
    {'{'}/* {/* 40 stars */} */{'}'}
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span /><span />
  </div>
  <div className="hero-content">
    <div className="hero-title">Join the CometChat partner universe</div>
    <div className="hero-subtitle">
      Create value for your clients, leveraging our world-class
      technology. Partner with us and grow your business!
    </div>
  </div>
  <div className="hero-form">
    <p className="hero-form-title">Became a partner</p>
    <div className="hero-form-div1">
      <p className="hero-form-subtitle">Full Name</p>
      <input type="text" name id placeholder="Type your name here...." />
    </div>
    <div className="hero-form-div1">
      <p className="hero-form-subtitle">Email Address</p>
      <input type="text" name id placeholder="Type your Email here...." />
    </div>
    <div className="hero-form-div1">
      <p className="hero-form-subtitle">Comapanies name</p>
      <input type="text" name id placeholder="Type your Comapny's Name" />
    </div>
    <div className="hero-form-btn">
      <a href="#">Schedule a demo</a>
    </div>
  </div>
  <div className="comet-1" />
  <div className="hero-gradient" />
  <div className="comet-2" />
  <div className="comet-3" />
  <div className="comet-4" />
  <div className="comet-5" />
  <div className="comet-6" />
  <div className="comet-7" />
  <div className="hero-empty-1" />
</section>

    )
}
export default Hero;