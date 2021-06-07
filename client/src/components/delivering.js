import React from 'react';
import "../styles/components/delivering.scss";

const Card = ({ title, description, minidescription }) => {
  return (
      <div className="showcases-StyledCard">
      <p>{description}</p>
      <h2>{title}</h2>
      <h3>{minidescription}</h3>
      </div>
  );
};
const ImageCard = ({ image }) => {
    return (
        <div className="showcases-StyledCard">
        <img src={require(`../assets/home/showcase/${image}.png`)} alt={image} />
        </div>
    );
  };

const Box = () => {
  var { one, two, three, four, five, six } = cardDescriptions;
  var { minione, minitwo, minithree, minifour, minifive, minisix } = cardMiniDescriptions;
  return (
     <section className="showcases">
      <div className="container">
        <div className="showcases-inner-title">
          <h1>Showcases</h1>
        </div>
      <div className="showcases-StyledContainer">
      <Card className="first-card" title="Spirit Magnet" description={one} minidescription={minione}/>
      <ImageCard className="second-card" image="spiritmagnet"/>
      <Card className="third-card" title="Online Texas Ltc" description={two} minidescription={minitwo}/>
      <ImageCard className="fourth-card" image="onlinetexasltc"/>
      <Card className="fifth-card" title="Knauf" description={three} minidescription={minithree}/>
      <ImageCard className="sixth-card" image="knauf"/>
      <Card className="seventh-card" title="Care Express" description={four} minidescription={minifour}/>
      <ImageCard className="eighth-card" image="careexpress"/>
      <Card className="nineth-card" title="iMotion" description={five} minidescription={minifive}/>
      <ImageCard className="tenth-card" image="imotion"/>
      </div>
      </div>
    </section>
  );
};

var cardDescriptions = {
  one:
    "USA",
  two:
    "USA",
  three:
    "GERMANY",
  four:
    "SINGAPORE",
  five:
    "MALAYSIA"
};

var cardMiniDescriptions = {
    minione:
      "Beautiful, simple to navigate platform with high quality school spirit products that combine with bulk order system as well as can submit artwork to better understand operational needs.",
    minitwo:
      "A online technology-enabled platform to purchase course with support system for provider to teach from at home and in communities.",
    minithree:
      "High performance training platform for become a qualified Installer with knauf. Our CMS provide secure and easy to handle board.",
    minifour:
      "Attractive platform with Customised booking form where price calculate from origin to destination distance. Record as you go. No green forms.",
    minifive:
      "Beautiful, simple, end-to-end digital solution web. Did 360 ° branding concept, perfect colorful web that perfectly reflects the brand approach.",
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
