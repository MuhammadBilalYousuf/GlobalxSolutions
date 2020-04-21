import React from 'react';
import "../styles/pages/tvc-dvc.scss";
// import ProductImage from "../assets/production/Portfolio-Book.jpeg";
import DownArrow from "../assets/down-arrow.svg";


const Product = () => {
	return (
		<div className='product'>
		<div className="page">
		<div className="container">
      		<div className="row">
			<section className="career-heading">
            <h2 className="item-title">TVC / DVC</h2>
            <p className="item-description">
				<ul>
					<li className="item-mini-title">
					DVC PRODUCTION <img src={DownArrow} alt="DownArrow"/>
					</li>
                    DVC has emerged as a blessing for the brands companies that bring more and more business and make your brand familiar to the billions of online users. Let us produce the concept of your DVC and enjoy the exciting results with Zeroland Production.
					<li className="item-mini-title">
					TVC PRODUCTION <img src={DownArrow} alt="DownArrow"/>
					</li>
                    TVC Television Video Commercial (TVC) is consid- ered the most effective video content. There is a huge audience that watches TV channels regularly will be knowing about your brand through your TVC. We create marvelous concepts for TVC which compete in the market and bring countless consumers with a single campaign.
				</ul>
		    </p>
      		</section>
      		</div>
    	</div>
		</div>
		</div>
	);
};


const slideData = [
  {
    index: 0,
    headline: 'Production Work',
    // button: 'Shop now',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 1,
    headline: 'Production Work',
    // button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 2,
    headline: 'Production Work',
    // button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  }
]


// =========================
// Slide
// =========================

class Slide extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
    this.slide = React.createRef()
  }
  
  handleMouseMove(event) {
    const el = this.slide.current
    const r = el.getBoundingClientRect()

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
  }
  
  handleMouseLeave(event) {    
    this.slide.current.style.setProperty('--x', 0)
    this.slide.current.style.setProperty('--y', 0)
  }
  
  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index)
  }
  
  imageLoaded(event) {
    event.target.style.opacity = 1
  }
  
  render() {
    const { src, headline, index } = this.props.slide
    const current = this.props.current
    let classNames = 'slide'
    
    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'
        
    return (
      <li 
        ref={this.slide}
        className={classNames} 
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img 
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>
        
        <article className="slide__content">
          <h2 className="slide__headline">{headline}</h2>
        </article>
      </li>
    )
  }
}


// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  )
}


// =========================
// Slider
// =========================

class Slider extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { current: 0 }
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
  }
  
  handlePreviousClick() {
    const previous = this.state.current - 1
        
    this.setState({ 
      current: (previous < 0) 
        ? this.props.slides.length - 1
        : previous
    })
  }
  
  handleNextClick() {
    const next = this.state.current + 1;
    
    this.setState({ 
      current: (next === this.props.slides.length) 
        ? 0
        : next
    })
  }
  
  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index
      })
    }
  }

  render() {
    const { current, direction } = this.state
    const { slides, heading } = this.props 
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
    const wrapperTransform = {
      'transform': `translateX(-${current * (100 / slides.length)}%)`
    }
    console.log(direction)
    
    return (
      <div className='sliders' aria-labelledby={headingId}>
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} class="visuallyhidden">{heading}</h3>
          
          {slides.map(slide => {
            return (
              <Slide
                key={slide.index}
                slide={slide}
                current={current}
                handleSlideClick={this.handleSlideClick}
              />
            )
          })}
        </ul>
        
        <div className="slider__controls">
          <SliderControl 
            type="previous"
            title="Go to previous slide"
            handleClick={this.handlePreviousClick}
          />
          
          <SliderControl 
            type="next"
            title="Go to next slide"
            handleClick={this.handleNextClick}
          />
        </div>
      </div>
    )
  }
}

const App = () => <>
<div className="page">
		<div className="container">
    <div className="row">
	<Product />
  </div></div></div>
  	<div className="container">
    <div className="row">
  <Slider heading="Example Slider" slides={slideData} />
  </div>
  </div>
</>;

export default App;
