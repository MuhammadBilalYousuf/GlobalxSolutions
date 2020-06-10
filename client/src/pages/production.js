import React, { useEffect, useState, useRef  } from 'react';
import gsap from "gsap";
import { useIntersection } from "react-use";
import "../styles/pages/production.scss";
import { HashLink as Link } from 'react-router-hash-link';
import ProductImage from "../assets/software/pro.png";

import {
	motion,
	useSpring,
	useTransform
  } from "framer-motion";
  
  const Product = () => {
	const ease = [0.6, 0.05, -0.01, 0.99];
	let x = useSpring(0, { stiffness: 300, damping: 200, ease: ease });
	const scale = useTransform(x, [-100, 0], [1.25, 1]);
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
			<p className="item-depart">Zeroland Production House</p>
            <h2 className="item-title">ABOUT US</h2>
            <p className="item-description">
			Zeroland is one of the top production houses which offers complete in-house TVC/DVC production services in Pakistan. In the digital era, we have seen an unprecedented rise in the demand for DVC production. We love to hear about your thought, let’s have a cup of coffee and get a free consultation to give you a complete briefing about your brand’s video production strategy.
		    </p>
      		</section>
      		</div>
    	</div>
		</div>
		  <div className='product-container'>
			<motion.div
			  drag='x'
			  style={{ x, scale }}
			  dragElastic={0.05}
			  dragConstraints={{ left: -1060, right: 0 }}
			  className='product-image'>
			  <img src={ProductImage} alt='product' />
			</motion.div>
		  </div>
		<div className="page">
		<div className="container">
      		<div className="row">
      		<section className="career-heading">
			  <h2 className="item-title">Zeroland Production offers full production services to local and international clients.</h2>
            <p className="item-description">
			Idea generation, writing script to showcasing the videos on different digital and E-media platforms. We are always glad to understand and produce your thought by visually representing it through the best possible ways of media.
		    </p>
            <p className="item-description">
			We provide 360-degree solutions !
			</p>
      		</section>
      		</div>
    	</div>
		<div className='sectionSecond'>
        <div ref={sectionRef} className='inner'>
          <p className='fadeIn'>
		  We are always glad to understand and produce your thought by visually representing it through the best possible ways of media. It requires multiple formats of media to provide a mass coverage to get a brand’s story out.
		  We have majorly worked with real estate consultants, Hotels, Cafes, Builders and Developers automobile manufacturers and entertainment houses. Storytelling is not a piece of cake for everyone to describe it in the video format. Zeroland production where you find A to Z solutions of your production because our technically educated and experienced team generates proven results with its core commitment and dedication meet the client demand.
          </p>
          <div className='btn-row fadeIn'>
			  <Link scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center'})} to="/services#production" key="/services#software">
			  WHAT WE OFFER AT OUR PRODUCTIONS HOUSE
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
