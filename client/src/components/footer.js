import React from 'react';
import "../styles/components/footer.scss";

class FooterBox extends React.Component {
    
    render() {
      return (
      <div className='container'>
        <h1 className="footer-company-heading">We are here to build high-quality web and mobile applications that build your business.</h1>
        <p className="footer-company-meta"><a href="/about-us">About Us</a> | <a href="/services">Services</a> | <a href="/approach">Get in touch with us</a></p>
        <p className="footer-company-meta"><a href="/audit">Get a free audit</a> | <a href="/careers">Careers & Meetup</a></p>
        <p className="footer-company-copywrite">© 2021 GlobalxSolutions. All Rights Reserved.</p>
      </div>   
      );
    }
}

const Industries = () => {
  return (
    <>
    <div className="footer">
      <br></br>
      <br></br>
    <FooterBox />
    <br></br>
      <br></br>
    </div>
    </>
  );
};

export default Industries;
