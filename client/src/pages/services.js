import React from "react";
import "../styles/pages/services.scss";
// import rightArrow from "../assets/arrow-right-second.svg";
// import production from "../assets/services/production.png";
import softwareDevelopment from "../assets/software/software-development.svg";
import mobileDevelopment from "../assets/software/mobile-development.svg";
import WebDevelopment from "../assets/software/web-development.svg";
import UiUx from "../assets/software/ui-ux.svg";
import ecommerceDevelopment from "../assets/software/ecommerce-development.svg";
import video from "../assets/digital/video.svg";
import logo from "../assets/digital/logo.svg";
import brand from "../assets/digital/brand-identity.svg";
import digital from "../assets/digital/digital-marketing.svg";
import seo from "../assets/digital/seo.svg";
import corporate from "../assets/production/corporate-videos.svg";
import tvc from "../assets/production/tvc-dvc.svg";
import flim from "../assets/production/flim.svg";

  // Software Services
const Software = [
  {
    "title": "SOFTWARE DEVELOPMENT",
    "text": "If you are looking for solid software foundation to give a boom to your business and updating your system of strong network of software to compete the competitors in the world of computer technology. GlobalxSolutions offers a comprehensive set of custom software development services to be fully with you to grow your business and achieve your mission.",
    "image": softwareDevelopment
    // "link": '/software-development'
  },
  {
    "title": "MOBILE APP DEVELOPMENT",
    "text": "Let us build your brand’s mobile application to enhance and technological experience and provide quick buying facility to your customers. 72% of total internet browsing is generated through the mobile device. Our years’ long experience in mobile app development will surely be helpful in expanding your business horizons.",
    "image": mobileDevelopment
    // "link": '/mobile-application'
  },
  {
    "title": "WEB DESIGN & DEVELOPMENT",
    "text": "We pride ourselves on producing impressive and effective websites for all type of industries. Our web design projects include a fluid grid and a responsive layout for all mobile devices and screens. Our web development is expert in accomplishing the customers’ demands for engaging their customers via sleek web designs. ",
    "image": WebDevelopment
    // "link": '/web-design'
  },
  {
    "title": "UI AND UX DESIGN",
    "text": "Turn to GlobalxSolutions UI and UX services for building your products and services with a team that sets up a clear design process, and delivers favourable results. Our design team is a small design studio within a large software company that will help you build an engaging product easily and quickly. We create UI/UX for Mobile and Web Apps.",
    "image": UiUx
    // "link": '/ui-ux'
  },
  {
    "title": "E-COMMERCE DEVELOPMENT",
    "text": "We offer the latest modes of E-commerce development. Due to rise in the demand of E-commerce stores, every client desires visibility, attention, traffic and ultimately sales and revenue from his E-commerce website. At each step of this process, we support our GlobalxSolutions experienced team has produced a long list of highly attractive E-commerce sites.",
    "image": ecommerceDevelopment
    // "link": '/ecommerce'
  }
]
  // End Software Services
  // Digital Services
const Digital = [
    {
      "title": "VIDEO & MOTION GRAPHICS",
      "text": "Sometimes it takes something different to create the best – and our team of experts use animation and motion graphics to help tell your story. If your product is complicated or your complete story needs pictorial depiction to square out. At GlobalxSolutions, we will produce something from a brief motion video to a 30-minute long motion video.",
      "image": video
      // "link": '/video-motion-graphics'
    },
    {
      "title": "LOGO DESINGING",
      "text": "GlobalxSolutions provides a complete identity to new brands. We offer logo designing services at affordable rates. We want a short brief from the client and the rest of the job is performed by our graphics department. Creative logo designs have been our team’s top priority. A well designed logo is more than just a creative mark, but a brand identity.",
      "image": logo
      // "link": '/logo-designing'
    },
    {
      "title": "BRAND IDENTITY DESIGN",
      "text": "A great brand identity isn't only the one by which individuals recognise you, but also something to which individuals can relate themselves. At GlobalxSolutions, get your corporate brand identity designed that completely tells the story of your company. we've many strategy to get and improve your corporate identity among your competitors.",
      "image": brand
      // "link": '/brand-identity-design'
    },
    {
      "title": "DIGITAL MARKETING",
      "text": "GlobalxSolutions offers almost all kind of marketing services in order to achieve your all marketing objectives with scalable and email automation. Marketing on social media is cheaper, more effective and more result-oriented than the traditional marketing.",
      "image": digital
      // "link": '/digital-marketing'
    },
    {
      "title": "SEARCH ENGINE OPTIMIZATION",
      "text": "Get your website ranked in Google and other search engines. We make your products and services are visible when searched in the top search engines. GlobalxSolutions tend to produce and implement program improvement campaigns appropriate for your company that offer you with rankings that area unit long and relevant.",
      "image": seo
      // "link": '/search-engine-optimization'
    }
  ]
  // End Digital Services
  // Production Services
