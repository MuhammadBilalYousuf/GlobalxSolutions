import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bawanysecurity from "../assets/work/work.jpg";
import noblestructure from "../assets/work/work.jpg";
import alashopping from "../assets/work/work.jpg";

class Popup extends React.Component {
  render() {
    return(
      <div id="popup">
      <h2 className="green">{this.props.text}</h2>
      <button onClick={this.props.closePopup}>Close</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='demo'>
        <button onClick={this.togglePopup.bind(this)}>Create Popup</button>
        {this.state.showPopup ? 
          <Popup
            text='This is a new window!'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
};
class DemoCarousel extends React.Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src={bawanysecurity} />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src={noblestructure} />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <img src={alashopping} />
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
      );
  }
}

const Product = () => {
  return (
 <>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <App text="Mark" />
 <br></br>
 <DemoCarousel />
 </>
    );
};

export default Product;
