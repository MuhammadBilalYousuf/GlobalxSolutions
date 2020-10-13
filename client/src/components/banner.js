import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right-second.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
        <h2>
            <div className='line'>
              <span>Hello, We're GlobalxSolutions</span>
            </div>
            <div className='line'>
              <span>Software Development, Production & Design Team</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='./about-us'>
              About Us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
