import React from 'react';
import "../styles/pages/works.scss";
import { animateScroll as scroll} from 'react-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import VideoThumbnail from "reactautoplay";
import leftDown from "../assets/circled-down-2.svg";
import markhor from "../assets/work/software/markhor.jpg";
import foodlove from "../assets/work/software/foodlove.png";
import propertyportal from "../assets/work/software/propertyportal.png";
import ankahi from "../assets/work/software/ankahi.png";
import ankahinews from "../assets/work/software/ankahinews.png";
import bawany from "../assets/work/software/bawany.png";
import bawanysecurity from "../assets/work/software/bawanysecurity.png";
import noblestructure from "../assets/work/software/noblestructure.png";
import alashopping from "../assets/work/software/alashopping.png";
import cafe21_1 from "../assets/work/digital/cafe21/1.jpg";
import cafe21_2 from "../assets/work/digital/cafe21/2.jpg";
import cafe21_3 from "../assets/work/digital/cafe21/3.jpg";
import cafe21_4 from "../assets/work/digital/cafe21/4.jpg";
import cafe21_5 from "../assets/work/digital/cafe21/5.jpg";
import cafe21_6 from "../assets/work/digital/cafe21/6.jpg";
import cafe21_7 from "../assets/work/digital/cafe21/7.jpg";
import cafe21_8 from "../assets/work/digital/cafe21/8.jpg";
import cafe21_9 from "../assets/work/digital/cafe21/9.jpg";
import nayanazmabad_1 from "../assets/work/digital/nayanazmabad/1.jpg";
import nayanazmabad_2 from "../assets/work/digital/nayanazmabad/2.jpg";
import nayanazmabad_3 from "../assets/work/digital/nayanazmabad/3.jpg";
import nayanazmabad_4 from "../assets/work/digital/nayanazmabad/4.jpg";
import nayanazmabad_5 from "../assets/work/digital/nayanazmabad/5.jpg";
import nayanazmabad_6 from "../assets/work/digital/nayanazmabad/6.jpg";
import cybertrack_1 from "../assets/work/digital/cybertrack/1.jpg";
import cybertrack_2 from "../assets/work/digital/cybertrack/2.jpg";
import cybertrack_3 from "../assets/work/digital/cybertrack/3.jpg";
import cybertrack_4 from "../assets/work/digital/cybertrack/4.jpg";
import nizamia_1 from "../assets/work/digital/nizamia/1.jpg";
import nizamia_2 from "../assets/work/digital/nizamia/2.jpg";
import nizamia_3 from "../assets/work/digital/nizamia/3.jpg";
import nizamia_4 from "../assets/work/digital/nizamia/4.jpg";
import nizamia_5 from "../assets/work/digital/nizamia/5.jpg";
import nizamia_6 from "../assets/work/digital/nizamia/6.jpg";
import nizamia_7 from "../assets/work/digital/nizamia/7.jpg";
import nizamia_8 from "../assets/work/digital/nizamia/8.jpg";

class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      text: "Why tell you? ",
      text2: "when we can show you!",
      print: '',
      print2: ''
    }
  }

  componentWillMount () {
    this.writeText()
  }

  writeText () {
    const formatedText = this.state.text.split('')
    const formatedText2 = this.state.text2.split('')
    let print = ''
    let print2 = ''

    const loop = setInterval(() => {
      if (formatedText.length >= 1) {
        if (formatedText[0] === '1') {
          print += '<mark>'
          formatedText.shift()
        } else if (formatedText[0] === '2') {
          print += '</mark>'
          formatedText.shift()
        } else {
          print += formatedText.shift()
          this.setState({ print })
        }
      } else { clearInterval(loop) }
    }, 90)
    const loop2 = setInterval(() => {
      if (formatedText2.length >= 1) {
        if (formatedText2[0] === '1') {
          print2 += '<mark>'
          formatedText2.shift()
        } else if (formatedText2[0] === '2') {
          print2 += '</mark>'
          formatedText2.shift()
        } else {
          print2 += formatedText2.shift()
          this.setState({ print2 })
        }
      } else { clearInterval(loop2) }
    }, 90)
  }

  render () {
    return (
      <div className='page'>
        <div className='container-header'>
          <div className='typing-text'>
            <h2 dangerouslySetInnerHTML={{__html: this.state.print}} />
            <h2 dangerouslySetInnerHTML={{__html: this.state.print2}} />
        <img onClick={() => scroll.scrollTo(570)} src={leftDown} alt="row"/>
          </div>
        </div>
      </div>
    )
  }
}

