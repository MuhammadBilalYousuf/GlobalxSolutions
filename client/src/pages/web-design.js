import React, { useEffect, useState } from 'react';
import "../styles/pages/web-design.scss";
import javascript from "../assets/javascript.svg";
import reactjs from "../assets/react.svg";
import angularjs from "../assets/angular.svg";
import html from "../assets/html5.svg";
import css from "../assets/css.svg";
import wordpress from "../assets/wordpress.svg";
import drupal from "../assets/drupal.svg";
import joomla from "../assets/joomla.svg";
import ProductImage from "../assets/software/pro.png";
import DownArrow from "../assets/down-arrow.svg";
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
  
	return (
		<div className='product'>
		<div className="page">
		<div className="container">
      		<div className="row">
			<section className="career-heading">
            <h2 className="item-title">WEB DESIGN & DEVELOPMENT</h2>
            <p className="item-description">
				<ul>
					<li className="item-mini-title">
					CMS/CUSTOM <img src={DownArrow} alt="DownArrow"/>
					</li>
					The web technology offers the best solutions for content management system. At Zeroland, we provide CMS service by utilizing the latest tools of the web technology. For large corporations, our web team always suggest the clients to opt for customized content management system as per the business requirement. 
					<li className="item-mini-title">
					WEBSITE DEVELOPMENT <img src={DownArrow} alt="DownArrow"/>
					</li>
					Zeroland’s professional web developers are fully equipped with the latest web development tools. We build secured, mobile-friendly, interactive and CMS based websites. Our main focus remains on quick loading of the website. In the free consultation, we guide our clients about the suitable platforms of the website and design as per their services and products nature. 
					<li className="item-mini-title">
					INTERFACE DESIGN & WEB PROTOTYPING <img src={DownArrow} alt="DownArrow"/>
					</li>
					We design User interfaces that are highly suitable and adjustable for brands and products’ functions. Assimilating the latest UI patterns, we provide a detailed attention to all angles of the UI, from color choice to typography, our team craft appealing UI design.
				</ul>
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
		</div>
	);
};

const timelineData = [
	{
		text: [
			<img src={wordpress} alt="wordpress"/>, ' WordPress', <br></br> , 
			<img src={joomla} alt="joomla"/>, ' Joomla', <br></br> , 
			<img src={drupal} alt="drupal"/>, ' Drupal' , <br></br> , 
			  ],
        category: {
			tag: 'CMS Platforms',
			color: '#ee0e23'
		}
	},
    {
		text: [
			' Javascript' , <img src={javascript} alt="javascript"/>, <br></br> , 
			' ReactJs' , <img src={reactjs} alt="reactjs"/>, <br></br> , 
			' AngularJs' , <img src={angularjs} alt="angularjs"/>, <br></br> , 
			' Html5' , <img src={html} alt="html5"/>, <br></br> , 
			' Css3' , <img src={css} alt="css3"/>, <br></br> , 
			  ],
        category: {
			tag: 'Frontend Platforms',
			color: '#418EEA'
		}
	}
]

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
          	  <p>{data.text}</p>
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container ">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

const App = () => <>
	<Product />
 	
	<div className="page" style={{marginTop: '-15px'}}>
		<div className="container">
	<section className="career-heading">
      <h2 className="font-center-title">
        Platforms we use
      </h2> 
	  </section>
     <br></br>
	<Timeline />
	</div>
	</div>

</>;

export default App;
