
import React from "react";
import "../styles/pages/works.scss";
import { animateScroll as scroll} from 'react-scroll';
import leftDown from "../assets/circled-down-2.svg";


const data = [
  {
    'name': 'Todolist',
    'img': 'https://unsplash.it/500/400?image=1078',
    'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
    'techno': 'React JS'
  },
  {
    'name': 'Camper Leaderboard',
    'img': 'https://unsplash.it/500/400?image=1062',
    'link': 'https://codepen.io/Kevin_barfleur/pen/jmemKJ',
    'techno': 'React JS'
  },
  {
    'name': 'Markdown Previewer',
    'img': 'https://unsplash.it/500/400?image=1042',
    'link': 'https://codepen.io/Kevin_barfleur/pen/NjOqoJ',
    'techno': 'React JS'
  },
  {
    'name': 'Quotes Generator',
    'img': 'https://unsplash.it/500/400?image=1025',
    'link': 'https://codepen.io/Kevin_barfleur/pen/WjgVqz',
    'techno': 'React JS'
  },
  {
    'name': 'Simon Game',
    'img': 'https://unsplash.it/500/400?image=1021',
    'link': 'https://codepen.io/Kevin_barfleur/pen/PmNNpO',
    'techno': 'Javascript'
  },
  {
    'name': 'Pomodoro Clock',
    'img': 'https://unsplash.it/500/400?image=1002',
    'link': 'https://codepen.io/Kevin_barfleur/pen/bqRbpo',
    'techno': 'Javacript'
  },
  {
    'name': 'JS Calculator',
    'img': 'https://unsplash.it/500/400?image=998',
    'link': 'hhttps://codepen.io/Kevin_barfleur/pen/ygWyNL',
    'techno': 'HTML5 / CSS3 / JavaScript'
  },
  {
    'name': 'Snake',
    'img': 'https://unsplash.it/500/400?image=983',
    'link': 'https://codepen.io/Kevin_barfleur/pen/KmXgwW',
    'techno': 'Javascript / Canvas'
  },
  {
    'name': 'Tic Tac Toe',
    'img': 'https://unsplash.it/500/400?image=964',
    'link': 'https://codepen.io/Kevin_barfleur/pen/ZKERgo',
    'techno': 'Javascript'
  },
  {
    'name': 'Show the local Weather',
    'img': 'https://unsplash.it/500/400?image=959',
    'link': 'https://codepen.io/Kevin_barfleur/pen/OWvpNK',
    'techno': 'JS / Meteo API'
  },
  {
    'name': 'witch.tv JSON API',
    'img': 'https://unsplash.it/500/400?image=954',
    'link': 'https://codepen.io/Kevin_barfleur/pen/egQrOr',
    'techno': 'Javascript / Twitch API'
  },
  {
    'name': 'Wikipedia Viewer',
    'img': 'https://unsplash.it/500/400?image=985',
    'link': 'https://codepen.io/Kevin_barfleur/pen/MJPZmz',
    'techno': 'JS / Wikipedia API'
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
