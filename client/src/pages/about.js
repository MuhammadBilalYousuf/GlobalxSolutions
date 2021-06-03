import React from "react";
import "../styles/pages/about.scss";
import Owner from "../assets/team/muhammadbilalyousuf.png";
import InternationalSalesDirector from "../assets/team/International Sales Director.png";
import CreativeManager from "../assets/team/Creative-Manager.png";
import AndroidDeveloper from "../assets/team/Android-Developer.png";
import ProductionHead from "../assets/team/Production-Head.png";
import GraphicHead from "../assets/team/Graphic-Head.png";
import SoftwareEngineer from "../assets/team/Software-Engineer.png";
import WebDeveloper from "../assets/team/Web-Developer.png";
import WebDeveloper2 from "../assets/team/Web-Developer-2.png";
import Tilt from 'react-tilt';
import Footer from "../components/footer";

const About = () => {

  class Card extends React.Component {
    render() {
      return (
        <div className="card-container">
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
          {id: 'card-1', title: Owner, name: 'Muhammad Bilal Yousuf | Founder', designation: 'CTO'},
          {id: 'card-2', title: InternationalSalesDirector, name: 'Igen Tan', designation: 'International Sales Director'},
          {id: 'card-3', title: CreativeManager, name: 'Syed Ali Ashraf', designation: 'Head of Creative Manager'},
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
                     <br></br>
                     <br></br>
                     <br></br>
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
  // class Card2 extends React.Component {
  //   render() {
  //     return (
  //       <div className="card-container">
  //         <label className="card" htmlFor={this.props.id}>
  //           <div className="front">
  //             <p style={{textAlign:'center'}}>
  //             {this.props.title}
  //             </p>
  //           </div>
  //         </label>
  //        </div>
  //     );
  //   }
  // }
  // class Team2 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       cards: [
  //         {id: 'card-1', title: AndroidDeveloper},
  //         {id: 'card-2', title: ProductionHead},
  //         {id: 'card-3', title: GraphicHead},
  //         {id: 'card-4', title: SoftwareEngineer},
  //         {id: 'card-5', title: WebDeveloper},
  //         {id: 'card-6', title: WebDeveloper2},
  //       ]
  //     }
  //   }
    
  //   render() {
  //     return (
  //           <div className='container-fluid'>
  //           <div className="gallery2">
  //             {
  //               this.state.cards.map(card => {
  //                 return (
  //                  <Tilt className="card-logo2">
  //                    <br></br>
  //                    <br></br>
  //                    <br></br>
  //                  <Card2 className="Tilt-inner" id={card.id} key={card.id} title={<img src={card.title} alt="team"/>}/>
  //                  </Tilt>
  //                 )
  //               })
  //             }
  //           </div>
  //         </div>   
  //     );
  //   }
  // }
    return (
    <>
  <section className="about">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-inner-banner">
              <div className="hero-inner-col">
                <div className="hero-inner-title">
                  <h1>Who We Are</h1>
                </div>
                <br></br>
                <div className="hero-inner-title">
                  <h3>
                    GlobalxSolutions was established with the aim of providing state-of-art and the latest technological services in the shape of software production services, digital marketing and video production solutions under one umbrella. Having years of experience in providing solutions to business organizations, the founder vowed to go beyond the traditional marketing modus of Operandi and challenge the national and international boundaries to provide software development.
                  </h3>
                  <h3>
                    We are living in a rapidly changing environment and it is a cumbersome task for the companies like us to keep abreast ourselves of the latest clientele demand along with the modern technology and we love to embrace transformations because we transform the brands into modern technology. 
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div class="wrapper">
          <div id="mission">
          <h3>Our Mission</h3>
          <p>
          To build the brands and empower them with the cutting-edge technology by origination and executing innovative and the market demanded software, effective and integrated brand marketing plans with the production of the first-rate quality video content.
          </p>
          </div>
          <div id="vision">
          <h3>Our Vision</h3>
          <p>
          To be the top innovative technology house encompassing the wings of software production, digital marketing and media agency by providing 360-degree solutions to a business organization across the globe.
          </p>
          </div>
        </div>      
  </section>
  <div className='page'>
    <section className="content">
    <Team />
    </section>
    <section className="content">
    {/* <Team2 /> */}
    </section>
    <br></br>
  <br></br>
  <br></br>
  <Footer />
  </div>
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

export default About;
