import React, { useEffect, useState, useRef  } from 'react';
import gsap from "gsap";
import { useIntersection } from "react-use";
import "../styles/pages/software.scss";
import { HashLink as Link } from 'react-router-hash-link';
import ProductImage from "../assets/software/pro.png";
import { motion, useSpring, useTransform } from "framer-motion";
  
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
			<p className="item-depart">Zeroland Software House</p>
            <h2 className="item-title">ABOUT US</h2>
            <p className="item-description">
			Zeroland Software house is a team of young and passionate software engineers having different exposure of software development industry. We provide cutting edge software solutions to all size of businesses. We have helped 60 plus companies and enterprises clients worldwide in the last two years. 
			Each department possesses experienced and specified team to deliver the services. With the combination of technology, know-how and great communication and creative ideas, we are able to provide complete solutions under one roof for our esteemed clients. 
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
            <h2 className="item-title">Zeroland Software develop high-tech Web solutions for Big & Small scale businesses.</h2>
            <p className="item-description">
				We build everything around "People". We are passionate for work / life balance. We all love programming and are addicted to new technologies.
				We have a vast experience in developing solutions for Web Industry. We successfully work with Artificial Intelligence, Big Data, Machine Learning, IoT, ERP, CRM, POS in a low-cost. It’s the best way to start prototyping
				and developing your next web application with us.
		    </p>
            <p className="item-description">
			We live and breathe in programming!
			</p>
      		</section>
      		</div>
    	</div>
		<div className='sectionSecond'>
        <div ref={sectionRef} className='inner'>
          <p className='fadeIn'>
		  Your ideas are turned into a reality by a process of examining your problem and finding a correct solution. We build highly affordable custom software for large and small companies. By applying modern design principles, in conjunction with the latest in cloud, mobile, and desktop technologies Assurance for highly affordable custom software for all type of companies with modern design principles is our utmost priority, and ultimately the result is the tailored solutions that connect co-workers with each other and companies with their customers. 
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
