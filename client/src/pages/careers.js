import React from 'react';
import "../styles/pages/careers.scss";
import career1 from "../assets/career1.png";
import career2 from "../assets/career2.jpg";
import Footer from "../components/footer";

// Jobs
function Card(props) {
  return (
    <div className="career-card">
      <h1>{props.title}</h1>
      <p style={{color: "grey"}}>{props.details}</p>
      <p>{props.hastags}</p>
      <span>{props.apply}</span>
     </div>
  );
}
// End Jobs
// Apply Button
class SwipeButton extends React.Component {
  constructor(props){
    super(props);
    this.swiper = React.createRef();
    this.swiperContainer = React.createRef();
    this.state = { locked: true }
  }

  mouseIsDown = false
  slideMovementTotal = 0;
  initialMouse = 0;

  handleSwipeStart = (event) => {
    this.mouseIsDown = true;
    this.slideMovementTotal = this.swiperContainer.current.offsetWidth - this.swiper.current.offsetWidth - 10;
    this.initialMouse = event.clientX || event.nativeEvent.touches[0].pageX;
  }
  
  handleSwipeMove = (event) => {
    if (!this.mouseIsDown)
      return;

    const currentMouse = event.clientX || event.nativeEvent.touches[0].pageX;
    const relativeMouse = currentMouse - this.initialMouse;
    // const slidePercent = 1 - (relativeMouse / this.slideMovementTotal);
    
    if (relativeMouse <= 0) {
        this.swiper.current.style.left = '0px';
        return;
    }
    if (relativeMouse >= this.slideMovementTotal) {
        this.swiper.current.style.left = `${this.slideMovementTotal}px`;
        return;
    }
    this.swiper.current.style.left = `${relativeMouse}px`;
  }
  
  handleSwipeEnd = (event) => {
    if (!this.mouseIsDown)
        return;
    this.mouseIsDown = false;
    const currentMouse = event.clientX || event.changedTouches[0].pageX;
    const relativeMouse = currentMouse - this.initialMouse;

    if (relativeMouse < this.slideMovementTotal) {
        this.swiper.current.style.left = '0px';
        return;
    }
    
    // call success function below
    this.setState({ locked: false });
    this.swiper.current.style.visibility = 'hidden';
  }

  lockAgain = () => {
    this.setState({ locked: true });
    this.swiper.current.style.left = '0px';
    this.swiper.current.style.visibility = 'visible';
  }

  renderSwiper = () => (
    <div
      ref={this.swiper}
      className="swiper"
      onMouseDown={this.handleSwipeStart}
      onTouchStart={this.handleSwipeStart}
      onMouseMove={this.handleSwipeMove}
      onTouchMove={this.handleSwipeMove}
      onMouseUp={this.handleSwipeEnd}
      onTouchEnd={this.handleSwipeEnd}
    >
      Apply
    </div>
  )

  renderUnlockText = () => (
    <div>
      <a style={{color: 'white', textDecoration: 'none'}} href="mailto:careers@globalxsolutions.com">
      <span style={{color: 'white', textDecoration: 'none'}}>careers@globalxsolutions.com</span>
      </a>
    </div>
  )

  renderAnimation = () => (
    <div className={`swiper ${this.state.locked ? 'ghost-slider' : 'hidden'}`}>
      Now
    </div>
  )

  render() {
    return (
      <div
        onMouseMove={this.handleSwipeMove}
        onTouchMove={this.handleSwipeMove}
        onMouseUp={this.handleSwipeEnd}
        onTouchEnd={this.handleSwipeEnd}
        className="main-swipe"
      >
        <div>
          <div ref={this.swiperContainer} id="swipe-button-bg">
            { this.renderAnimation() }
            { this.renderSwiper() }
            { !this.state.locked && this.renderUnlockText() }
          </div>
        </div>
      </div>
    )
  }
}
// End Apply Button

const Careers = () => {
 return(
   <>
     <section className="about">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-inner-banner">
              <div className="hero-inner-col">
                <div className="hero-inner-title">
                  <h1>Evolve together!</h1>
                </div>
                <br></br>
                <div className="hero-inner-title">
                  <h3>
                  Our team consists of personalities who love to work together since many years. As we grow and mature, it becomes increasingly clear that we need talented people that also culturally fit.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
      {/* <Card 
      title="Graphics Designer"  
    details="Do you have a keen eye, an extraordinary sense of graphic balance and a strong love for typography? Apply your creative talents to the creation of innovative and effective digital experiences."  
    hastags="#2to3Years #Morning #karachi"
    apply={
      <SwipeButton />
      } />
       
      <Card title="UI/UX designer"
    details="Do you think a ???user-first??? approach is essential to creating a quality digital experience? Help us better understand user needs in order to provide them with the best possible solutions." 
    hastags="#2to3Years #Morning #karachi"
    apply={ 
      <SwipeButton />
      } /> */}
      <Card title="International Sales"  
    details="If you are passionate about sales and earn a handsome salary with lucrative commission. we are here to train you but you must passionate about learning and sales." 
    hastags="#1+Years #Morning #karachi"
    apply={
      <SwipeButton />
      } />
      <Card title="Full stack developer"  
    details="You are an experienced developer, capable of pushing the limits of the web. If you constantly follow the evolution of new technologies and good web development practices."
    hastags="#2to3Years #Morning #karachi"
    apply={
      <SwipeButton />
      } />
    </div>
  <br></br>
  <br></br>
  <br></br>
  <Footer />
    <div className="cursor">
      <div className="cursor-media">
            <video
              src={require(`../homepage/videos/websites.mp4`)}
              preload="auto"
              autoPlay
              muted
              loop
              id="entrepreneur"
            ></video>
            <video
              src={require(`../homepage/videos/apps.mp4`)}
              preload="auto"
              autoPlay
              muted
              loop
              id="investor"
            ></video>
            <video
              src={require(`../homepage/videos/branding.mp4`)}
              preload="auto"
              autoPlay
              muted
              loop
              id="philanthropist"
            ></video>
          </div>
    </div>
    </>
 )
}

export default Careers;
