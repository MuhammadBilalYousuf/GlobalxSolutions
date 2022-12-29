import React from 'react';
import "../styles/components/footer.scss";
import { SocialIcon } from 'react-social-icons';

class FooterBox extends React.Component {
    
    render() {
      return (
      <div className='container'>
        <h1 className="footer-company-heading"><SocialIcon url="https://pinterest.com/" network="pinterest" style={{ height: 25, width: 25 }} />  <SocialIcon url="https://facebook.com/" network="facebook" style={{ height: 25, width: 25 }} />  <SocialIcon url="https://instagram.com/" network="instagram" style={{ height: 25, width: 25 }} />  <SocialIcon url="https://twitter.com/" network="twitter" style={{ height: 25, width: 25 }} />  <SocialIcon url="https://linkedin.com/" network="linkedin" style={{ height: 25, width: 25 }} /></h1>
        <p className="footer-company-meta"><a href="/">HOME/ABOUT</a> | <a href="/post">BLOG/NEWS</a> | <a href="/social-media">SOCIAL MEDIA</a></p>
        <p className="footer-company-meta"><a href="/contact">CONTACT</a></p>
        <p className="footer-company-copywrite">© 2023 IgenTan. All Rights Reserved.</p>
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