const Production = [
    {
      "title": "PRODUCTION OF TVC/DVC",
      "text": "Production of TVC/DVC has remained the key service for all leading production houses. Our experienced and diversified team is comes up with unique concept of TVC/DVC production. We ask for your thoughts, the rest of the job is perfectly performed by out dedicated production team.",
      "image": tvc
      // "link": '/tvc-dvc'
    },
    {
      "title": "CORPORATE VIDEOS",
      "text": "We produce corporate videos for different corporate objectives it may be financial presentation or the launch of a new product, we capture all events with modern equipment. GlobalxSolutions produces amazing and effective video content for corporations.",
      "image": corporate
      // "link": '/corporate-videos'
    },
    {
      "title": "FILM/DOCUMENTARY",
      "text": "Our production team will showcase your objective to the screen in the shape of film and documentary formats to bring the attention of masses.",
      "image": flim
      // "link": '/flims-documentary'
    }
]
  // End Production Services

function Services() {

  // Software Services
  class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: Software
      });
    }
    render() {
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  class Title extends React.Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content">
          <h1 id='software'>Software Services</h1>
          <p>We offer a tailor-made solution for every project.</p>
        </div>
      </section>
    }
  }
  // class Button extends React.Component {
  //   render() {
  //     return (  
  //           <a className="button" href={this.props.link}>Find out more
  //           <img src={rightArrow} alt="rightArrow"/>
  //           </a>
  //     )
  //   }
  // }
  class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 
          'url(' 
          + 
          image 
          + 
          ')',
      };
      return (
        <a href={this.props.link}>
        <header style={style} className="card-header">
        </header>
        </a>
      )
    }
  }
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <a href={this.props.link}>
          <h2>{this.props.title}</h2>
          <p className="body-content">{this.props.text}</p>
          </a>
        </div>
      )
    }
  }
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={this.props.details.image} link={this.props.details.link}/>
          <CardBody title={this.props.details.title} text={this.props.details.text} link={this.props.details.link}/>
          {/* <Button link={this.props.details.link}/> */}
        </article>
      )
    }
  }
  // End Software Services
  // Digital Services
  class Digitals extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: Digital
      });
    }
    render() {
      return <div>
        <header className="app-header"></header>
        <Titles />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Cards key={key} index={key} detailss={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  class Titles extends React.Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content">
        <h1 id='digital'>Digital Services</h1>
          <p>Intelligent digital experiences that build brands & grow businesses.</p>
        </div>
      </section>
    }
  }
  // class Buttons extends React.Component {
  //   render() {
  //     return (  
  //           <a className="button" href={this.props.link}>Find out more
  //           <img src={rightArrow} alt="rightArrow"/>
  //           </a>
  //     )
  //   }
  // }
  class CardHeaders extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 
          'url(' 
          + 
          image 
          + 
          ')',
      };
      return (
        <a href={this.props.link}>
        <header style={style} className="card-header">
        </header>
        </a>
      )
    }
  }
  class CardBodys extends React.Component {
    render() {
      return (
        <div className="card-body">
          <a href={this.props.link}>
          <h2>{this.props.title}</h2>
          <p className="body-content">{this.props.text}</p>
          </a>
        </div>
      )
    }
  }
  class Cards extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeaders image={this.props.detailss.image} link={this.props.detailss.link}/>
          <CardBodys title={this.props.detailss.title} text={this.props.detailss.text} link={this.props.detailss.link}/>
          {/* <Buttons link={this.props.detailss.link}/> */}
        </article>
      )
    }
  }

  // End Digital Services
  // Production Services
  class Productions extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: Production
      });
    }
    render() {
      return <div>
        <header className="app-header"></header>
        <Titless />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Cardss key={key} index={key} detailsss={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  class Titless extends React.Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content">
        <h1 id='production'>Production Services</h1>
            <p>We craft visualization into reality.</p>
        </div>
      </section>
    }
  }
  // class Buttonss extends React.Component {
  //   render() {
  //     return (  
  //           <a className="button" href={this.props.link}>Find out more
  //           <img src={rightArrow} alt="rightArrow"/>
  //           </a>
  //     )
  //   }
  // }
  class CardHeaderss extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 
          'url(' 
          + 
          image 
          + 
          ')',
      };
      return (
        <a href={this.props.link}>
        <header style={style} className="card-header">
        </header>
        </a>
      )
    }
  }
  class CardBodyss extends React.Component {
    render() {
      return (
        <div className="card-body">
          <a href={this.props.link}>
          <h2>{this.props.title}</h2>
          <p className="body-content">{this.props.text}</p>
          </a>
        </div>
      )
    }
  }
  class Cardss extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeaderss image={this.props.detailsss.image} link={this.props.detailsss.link}/>
          <CardBodyss title={this.props.detailsss.title} text={this.props.detailsss.text} link={this.props.detailsss.link}/>
          {/* <Buttonss link={this.props.detailsss.link}/> */}
        </article>
      )
    }
  }
  // End Production Services


  return (
    <div className='page'>
    <section className='cases'>
    <div className='container'>
      <div className="wrapper">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 style={{padding: "10px"}}>
        Services
      </h2> 
      <h4 style={{color: "grey", padding: "10px"}}>
        Over the many years of GlobalxSolutions existence,
        <br></br>
        the company has established itself as a reliable partner
        <br></br>
        that provides international quality 
        <br></br>
        services on time and on budget.
      </h4>
     <br></br>
    <div className='row'>
      < Main />
      <br></br>
    <br></br>
    </div>    
    <div className='row'>
      < Digitals />
      <br></br>
    <br></br>
    </div>
    <div className='row'>
      < Productions />
    </div>
    </div>   
    </div>   
    </section>
    </div>
  );
}


export default Services;
