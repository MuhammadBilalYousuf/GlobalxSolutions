import React from "react";

const caseStudies = [
  {
    id: 1,
    title: "SOFTWARE HOUSE",
    subtitle: "Our Software team love to build something unique for Scalable Web and Mobile Applications, perform tasks with cross-platform programming languages along with agile scrum process.",
    // subtitle: "Brand/Product sites, Consumer sites, E-commerce sites, Scalability ERP's, Product design and UI/UX, Business-tailored architecture, manual & automated testing",
    img: "software"
  },
  {
    id: 2,
    title: "DIGITAL HOUSE",
    subtitle: "Our digital team possess broader experience in re-shaping and transforming products into digital frames, your brand’s marketing from bottom to top",
    img: "digital"
  },
  {
    id: 3,
    title: "PRODUCTION HOUSE",
    subtitle: "Our production team carefully study the case and formulate video production plan accordingly. We have created expressive ideas regarding TV & Digital Commercials for major industries.",
    img: "production"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        {/* <div className='cases-navigation'>
          <div className='cases-arrow prev '>
            <CasesPrev />
          </div>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div> */}
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default Cases;
