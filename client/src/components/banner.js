import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
        <h2>
            <div className='line'>
              <span>Hello, We're Zeroland Digital</span>
            </div>
            <div className='line'>
              <span>Software Development & Design Teams</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='./about-us'>
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
