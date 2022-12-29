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
                {/* <h1>I make it happen</h1> */}
              </div>
              <div className="hero-inner-links">
                <div data-video-src="entrepreneur" className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Entrepreneur</span></a>
                </div>
                <div data-video-src="investor" className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Investor</span></a>
                </div>
                <div className="hero-inner-link-item" data-video-src="philanthropist">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Philanthropist</span></a>
                </div>
              </div>
              <div className="hero-inner-title">
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
              </div>
              <div className='btn-row fadeIn'>
              <a href='audit' className="request">Read Igen's BIO</a>
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
          id="entrepreneur"
        ></video>
        <video
          src={require(`../homepage/videos/apps.mp4`)}
          preload="auto"
          autoPlay
          muted
          loop
          id="investor"
        ></video>
        <video
          src={require(`../homepage/videos/branding.mp4`)}
          preload="auto"
          autoPlay
          muted
          loop
          id="philanthropist"
        ></video>
      </div>
    </div>
    </>
  );
};

export default Home;
