import React, { useEffect, useState } from 'react';
import "../styles/pages/mobile-application.scss";
import mongodb from "../assets/mongo_db.svg";
import postgresql from "../assets/postgre_sql.svg";
import sql from "../assets/sql.svg";
import mysql from "../assets/mysql.svg";
import xcode from "../assets/xcode.svg";
import androidstudio from "../assets/android.svg";
import firebase from "../assets/firebase.svg";
import reactnative from "../assets/react-native.svg"
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
            <h2 className="item-title">MOBILE APP DEVELOPMENT</h2>
            <p className="item-description">
				<ul>
					<li className="item-mini-title">
					IOS APPS SERVICE <img src={DownArrow} alt="DownArrow"/>
					</li>
					For over 6 years, we have been crafting highly impactful iPhone applications. If you are planning to build a new iOS app or upgrading it, our experienced iOS team provides free consultation to guide you about the app development and ongoing maintenance. Let us build beautiful, engaging and effective iOS apps for your brands. 
					<li className="item-mini-title">
					ANDROID APP SERVICE <img src={DownArrow} alt="DownArrow"/>
					</li>
					Zeroland develops appealing android apps for all types of brands. Our team has proven record in creating E-commerce and info-based android apps that provide an extra edge to your businesses. For innovative android app development, we offer 360-degree solutions with complete technical support.
					<li className="item-mini-title">
					REACT NATIVE APP SERVICE <img src={DownArrow} alt="DownArrow"/>
					</li>
					For an open-source and real-time update mobile app, we offer the "React Native" app development service to our valuable clients. React Native is highly suitable for minimum viable product and it takes shorter development time since it is an open-source platform.
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
			<img src={xcode} alt="xcode"/>, ' Xcode', <br></br> , 
			<img src={androidstudio} alt="androidstudio"/>, ' Android Studio', <br></br> ,
			<img src={reactnative} alt="reactnative"/>, ' React Native', <br></br> , 
			  ],
        category: {
			tag: 'Server Platforms',
			color: '#6AC4DB'
		}
    },
	{
		text: [
			'MongoDB', <img src={mongodb} alt="mongodb"/>, <br></br> , 
			'Sql' ,<img src={sql} alt="sql"/>, <br></br> , 
			'MySql' ,<img src={mysql} alt="mysql"/>, <br></br> , 
			'PostgreSql' ,<img src={postgresql} alt="postgresql"/>, <br></br> , 
			'Firebase' ,<img src={firebase} alt="firebase"/>, 
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
