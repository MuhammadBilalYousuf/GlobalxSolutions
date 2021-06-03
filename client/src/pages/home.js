import React from "react";
import Solutions from "../components/solutions";
import Industries from "../components/industries";
import Delivering from "../components/delivering";
import Promise from "../components/promise";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Cases from "../components/cases";
import "../homepage/sass/styles.scss";
import "../homepage/js/index";
import { animateScroll as scroll} from 'react-scroll';
import leftDown from "../assets/circled-down-2.svg";

const Home = ({ dimensions }) => {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-inner-banner">
            <div className="hero-inner-col">
              <div className="hero-inner-title">
                <h1>We make it happen</h1>
              </div>
              <div className="hero-inner-links">
                <div data-video-src="websites" className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Websites</span></a>
                </div>
                <div data-video-src="apps" className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Apps</span></a>
                </div>
                <div className="hero-inner-link-item" data-video-src="branding">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Branding</span></a>
                </div>
              </div>
              <div className="hero-inner-title">
                <h3>Your partner for incredible mobile and web products. Finally delivered in great quality and on time.</h3>
              </div>
              <div className='btn-row fadeIn'>
              <a href='audit' className="request">Request An Estimation</a>
              <a href='approach' className="schedule">Schedule a Call</a>
              </div>
              <div className='btn-scroll-row fadeIn'>
              <img onClick={() => scroll.scrollTo(750)} src={leftDown} alt="row"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Solutions />
    <Cases />
    <br></br>
    <br></br>
    <br></br>
    <Industries />
    <br></br>
    <br></br>
    <br></br>
    <Delivering />
    <br></br>
    <br></br>
    <br></br>
    <Promise />
    <br></br>
    <br></br>
    <br></br>
    <Contact />
    <br></br>
    <br></br>
    <br></br>
    <Footer />
    <div className="cursor">
      <div className="cursor-media">
        <video
          src={require(`../homepage/videos/websites.mp4`)}
          preload="auto"
          autoPlay
          muted
          loop
          id="websites"
        ></video>
        <video
          src={require(`../homepage/videos/apps.mp4`)}
          preload="auto"
          autoPlay
          muted
          loop
          id="apps"
        ></video>
        <video
          src={require(`../homepage/videos/branding.mp4`)}
          preload="auto"
          autoPlay
          muted
          loop
          id="branding"
        ></video>
      </div>
    </div>
    </>
  );
};

export default Home;
