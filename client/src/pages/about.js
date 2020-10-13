import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import "../styles/pages/about.scss";
// import GlobalxSolutions from "../assets/GlobalXsolutionlogo.png";
import Owner from "../assets/team/Owner.JPG";
import Bawany from "../assets/Software-Engineer.jpeg";
import Cafe021 from "../assets/Android-Developer.jpeg";
import CottonHome from "../assets/Web-Developer.jpeg";
// import CyberTrack from "../assets/client/cybertrack.png";
// import GhaniOsman from "../assets/client/GhaniOsman.png";
// import GovtSindh from "../assets/client/GovtSindh.png";
// import MarkhorClothing from "../assets/client/Markhorclothing.png";
// import NayaNazimabad from "../assets/client/NayaNazimabad.png";
// import Noblestructure from "../assets/client/Noblestructure.png";
// import PIM from "../assets/client/PIM.png";
// import Pulse from "../assets/client/Pulse.png";
// import RoarFitness from "../assets/client/RoarFitness.png";
// import USAID from "../assets/client/USAID.png";
// import Who from "../assets/client/Who.png";
import Tilt from 'react-tilt';


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
            {/* <div className="back">
              <img src={GlobalxSolutions} alt="GlobalxSolutions logo"></img>
            </div> */}
          </label>
        </div>
      );
    }
  }

  class Team extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: [
          {id: 'card-1', title: Owner},
        ]
      }
      // this.scrollToTop = this.scrollToTop.bind(this);
    }
    
    render() {
      return (
      <div className='container'>
        <div className="gallery">
          {
            this.state.cards.map(card => {
              return (
              <Tilt className="card-logo">
              <Card className="Tilt-inner" id={card.id} key={card.id} title={<img src={card.title} alt="client logo"/>}/>
              </Tilt>
              )
            })
          }
        </div>
        </div>
        
      );
    }
  }
  class Team2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards2: [
          {id: 'card-2', title: Bawany},
          {id: 'card-3', title: Cafe021},
          {id: 'card-4', title: CottonHome},
          // {id: 'card-5', title: CyberTrack},
          // {id: 'card-6', title: GhaniOsman},
          // {id: 'card-7', title: GovtSindh},
          // {id: 'card-8', title: MarkhorClothing},
          // {id: 'card-9', title: NayaNazimabad},
          // {id: 'card-10', title: Noblestructure},
          // {id: 'card-11', title: PIM},
          // {id: 'card-12', title: Pulse},
          // {id: 'card-13', title: RoarFitness},
          // {id: 'card-14', title: USAID},
          // {id: 'card-15', title: Who},
        ]

      }
    }
    
    render() {
      return (
      <div className='container'>
        {/* <div className="gallery">
          {
            this.state.cards2.map(card => {
              return (
              <Tilt className="card-logo">
  
              <Card className="Tilt-inner" id={card.id} key={card.id} title={<img src={card.title} alt="client logo"/>}/>
              </Tilt>
              )
            })
          }
        </div> */}
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
            GlobalxSolutions was established with the aim of providing state-of-art and the latest technological services in the shape of software production services, digital marketing and video production solutions under one umbrella. Having 10 years of experience in providing solutions to business organizations, the founder vowed to go beyond the traditional marketing modus of Operandi and challenge the national and international boundaries to provide software development, digital marketing, media production and services.
            </p>
            <p className="item-description">
            We are living in a rapidly changing environment and it is a cumbersome task for the companies like us to keep abreast ourselves of the latest clientele demand along with the modern technology and we love to embrace transformations because we transform the brands into modern technology. 
            </p>
          </div>
        </li>
        <div className="separator">
        </div>
      </ul>
      <h2 className="ourclients">Founder & CTO</h2>  
      <Team />
      <br/>
                <br/>
                <br/>
        
      {/* <h2 className="ourclients2">Our Team</h2>   */}
      <Team2 />
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
