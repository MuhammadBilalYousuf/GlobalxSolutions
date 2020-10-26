import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import "../styles/pages/about.scss";
// import GlobalxSolutions from "../assets/GlobalXsolutionlogo.png";
import Owner from "../assets/team/Owner.JPG";
import InternationalSalesDirector from "../assets/team/International Sales Director.png";
import CreativeManager from "../assets/team/Creative-Manager.png";
import AndroidDeveloper from "../assets/team/Android-Developer.png";
import ProductionHead from "../assets/team/Production-Head.png";
import GraphicHead from "../assets/team/Graphic-Head.png";
import SoftwareEngineer from "../assets/team/Software-Engineer.png";
import WebDeveloper from "../assets/team/Web-Developer.png";
import Tilt from 'react-tilt';


const About = () => {

  class Card extends React.Component {
  
    render() {
      return (
        <div className="card-container">
          {/* <input type="checkbox" id={this.props.id}/> */}
          <label className="card" htmlFor={this.props.id}>
            <div className="front">
              <p style={{textAlign:'center'}}>
              {this.props.title}
              </p>
            </div>
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
    }
    
    render() {
      return (
            <div className='container'>
            <div className="gallery">
              {
                this.state.cards.map(card => {
                  return (
                  <Tilt className="card-logo">
                  <h5 className="team">Muhammad Bilal Yousuf|Owner<br></br><p className="Designation">FullStack Developer|Aspiring AI Specilist</p> </h5>  
                  <Card className="Tilt-inner" id={card.id} key={card.id} title={<img src={card.title} alt="team"/>}/>
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
          {id: 'card-2', title: InternationalSalesDirector, name: 'Igen Tan', designation: 'International Sales Director'},
          {id: 'card-3', title: CreativeManager, name: 'Syed Ali Ashraf', designation: 'Creative Manager'},
          {id: 'card-4', title: AndroidDeveloper, name: 'Anas Anwar', designation: 'Mobile Development Head'},
          {id: 'card-5', title: ProductionHead, name: 'Waqar Qamar', designation: 'Production Head'},
          {id: 'card-6', title: GraphicHead, name: 'Syed Hammad Ali', designation: 'Graphic Head'},
          {id: 'card-7', title: SoftwareEngineer, name: 'Arshad Ali', designation: 'Software Engineer'},
          {id: 'card-8', title: WebDeveloper, name: 'Dawood Hayat', designation: 'Web Developer'},
        ]
      }
    }
    
    render() {
      return (
      <div className='container'>
        <div className="gallery">
          {
            this.state.cards2.map(card => {
              return (
              <Tilt className="card-logo">
              <h5 className="team">{card.name}<br></br><p className="Designation">{card.designation}</p> </h5>  
              <Card className="Tilt-inner" id={card.id} key={card.id} title={<img src={card.title} alt="team"/>}/>
              </Tilt>
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
      <Team />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
