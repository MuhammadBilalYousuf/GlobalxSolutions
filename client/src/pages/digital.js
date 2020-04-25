import React, { useEffect, useState, useRef  } from 'react';
import gsap from "gsap";
import { useIntersection } from "react-use";
import "../styles/pages/digital.scss";
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
			<p className="item-depart">Zeroland Digital House</p>
            <h2 className="item-title">ABOUT US</h2>
            <p className="item-description">
			Zeroland Digital offers complete services of digital marketing to small and large companies. Having 8 years in marketing service to local and international clients, we understand the demands of the new brands and provide them required solutions with complete digital marketing strategy having media planning and content development cycle as per customer behavior and the product niche. 
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
			  <h2 className="item-title">
			  We help businesses establishing a renowned brand from a small entity. 
				  </h2>
            <p className="item-description">
			The world has become a global village and the rate of digitization is accelerating. We just do not provide an online presence to enterprises but we chalk out plans and execute them to stand out from the crowd. Zeroland takes your enterprise from dull to dazzling with the help of the experienced digital marketing strategists. 
		    </p>
            <p className="item-description">
			We dealt in 360 marketing !
			</p>
      		</section>
      		</div>
    	</div>
		<div className='sectionSecond'>
        <div ref={sectionRef} className='inner'>
          <p className='fadeIn'>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className='btn-row fadeIn'>
			  <Link scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center'})} to="/services#digital" key="/services#software">
			  WHAT WE OFFER AT OUR DIGITAL HOUSE
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
