import React, { useEffect, useState } from 'react';
import "../styles/pages/software.scss";
import nodejs from "../assets/node-js.svg";
import reactjs from "../assets/react.svg";
import angularjs from "../assets/angular.svg";
import html from "../assets/html5.svg";
import css from "../assets/css.svg";
import python from "../assets/python.svg";
import mongodb from "../assets/mongo_db.svg";
import postgresql from "../assets/postgre_sql.svg";
import wordpress from "../assets/wordpress.svg";
import magento from "../assets/magento.svg";
import opencart from "../assets/opencart.svg";
import net from "../assets/net.svg";
import php from "../assets/php.svg";
import sql from "../assets/sql.svg";
import mysql from "../assets/mysql.svg";

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
            <h2 className="item-title">We develop high-tech Web solutions for Big & Small scale businesses</h2>
            <p className="item-description">
				{/* We have a vast experience in developing solutions for Web Industry. We successfully work with Artificial Intelligence, Big Data, Machine Learning, IoT, VR / AR in a low-cost. It’s the best way to start prototyping
				and developing your next application with us. */}
				We have a vast experience in developing solutions for Web Industry. We successfully work with Artificial Intelligence, Big Data, Machine Learning, IoT, ERP, CRM, POS in a low-cost. It’s the best way to start prototyping
				and developing your next web application with us.
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
			<img src={nodejs} alt="nodejs"/>, ' NodeJs', <br></br> , 
			<img src={net} alt="net"/>, ' .Net', <br></br> ,
			<img src={php} alt="php"/>, ' Php', <br></br> , 
			<img src={python} alt="python"/>, ' Python' , <br></br> , 
			  ],
        category: {
			tag: 'Server Platforms',
			color: '#6AC4DB'
		}
    },
    {
		text: [
			' ReactJs', <img src={reactjs} alt="reactjs"/>, <br></br> , 
			' AngularJs' , <img src={angularjs} alt="angularjs"/>, <br></br> , 
			' Html5' , <img src={html} alt="html5"/>, <br></br> , 
			' Css3' , <img src={css} alt="css3"/>, <br></br> , 
			  ],
        category: {
			tag: 'Frontend Platforms',
			color: '#418EEA'
		}
	},
	{
		text: [
			<img src={wordpress} alt="wordpress"/>, ' WordPress', <br></br> , 
			<img src={magento} alt="magento"/>, ' Magento', <br></br> , 
			<img src={opencart} alt="opencart"/>, ' Opencart' , <br></br> , 
			  ],
        category: {
			tag: 'CMS Platforms',
			color: '#ee0e23'
		}
	},
	{
		text: [
			'MongoDB', <img src={mongodb} alt="mongodb"/>, <br></br> , 
			'Sql' ,<img src={sql} alt="sql"/>, <br></br> , 
			'MySql' ,<img src={mysql} alt="mysql"/>, <br></br> , 
			'PostgreSql' ,<img src={postgresql} alt="postgresql"/>, 
			  ],
        category: {
			tag: 'Database Platforms',
			color: '#018f69'
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
    <br></br>
	<br></br>
	<br></br>
	<Product />
	<br></br>
	<section className="career-heading">
      <h2 className="font-center-title">
        Platforms we use
      </h2> 
      <p className="font-center">
      	We provide 360 degree solutions.
        <br></br>
		We give your project the ultimate platform
        <br></br>
		it needs to be scalable and successful.
      </p>
	  </section>
     <br></br>
	<Timeline />
</>;

export default App;
