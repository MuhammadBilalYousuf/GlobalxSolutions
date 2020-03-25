import React from "react";
import "../styles/pages/services.scss";
import rightArrow from "../assets/arrow-right.svg";
import production from "../assets/services/production.png";
import digital from "../assets/services/digital.png";
import software from "../assets/services/software.png";

  // Software Services
const Software = [
  {
    "title": "Web Design & Development",
    "text": "Being the leading web designing and development agency, Zeroland team believes that it has to deliver a meaningful, user-friendly and interactive website for every client keeping in the notice the principles and demands of the client regarding the generation of leads, increment in sales and traffic divert on the website.",
    "image": software 
  },
  {
    "title": "CMS & Web Dashboard Development",
    "text": "At Zeroland digital, we offer service of managing new content on your website and in this regard, our team is equipped with the latest tools of Content Management System and makes you trouble-free from editing, developing and publishing new content on your website on daily basis.",
    "image": software
  },
  {
    "title": "Responsive & Mobile Website Development",
    "text": "A website which is easy to surf on all devices including on the mobile phone builds a positive image of the brand and this facility to users surely attracts more leads. Mobile web development, responsive design, adaptive design, and other techniques are all efficiently handled by our Zeroland team.",
    "image": software
  },
  {
    "title": "E-Commerce Website",
    "text": "Do you sell your product and services online? You have a website but it does not offer your customers to buy instantly. We expert web designing team builds E-commerce websites for all various types of industries. We have developed E-commerce websites for FMCG and clothing industries facilitating their customers with B2B and B2C customer portals.",
    "image": software
  }
]
  // End Software Services
  // Digital Services
const Digital = [
    {
      "title": "Web Design & Development",
      "text": "Being the leading web designing and development agency, Zeroland team believes that it has to deliver a meaningful, user-friendly and interactive website for every client keeping in the notice the principles and demands of the client regarding the generation of leads, increment in sales and traffic divert on the website.",
      "image": digital 
    },
    {
      "title": "CMS & Web Dashboard Development",
      "text": "At Zeroland digital, we offer service of managing new content on your website and in this regard, our team is equipped with the latest tools of Content Management System and makes you trouble-free from editing, developing and publishing new content on your website on daily basis.",
      "image": digital
    },
    {
      "title": "Responsive & Mobile Website Development",
      "text": "A website which is easy to surf on all devices including on the mobile phone builds a positive image of the brand and this facility to users surely attracts more leads. Mobile web development, responsive design, adaptive design, and other techniques are all efficiently handled by our Zeroland team.",
      "image": digital
    },
    {
      "title": "E-Commerce Website",
      "text": "Do you sell your product and services online? You have a website but it does not offer your customers to buy instantly. We expert web designing team builds E-commerce websites for all various types of industries. We have developed E-commerce websites for FMCG and clothing industries facilitating their customers with B2B and B2C customer portals.",
      "image": digital
    }
]
  // End Digital Services
  // Production Services
const Production = [
    {
      "title": "Web Design & Development",
      "text": "Being the leading web designing and development agency, Zeroland team believes that it has to deliver a meaningful, user-friendly and interactive website for every client keeping in the notice the principles and demands of the client regarding the generation of leads, increment in sales and traffic divert on the website.",
      "image": production 
    },
    {
      "title": "CMS & Web Dashboard Development",
      "text": "At Zeroland digital, we offer service of managing new content on your website and in this regard, our team is equipped with the latest tools of Content Management System and makes you trouble-free from editing, developing and publishing new content on your website on daily basis.",
      "image": production
    },
    {
      "title": "Responsive & Mobile Website Development",
      "text": "A website which is easy to surf on all devices including on the mobile phone builds a positive image of the brand and this facility to users surely attracts more leads. Mobile web development, responsive design, adaptive design, and other techniques are all efficiently handled by our Zeroland team.",
      "image": production
    },
    {
      "title": "E-Commerce Website",
      "text": "Do you sell your product and services online? You have a website but it does not offer your customers to buy instantly. We expert web designing team builds E-commerce websites for all various types of industries. We have developed E-commerce websites for FMCG and clothing industries facilitating their customers with B2B and B2C customer portals.",
      "image": production
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
          <h1>Software Services</h1>
          <p>We offer a tailor-made solution for every project</p>
        </div>
      </section>
    }
  }
  class Button extends React.Component {
    render() {
      return (  
            <a className="button" href='software'>Find out more
            <img src={rightArrow} alt="rightArrow"/>
            </a>
       
      )
    }
  }
  class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
        </header>
      )
    }
  }
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <a href='software'>
          <h2>{this.props.title}</h2>
          <p className="body-content">{this.props.text}</p>
          </a>
           <Button />
        </div>
      )
    }
  }
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
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
          <h1>Digital Services</h1>
          <p>We offer a tailor-made solution for every project</p>
        </div>
      </section>
    }
  }
  class Buttons extends React.Component {
    render() {
      return (  
      <div >
            <a className="button" href='digital'>Find out more
            <img src={rightArrow} alt="rightArrow"/>
            </a>
          </div>
       
      )
    }
  }
  class CardHeaders extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
        </header>
      )
    }
  }
  class CardBodys extends React.Component {
    render() {
      return (
        <div className="card-body">
           <a href='digital'>
          <h2>{this.props.title}</h2>
          <p className="body-content">{this.props.text}</p>
          </a>
          <Buttons />
        </div>
      )
    }
  }
  class Cards extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeaders image={this.props.detailss.image}/>
          <CardBodys title={this.props.detailss.title} text={this.props.detailss.text}/>
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
            <h1>Production Services</h1>
            <p>We offer a tailor-made solution for every project</p>
          </div>
        </section>
      }
    }
  class Buttonss extends React.Component {
      render() {
        return (  
        <div >
              <a className="button" href='production'>Find out more
              <img src={rightArrow} alt="rightArrow"/>
              </a>
            </div>
         
        )
      }
    }
  class CardHeaderss extends React.Component {
      render() {
        const { image } = this.props;
        var style = { 
            backgroundImage: 'url(' + image + ')',
        };
        return (
          <header style={style} className="card-header">
          </header>
        )
      }
    }
  class CardBodyss extends React.Component {
      render() {
        return (
          <div className="card-body">
           <a href='production'>
            <h2>{this.props.title}</h2>
            <p className="body-content">{this.props.text}</p>
            </a>
            <Buttonss />
          </div>
        )
      }
    }
  class Cardss extends React.Component {
      render() {
        return (
          <article className="card">
            <CardHeaderss image={this.props.detailsss.image}/>
            <CardBodyss title={this.props.detailsss.title} text={this.props.detailsss.text}/>
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
      <h2>
        Services
      </h2> 
      <h4>
        Over the many years of Zeroland existence,
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
