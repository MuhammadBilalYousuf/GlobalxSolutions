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
          {id: 'card-1', title: roar},
          {id: 'card-2', title: cts},
          {id: 'card-3', title: go},
          {id: 'card-4', title: pulse},
          {id: 'card-5', title: bawany},
          {id: 'card-6', title: cafe021},
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
                 <Card className="card-logo" key={card.id} id={card.id} title={<img src={card.title} alt="client logo"/>}/>
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
      <section className="content">
      <ul className="list">
        <li className="item">
          <div>
            <p className="item-title">Who We Are</p>
            <p className="item-description">
            Zeroland was established with the aim of providing state-of-art and the latest digital marketing and production solutions under one umbrella. Having 10 years of experience working at ATL, TTL and BTL levels, the founder vowed to go beyond the traditional marketing modus of Operandi and challenge the national and international boundaries to provide media production, digital marketing and IT services.
Zeroland team of 40+ members possess rich experience in their respective fields and the team has accomplished hundreds of local and international projects of multiple domains.
We are living in a rapidly changing environment and it is a cumbersome task for the companies like us to keep abreast ourselves of the latest clientele demand along with the modern technology, and we love to embrace transformations because we transform the brands digitally.
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
          Our mission is to build the brands and empower the existing brands by originating and executing innovative and effective integrated brand marketing plans.
          </p>
          <h3 className='fadeIn'>Our Vision</h3>
          <p className='fadeIn'>
          To be the leading digital marketing and media agency by providing all digital solutions to local and global clients.
          </p>
          <div className='btn-row fadeIn'>
            <a href='approach'>Work with us</a>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
