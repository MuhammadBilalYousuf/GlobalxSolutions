import React from 'react';
import "../styles/components/industries.scss";
import Tilt from 'react-tilt';
import "../styles/pages/industries.scss";
import Php from "../assets/php.svg";
import Wordpress from "../assets/wordpress.svg";
import Python from "../assets/python.svg";
import ReactJs from "../assets/react.svg";
import Android from "../assets/android.svg";
import Xcode from "../assets/xcode.svg";
import ReactNative from "../assets/react-native.svg";
import NodeJs from "../assets/node-js.svg";
import UiDesign from "../assets/ui_design.svg";
import AdobeXd from "../assets/adobe-xd.svg";
import Automation from "../assets/ai.svg";
import Rapid from "../assets/ionic.svg";
import RealEstate from "../assets/home/industries/icons8-real-estate-32.png";
import Travel from "../assets/home/industries/icons8-biometric-passport-32.png";
import Finance from "../assets/home/industries/icons8-bank-card-missing-32.png";
import Retail from "../assets/home/industries/icons8-shop-32.png";
import Legal from "../assets/home/industries/icons8-data-protection-32.png";
import Healthcare from "../assets/home/industries/icons8-health-sources-32.png";
import Automotive from "../assets/home/industries/icons8-wheel-32.png";
import Construction from "../assets/home/industries/icons8-residential-32.png";


class Card extends React.Component {
  
    render() {
      return (
        <div className="card-containers">
             <p>
              {this.props.title}
              </p>
        </div>
      );
    }
  }

class IndustriesBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards2: [
          {id: 'card-2', title: RealEstate, name: 'Real Estate'},
          {id: 'card-3', title: Travel, name: 'Travel'},
          {id: 'card-4', title: Finance, name: 'Finance'},
          {id: 'card-5', title: Retail, name: 'Retail'},
          {id: 'card-6', title: Legal, name: 'Legal'},
          {id: 'card-7', title: Healthcare, name: 'Healthcare'},
          {id: 'card-8', title: Automotive, name: 'Automotive'},
          {id: 'card-9', title: Construction, name: 'Construction'},
        ]
      }
    }
    
    render() {
      return (
      <div className='container'>
        <h2 className="industries" style={{marginLeft: '20px'}}>Industries</h2>  
        <div className="industries-gallery">
          {
            this.state.cards2.map(card => {
              return (
              <Tilt className="card-logo">
              <h4 className="industries-team"><img src={card.title}/> {card.name}</h4>  
              <Card className="Tilt-inner" id={card.id} key={card.id} />
              </Tilt>
              )
            })
          }
        </div>
      </div>   
      );
    }
}

class TechnologiesBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards2: [
          {id: 'card-2', title: NodeJs, name: 'Node.js'},
          {id: 'card-3', title: Php, name: 'PHP'},
          {id: 'card-4', title: ReactJs, name: 'React.js'},
          {id: 'card-5', title: Python, name: 'Python'},
          {id: 'card-6', title: Wordpress, name: 'WordPress'},
          {id: 'card-7', title: AdobeXd, name: 'UI/UX'},
          {id: 'card-8', title: UiDesign, name: 'Product Design'},
          {id: 'card-9', title: Rapid, name: 'Rapid Prototyping'},
          {id: 'card-10', title: ReactNative, name: 'React Native'},
          {id: 'card-11', title: Android, name: 'Android Studio'},
          {id: 'card-12', title: Xcode, name: 'xCode'},
          {id: 'card-13', title: Automation, name: 'Automation'},

        ]
      }
    }
    
    render() {
      return (
      <div className='container'>
        <h2 className="industries" style={{marginLeft: '20px'}}>Technologies</h2>  
        <div className="industries-gallery">
          {
            this.state.cards2.map(card => {
              return (
              <Tilt className="card-logo">
              <h4 className="industries-team"><img src={card.title}/> {card.name}</h4>  
              <Card className="Tilt-inner" id={card.id} key={card.id} />
              </Tilt>
              )
            })
          }
        </div>
      </div>   
      );
    }
}

const Box = () => {
  return (
     <section className="banner">
      <div className="container">
        <div className="banner-inner-title">
          <h1>We deliver to clients that evolve</h1>
        </div>
      </div>
    </section>
  );
};


const Industries = () => {
  return (
    <>
    <Box />
    <br></br>
    <IndustriesBox />
    <br></br>
    <TechnologiesBox />
    </>
  );
};

export default Industries;
