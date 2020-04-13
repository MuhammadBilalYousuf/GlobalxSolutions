import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import "../styles/pages/about.scss";
import zeroland from "../assets/client/zeroland.png";
import roar from "../assets/client/roar.png";
import bawany from "../assets/client/bawany.png";
import go from "../assets/client/go.png";
import pulse from "../assets/client/pulse.png";
import cts from "../assets/client/cts.png";
import cafe021 from "../assets/client/cafe021.png";

const About = () => {
  class Card extends React.Component {
  
    render() {
      return (
        <div className="card-container">
          <input type="checkbox" id={this.props.id}/>
  
          <label className="card" htmlFor={this.props.id}>
            <div className="front">
              <h3 style={{textAlign:'center', fontWeight:'bold'}}>{this.props.title}</h3>
            </div>
  
            <div className="back">
              <img src={zeroland} alt="zeroland logo"></img>
            </div>
          </label>
        </div>
      );
    }
  }
  class Careers extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        cards: [
          {id: 'card-1', title: cafe021},
          {id: 'card-2', title: cts},
          {id: 'card-3', title: go},
          {id: 'card-4', title: pulse},
          {id: 'card-5', title: bawany},
          {id: 'card-6', title: roar},
        ]
      }
    }
    render() {
      return (
      <div className='container'>
        <div className="gallery">
          {
            this.state.cards.map(card => {
              return (
                 <Card className="card-logo" id={card.id} key={card.id} title={<img src={card.title} alt="client logo"/>}/>
              )
            })
          }
        </div>
        </div>
      );
    }
  }

  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };
  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };
  
  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
     return (
    <> 
    <div className='page'>
      <section className="content">
      <ul className="list">
        <li className="item">
          <div>
            <p className="item-title">Who We Are</p>
            <p className="item-description">
            Zeroland was established with the aim of providing state-of-art and the latest technological services in the shape of software production services, digital marketing and video production solutions under one umbrella. Having 10 years of experience in providing solutions to business organizations, the founder vowed to go beyond the traditional marketing modus of Operandi and challenge the national and international boundaries to provide media production, digital marketing and software productions services.
            </p>
            <p className="item-description">
            Zeroland team of 40+ members possess rich experience in their respective fields and the team has accomplished hundreds of local and international projects of multiple domains.
            </p>
            <p className="item-description">
            We are living in a rapidly changing environment and it is a cumbersome task for the companies like us to keep abreast ourselves of the latest clientele demand along with the modern technology and we love to embrace transformations because we transform the brands into modern technology. 
            </p>
          </div>
        </li>
        <div className="separator">
        </div>
      </ul>
      <h2 className="ourclients">Our Clients</h2>  
      <Careers />
      </section>
      <div className='sectionSecond'>
        <div ref={sectionRef} className='inner'>
          <h3 className='fadeIn'>Our Mission</h3>
          <p className='fadeIn'>
          To build the brands and empower them with the cutting-edge technology by origination and executing innovative and the market demanded software, effective and integrated brand marketing plans with the production of the first-rate quality video content.
          </p>
          <h3 className='fadeIn'>Our Vision</h3>
          <p className='fadeIn'>
          To be the top innovative technology house encompassing the wings of software production, digital marketing and media agency by providing 360-degree solutions to a business organization across the globe.
          </p>
          <div className='btn-row fadeIn'>
            <a href='approach'>Work with us</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