// Software Work
const Software = [
  {
    'name': 'Markhor Clothing',
    "img": markhor ,
    'link': 'https://markhorclothing.com',
    'techno': 'Experience The Royal In You!'
  },
  {
    'name': 'Food Love',
    "img": foodlove ,
    'link': 'https://foodlove.pk',
    'techno': 'FoodLove is all about food food and food!'
  },
  {
    'name': 'Property Portal',
    "img": propertyportal ,
    'link': 'https://propertyportal.pk',
    'techno': 'A complete real estate company!'
  },
  {
    'name': 'Ankahi',
    "img": ankahi ,
    'link': 'https://ankahi.pk',
    'techno': 'Poetry & Musical heritage of Pakistan!'
  },
  {
    'name': 'Ankahi News',
    "img": ankahinews ,
    'link': 'https://news.ankahi.pk',
    'techno': 'All the news you need and more!'
  },
  {
    'name': 'Bawany',
    "img": bawany ,
    'link': 'https://bawanygroup.pk/realtor/',
    'techno': 'Rich experience in real estate industry!'
  },
  {
    'name': 'Bawany Security',
    "img": bawanysecurity ,
    'link': 'http://bestsecurities.com.pk',
    'techno': 'Broad variety of equity market related services!'
  },
  {
    'name': 'Noble Structure',
    "img": noblestructure ,
    'link': 'https://noblestructure.com',
    'techno': 'Strives to shape the dreams into reality!'
  },
  {
    'name': 'Ala Shopping',
    "img": alashopping ,
    'link': 'http://alashopping.pk',
    'techno': 'Website'
  }
]
class Softwarework extends React.Component {
  constructor () {
    super()

    this.state = {
      works: []
    }
  }

  componentWillMount () {
    this.loadWork()
  }

  loadWork () {
    const works = []
    Software.map(item => works.push(item))
    this.setState({ works })
    setTimeout(() => {
      console.log(this.state)
    }, 2000)
  }

  render () {
    const cards = this.state.works.map((card, index) => 
    <div className='card'>
      <Softwareworks
      cardName={card.name}
      cardImg={card.img}
      cardTechno={card.techno}
      cardLink={card.link}
      key={index} />
      </div>)

    return (
      <div>
        <div className='cardHolder'>
          <h3 className='myWorks'>Our <mark className='markRed'>Software Work</mark></h3>
          { cards }
        </div>
      </div>
    )
  }
}
class Softwareworks extends React.Component {
  render () {
    return (
      <div>
        <a href={this.props.cardLink} target="_blank" rel="noopener noreferrer">
          <div class="pic">
          <img src={this.props.cardImg} alt="software"/>
          </div>
          <div className='info'>
            <h4> { this.props.cardName } </h4>
            <p style={{color: "grey"}}> { this.props.cardTechno } </p>
          </div>
        </a>
      </div>
    )
  }
}
// End Software Work
// Digital Work
class Cafe21 extends React.Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src={cafe21_1} alt="cafe21"/>
                  <p className="legend">Cafe21</p>
              </div>
              <div>
                  <img src={cafe21_2} alt="cafe21" />
                  <p className="legend">Cafe21</p>
              </div>
              <div>
                  <img src={cafe21_3} alt="cafe21" />
                  <p className="legend">Cafe21</p>
              </div>
              <div>
                  <img src={cafe21_4} alt="cafe21" />
                  <p className="legend">Cafe21</p>
              </div>
              <div>
                  <img src={cafe21_5} alt="cafe21" />
                  <p className="legend">Cafe21</p>
              </div>
              <div>
                  <img src={cafe21_6} alt="cafe21" />
                  <p className="legend">Cafe21</p>
              </div>
              <div>
                  <img src={cafe21_7} alt="cafe21" />
                  <p className="legend">Cafe21</p>
              </div>
              <div>
                  <img src={cafe21_8} alt="cafe21" />
                  <p className="legend">Cafe21</p>
              </div>
              <div>
                  <img src={cafe21_9} alt="cafe21" />
                  <p className="legend">Cafe21</p>
              </div>
          </Carousel>
      );
  }
}
class NayaNazmabad extends React.Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src={nayanazmabad_1} alt="Naya Nazimabad" />
                  <p className="legend">Naya Nazimabad</p>
              </div>
              <div>
                  <img src={nayanazmabad_2} alt="Naya Nazimabad" />
                  <p className="legend">Naya Nazimabad</p>
              </div>
              <div>
                  <img src={nayanazmabad_3} alt="Naya Nazimabad" />
                  <p className="legend">Naya Nazimabad</p>
              </div>
              <div>
                  <img src={nayanazmabad_4} alt="Naya Nazimabad" />
                  <p className="legend">Naya Nazimabad</p>
              </div>
              <div>
                  <img src={nayanazmabad_5} alt="Naya Nazimabad" />
                  <p className="legend">Naya Nazimabad</p>
              </div>
              <div>
                  <img src={nayanazmabad_6} alt="Naya Nazimabad" />
                  <p className="legend">Naya Nazimabad</p>
              </div>
          </Carousel>
      );
  }
}
class CyberTrack extends React.Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src={cybertrack_1} alt="Cyber Track" />
                  <p className="legend">Cyber Track</p>
              </div>
              <div>
                  <img src={cybertrack_2} alt="Cyber Track" />
                  <p className="legend">Cyber Track</p>
              </div>
              <div>
                  <img src={cybertrack_3} alt="Cyber Track" />
                  <p className="legend">Cyber Track</p>
              </div>
              <div>
                  <img src={cybertrack_4} alt="Cyber Track" />
                  <p className="legend">Cyber Track</p>
              </div>
          </Carousel>
      );
  }
}
class Nizamia extends React.Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src={nizamia_1} alt="Nizamia" />
                  <p className="legend">Nizamia</p>
              </div>
              <div>
                  <img src={nizamia_2} alt="Nizamia" />
                  <p className="legend">Nizamia</p>
              </div>
              <div>
                  <img src={nizamia_3} alt="Nizamia" />
                  <p className="legend">Nizamia</p>
              </div>
              <div>
                  <img src={nizamia_4} alt="Nizamia" />
                  <p className="legend">Nizamia</p>
              </div>
              <div>
                  <img src={nizamia_5} alt="Nizamia" />
                  <p className="legend">Nizamia</p>
              </div>
              <div>
                  <img src={nizamia_6} alt="Nizamia" />
                  <p className="legend">Nizamia</p>
              </div>
              <div>
                  <img src={nizamia_7} alt="Nizamia" />
                  <p className="legend">Nizamia</p>
              </div>
              <div>
                  <img src={nizamia_8} alt="Nizamia" />
                  <p className="legend">Cyber Track</p>
              </div>
          </Carousel>
      );
  }
}

