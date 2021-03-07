import React, { useEffect, useState, useRef  } from 'react';
import gsap from "gsap";
import { useIntersection } from "react-use";
import "../styles/pages/software.scss";
import { HashLink as Link } from 'react-router-hash-link';
// import ProductImage from "../assets/software/pro.png";
import { 
	useSpring, 
	// useTransform
 } from "framer-motion";
  
const Product = () => {
	const ease = [0.6, 0.05, -0.01, 0.99];
	let x = useSpring(0, { stiffness: 300, damping: 200, ease: ease });
	// const scale = useTransform(x, [-100, 0], [1.25, 1]);
	// const up = useTransform(x, [-100, 0], [-100, 0]);
  
	//state
	const [state, setState] = useState(false);
	console.log(state);
	// Update the state to check if the user has dragged the product
	useEffect(() => {
	  x.onChange(() => {
		x.get() > -100 ? setState(false) : setState(true);
	  });
	}, [x]);
 
	

	  // Ref for our element
	  const sectionRef = useRef(null);
	  // All the ref to be observed
	  const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: "0px",
		threshold: 0.2
	  });
	
	  // Animation for fading in
	  const fadeIn = element => {
		gsap.to(element, 1, {
		  opacity: 1,
		  y: -60,
		  ease: "power4.out",
		  stagger: {
			amount: 0.3
		  }
		});
	  };
	  // Animation for fading out
	  const fadeOut = element => {
		gsap.to(element, 1, {
		  opacity: 0,
		  y: -20,
		  ease: "power4.out"
		});
	  };
	    // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.2
  ? fadeOut(".fadeIn")
  : fadeIn(".fadeIn");
	return (
	<div className='product'>
		<div className="page">
		<div className="container">
      		<div className="row">
			  <section className="career-heading">
			<p className="item-depart">GlobalxSolutions Software House</p>
            <p className="item-description">
			GlobalxSolutions Software house is a team of young and passionate software engineers having different exposure of software development industry. We provide cutting edge software solutions to all size of businesses. We have helped 30 plus companies and enterprises clients worldwide in the last three years. 
			Each department possesses experienced and specified team to deliver the services. With the combination of technology, know-how and great communication and creative ideas, we are able to provide complete solutions under one roof for our esteemed clients. 
		    </p>
			<h2 className="item-title">GlobalxSolutions develop high-tech Web solutions for Big & Small scale businesses.</h2>
            <p className="item-description">
		    </p>
            <p className="item-description">
			Let’s start working on your project because we live and breathe in programming !
			</p>
      		</section>
      		</div>
    	</div>
		<div className='sectionSecond'>
        <div ref={sectionRef} className='inner'>
          <p className='fadeIn'>
			We build everything around "the people." We are passionate about solving problems that create hindrances for businesses. We all love programming and are addicted to embrace new technologies for creating new horizons for businesses. We have a vast experience in diagnosing the problem and suggesting the correct tech dose to cure the issue. We have successfully used Artificial Intelligence, Big Data, Machine Learning, IoT, ERP, CRM, POS at affordable costs.
          </p>
          <div className='btn-row fadeIn'>
			  <Link scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center'})} to="/services#software" key="/services#software">
			  WHAT WE OFFER AT OUR SOFTWARE HOUSE
			  </Link>
          </div>
        </div>
      	</div>
		</div>
	</div>
	);
};

const App = () => <>
    <br></br>
	<br></br>
	<br></br>
	<Product />
	<br></br>
</>;

export default App;
