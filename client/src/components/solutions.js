import React from 'react';
import "../styles/components/banner.scss";

const Card = ({ title, className, description, image }) => {
  return (
      <div className="banner-StyledCard">
      <img src={require(`../assets/home/${image}.svg`)} alt={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      </div>
  );
};

const Box = () => {
  var { one, two, three, four, five, six } = cardDescriptions;
  return (
     <section className="banner">
      <div className="container">
        <div className="banner-inner-title">
          <h1>Solutions we deliver</h1>
        </div>
      <div className="banner-StyledContainer">
      <Card className="first-card" title="Business Processes Automation" description={one} image="undraw_Business_analytics_re_tfh3"/>
      <Card className="second-card" title="Product research and design" description={two} image="undraw_Mind_map_re_nlb6"/>
      <Card className="third-card" title="Web & Mobile applications for B2B and B2C" description={three} image="undraw_online_payments_luau"/>
      <Card className="fourth-card" title="Legacy software modernization" description={four} image="undraw_Code_review_re_woeb"/>
      <Card className="fifth-card" title="Extensions &  Plugin Development" description={five} image="undraw_version_control_re_mg66"/>
      <Card className="sixth-card" title="Scaling product delivery" description={six} image="undraw_progressive_app_m9ms"/>
      </div>
      </div>
    </section>
  );
};

var cardDescriptions = {
  one:
    "Enhance your processes with less efforts",
  two:
    "Solve real business problems with coding",
  three:
    "Development of native mobile apps for iOS and Android, Branding and design, Possibility to access organic and paid users, Cost efficiency. Custom software that you need, nothing else.",
  four:
    "Application modernization, Deployment modernization, Business model modernization, Technology upgrade. Let your systems meet the needs of the business now.",
  five:
    "Extensible, secure, and reliable custom WordPress plugin development focuses on developing and customizing plugins, components, and modules that fit client needs and specifications.",
  six:
    "When it comes to agile software development, we break it into 4 key phases: requirements elicitation, proposition, product development, and pivoting.",
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
