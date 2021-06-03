import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ArrowRight from  '../assets/next.svg';

const caseStudies = [
  {
    id: 1,
    href: '/about-us',
    title: 'We',
    subtitle: 'We are technical and open-minded. Work hard regardless of who is or isn’t watching. We build products and bring innovations to the World that converts into client’s profit.',
    img: 'undraw_programming_2svr'
  },
  {
    id: 2,
    href: '/about-us',
    title: 'Our Mission',
    subtitle: 'Challenges in every project give us new opportunities for the development. That’s why we’re adaptive and flexible, and keep our internal processes effective.',
    img: [
     'undraw_interview_rmcf'
    ]
  },
  {
    id: 3,
    href: '/about-us',
    title: 'Our Community',
    subtitle: 'Everything we do as the company for GlobalxSolutions and our clients helps different communities of software engineers. And we are proud to be part of those essential changes.',
    img: [
     'undraw_Work_chat_re_qes4'
    ]
  }
];

const Cases = () => {
  return (
   <section className='cases'>
      <div className='container-fluid'>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <Link scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center'})} to={caseItem.href} key={caseItem.id}>
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <h2>{caseItem.title}</h2>
                <span>{caseItem.subtitle}</span>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/home/${caseItem.img}.svg`)}
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
