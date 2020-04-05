import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const caseStudies = [
  {
    id: 1,
    href: '/services#software',
    title: "SOFTWARE HOUSE",
    subtitle: "Our Software team love to build something unique for Scalable Web and Mobile Applications, perform tasks with cross-platform programming languages along with agile scrum process.",
    img: [
     "software"
    ]
  },
  {
    id: 2,
    href: '/services#digital',
    title: "DIGITAL HOUSE",
    subtitle: "Our digital team possess broader experience in re-shaping and transforming products into digital frames, your brand’s marketing from bottom to top",
    img: "digital"
  },
  {
    id: 3,
    href: '/services#production',
    title: "PRODUCTION HOUSE",
    subtitle: "Our production team carefully study the case and formulate video production plan accordingly. We have created expressive ideas regarding TV & Digital Commercials for major industries.",
    img: "production"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='row'>
          {caseStudies.map(caseItem => (
                 <Link scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center'})} to={caseItem.href}>
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
            </Link>
          ))}
        </div>
        </div>
    </section>
  );
};

export default Cases;
