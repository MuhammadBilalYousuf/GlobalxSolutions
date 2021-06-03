import React from 'react';
import "../styles/components/promise.scss";

const Card = ({ button, description, minidescription }) => {
  return (
      <div className="promise-StyledCard">
      <h2>{description}</h2>
      <p>{minidescription}</p>
      <div className='btn-row fadeIn'>
        <a href='/about-us' className="about">{button}</a>
      </div>
      </div>
  );
}
const ImageCard = ({ image }) => {
    return (
        <div className="showcases-StyledCard">
        <img src={require(`../assets/home/${image}.png`)} alt={image} />
        </div>
    );
  };

const Box = () => {
  var { one } = cardDescriptions;
  var { minione } = cardMiniDescriptions;
  return (
     <section className="promise">
      <div className="container">
      <div className="promise-StyledContainer">
      <ImageCard className="second-card" image="promise"/>
      <Card className="first-card" button="About Us" description={one} minidescription={minione}/>
      </div>
      </div>
    </section>
  );
};

var cardDescriptions = {
  one:
    "Our Promise:",
};

var cardMiniDescriptions = {
    minione:
      "Delivering innovations that matter for your business",
};

const Solutions = () => {
  return (
    <>
    <Box />
    <br></br>
    </>
  );
};

export default Solutions;