const Digital = [
    {
      img: <Cafe21 /> 
    },
    {
      img: <NayaNazmabad /> 
    },
    {
      img: <CyberTrack /> 
    },
    {
      img: <Nizamia /> 
    }
  ]
  class Digitalwork extends React.Component {
    constructor () {
      super()
  
      this.state = {
        works: []
      }
    }
  
    componentWillMount () {
      this.loadWork()
    }
  
    loadWork () {
      const works = []
      Digital.map(item => works.push(item))
      this.setState({ works })
      setTimeout(() => {
        console.log(this.state)
      }, 2000)
    }
  
    render () {
      const cards = this.state.works.map((card, index) => <div className='card'>
        <Digitalworks
        cardImg={card.img}
        key={index} /></div>)
  
      return (
        <div>
          <div className='cardHolder'>
            <h3 className='myWorks'>Our <mark className='markRed'>Digital Works</mark></h3>
            { cards }
          </div>
        </div>
      )
    }
  }
  class Digitalworks extends React.Component {
    render () {
      return (
            <div>
            {this.props.cardImg}
            </div>
      )
    }
  }
// End Digital Work
// Digital Work

const VIDEO_1 = () => {
  return (
      <VideoThumbnail
        title='Corona Virus Safety Prevention'
        // preview='https://media1.giphy.com/media/llsb2HU9sKfK57pcnf/giphy480p.mp4'
        // preview='https://media2.giphy.com/media/SwCRrlSUfdTd5SMlai/giphy480p.mp4'
        preview='https://res.cloudinary.com/zeroland-digital/video/upload/v1586229172/COVID-19_Precautions-ZerolandDigital_waiirf.mp4'
        badge='Client Name'
        badgeBG='#EF798A'
        message='Make sure to keep your hands clean 🔥🔥'
        muted={false}
        // width={450} 
        classname='customClassName' /> 
  )
}

const Production = [
  {
    img: <VIDEO_1 /> 
  },
  {
    img: <VIDEO_1 /> 
  },
  {
    img: <VIDEO_1 /> 
  },
  {
    img: <VIDEO_1 /> 
  }
    ]
  class Productionwork extends React.Component {
    constructor () {
      super()
  
      this.state = {
        works: []
      }
    }
  
    componentWillMount () {
      this.loadWork()
    }
  
    loadWork () {
      const works = []
      Production.map(item => works.push(item))
      this.setState({ works })
      setTimeout(() => {
        console.log(this.state)
      }, 2000)
    }
  
    render () {
      const cards = this.state.works.map((card, index) => 
      <div className='card2'>
        <Productionworks
        cardImg={card.img}
        key={index} /></div>)
  
      return (
        <div>
          <div className='cardHolder'>
            <h3 className='myWorks'>Our <mark className='markRed'>Production Works</mark></h3>
            { cards }
          </div>
        </div>
      )
    }
  }
  class Productionworks extends React.Component {
    render () {
      return (
            <div>
            {this.props.cardImg}
            </div>
      )
    }
  }
 
// End Digital Work


const data = [
    {
      title: 'Software Work',
      content: <Softwarework />
    },
    {
      title: 'Digital Work',
      content: <Digitalwork />
    },
    {
      title: 'Production Work',
      content: <Productionwork />
    }
  ];
  
  class Application extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        index: 0
      }
    }
    
    render() {
      return (
        <div className="main">
          <div className="card">
            <div className="tab">
              <ul className="tab-list">
                {
                  data.map( (tab, i) =>
                    <li key={i}
                      data-active={ this.state.index === i }
                      onClick={ () => this.setState({ index: i }) }>
                        {tab.title}
                    </li>
                  )
                }
              </ul>
              <div className="tab-content">
                <div data-content={this.state.index + 1}>
                  {data[this.state.index].content}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
const Careers = () => <>
        <Header />
    <Application tabs={data} />
</>;

export default Careers;
