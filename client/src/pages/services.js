import React from "react";
import "../styles/pages/about.scss";
import "../styles/pages/services.scss";
import Contact from "../components/contact";
import Footer from "../components/footer";
const Services = () => {
    return (
    <>
  <section className="about">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-inner-banner">
              <div className="hero-inner-col">
                <div className="hero-inner-title">
                  <h1>Services</h1>
                </div>
                <br></br>
                <div className="hero-inner-title">
                  <h3>
                    Over the many years of GlobalxSolutions existence, the company has established itself as a reliable partner that provides international quality services on time and on budget.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div class="wrapper">
            <h1>Research</h1>
          <div id="one">
          <h3><img className="research-service-icon" src={require(`../assets/services/undraw_Search_re_x5gq.svg`)} alt="ui-ux"/> Product Research</h3>
          <p>
          GlobalxSolutions provides support in the path from problem definition to the solution using UX practices: market research, scope definition, prototyping, user validation.
          </p>
          </div>
          <div id="two">
          <h3><img className="service-icon" src={require(`../assets/services/undraw_data_processing_yrrv.svg`)} alt="ui-ux"/> Design and Discovery</h3>
          <p>
          Our team takes care of product discovery. We talk to customers, reviewing their  feedback, and researching the competing products that customers are using.
          </p>
          </div>
        </div>  
        <div class="wrapper">
            <h1>Development</h1>
          <div id="one">
          <h3><img className="research-service-icon" src={require(`../assets/services/undraw_Tabs_re_a2bd.svg`)} alt="ui-ux"/> Web Development</h3>
          <p>
          Whether it is a simple CMS or a complex SaaS application, we can provide innovative web solutions to achieve your business goals.
          </p>
          </div>
          <div id="two">
          <h3><img className="service-icon" src={require(`../assets/services/undraw_design_process_cxoh.svg`)} alt="ui-ux"/> Mobile Development</h3>
          <p>
          We help our clients to enrich business with reliable mobile solutions, enabling seamless user experiences across all modern mobile platforms and IoT devices.
          </p>
          </div>
        </div>   
        <div class="wrapper">
            <h1>Design</h1>
          <div id="one">
          <h3><img className="research-service-icon" src={require(`../assets/services/undraw_Books_l33t.svg`)} alt="ui-ux"/> UX Design</h3>
          <p>
          Whether it is a simple CMS or a complex SaaS application, we can provide innovative web solutions to achieve your business goals.
          </p>
          </div>
          <div id="two">
          <h3><img className="service-icon" src={require(`../assets/services/undraw_design_components_9vy6.svg`)} alt="ui-ux"/> Web Design</h3>
          <p>
          We help our clients to enrich business with reliable mobile solutions, enabling seamless user experiences across all modern mobile platforms and IoT devices.
          </p>
          </div>
        </div>      
        <div class="wrapper">
          <div id="one">
          <h3><img className="research-service-icon" src={require(`../assets/services/undraw_progressive_app_m9ms.svg`)} alt="ui-ux"/> Rapid Prototyping</h3>
          <p>
          Whether it is a simple CMS or a complex SaaS application, we can provide innovative web solutions to achieve your business goals.
          </p>
          </div>
          <div id="two">
          <h3><img className="service-icon" src={require(`../assets/services/undraw_mobile_images_rc0q.svg`)} alt="ui-ux"/> Mobile App Design</h3>
          <p>
          We help our clients to enrich business with reliable mobile solutions, enabling seamless user experiences across all modern mobile platforms and IoT devices.
          </p>
          </div>
        </div> 
        <div class="wrapper">
            <h1>Testing</h1>
          <div id="one">
          <h3><img className="testing-service-icon" src={require(`../assets/services/undraw_online_test_gba7.svg`)} alt="ui-ux"/> Software Testing</h3>
          <p>
          Whether it is a simple CMS or a complex SaaS application, we can provide innovative web solutions to achieve your business goals.
          </p>
          </div>
          <div id="two">
          <h3><img className="service-icon" src={require(`../assets/services/undraw_text_files_au1q.svg`)} alt="ui-ux"/> Manual Testing</h3>
          <p>
          We help our clients to enrich business with reliable mobile solutions, enabling seamless user experiences across all modern mobile platforms and IoT devices.
          </p>
          </div>
        </div>    
        <div class="wrapper">
            <h1>Integration</h1>
          <div id="one">
          <h3><img className="crm-service-icon" src={require(`../assets/services/undraw_zoom_in_1txs.svg`)} alt="ui-ux"/> CRM</h3>
          <p>
          Whether it is a simple CMS or a complex SaaS application, we can provide innovative web solutions to achieve your business goals.
          </p>
          </div>
          <div id="two">
          <h3><img className="service-icon" src={require(`../assets/services/undraw_online_transactions_02ka.svg`)} alt="ui-ux"/> Payment Gateways</h3>
          <p>
          We help our clients to enrich business with reliable mobile solutions, enabling seamless user experiences across all modern mobile platforms and IoT devices.
          </p>
          </div>
        </div>    
  </section>
  <br></br>
  <br></br>
  <br></br>
  <Contact />
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
        id="websites"
      ></video>
      <video
        src={require(`../homepage/videos/apps.mp4`)}
        preload="auto"
        autoPlay
        muted
        loop
        id="apps"
      ></video>
      <video
        src={require(`../homepage/videos/branding.mp4`)}
        preload="auto"
        autoPlay
        muted
        loop
        id="branding"
      ></video>
    </div>
  </div>
    </>
  );
};

export default Services;
