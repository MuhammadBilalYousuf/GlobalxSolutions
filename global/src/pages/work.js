
import React from "react";
import "../styles/pages/works.scss";
import { animateScroll as scroll} from 'react-scroll';
import leftDown from "../assets/circled-down-2.svg";
import work from "../assets/work/work.jpg";


const data = [
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  },
  {
    'name': 'Naya Nazimabad',
    "img": work ,
    // 'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'Website'
  }
]

class Work extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <App />
      </div>
    )
  }
}

class App extends React.Component {
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
    data.map(item => works.push(item))
    this.setState({ works })
    setTimeout(() => {
      console.log(this.state)
    }, 2000)
  }

  render () {
    const cards = this.state.works.map((card, index) => <div className='card'><Works
      cardName={card.name}
      cardImg={card.img}
      cardTechno={card.techno}
      cardLink={card.link}
      key={index} /></div>)

    return (
      <div>
        <div className='cardHolder'>
          <h3 className='myWorks'>Our <mark className='markRed'>Works</mark></h3>
          { cards }
        </div>
      </div>
    )
  }
}

class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      text: "Why tell you, when we can show you?",
      print: ''
    }
  }

  componentWillMount () {
    this.writeText()
  }

  writeText () {
    const formatedText = this.state.text.split('')
    let print = ''

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
  }

  render () {
    return (
      <div className='page'>
        <div className='container-header'>
          <div className='typing-text'>
            <h2 dangerouslySetInnerHTML={{__html: this.state.print}} />
        <img onClick={() => scroll.scrollTo(750)} src={leftDown} alt="row"/>
          </div>
        </div>
      </div>
    )
  }
}

class Works extends React.Component {
  render () {
    return (
      <div>
        <a href={this.props.cardLink}>
          <img src={this.props.cardImg} alt={this.props.cardName} />
          <div className='info'>
            <h4> { this.props.cardName } </h4>
            <p> { this.props.cardTechno } </p>
          </div>
        </a>
      </div>
    )
  }
}

export default Work;
