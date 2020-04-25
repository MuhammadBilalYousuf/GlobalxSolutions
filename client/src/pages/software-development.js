import React, { useEffect, useState } from 'react';
import "../styles/pages/software-development.scss";
import nodejs from "../assets/node-js.svg";
import python from "../assets/python.svg";
import mongodb from "../assets/mongo_db.svg";
import postgresql from "../assets/postgre_sql.svg";
import net from "../assets/net.svg";
import php from "../assets/php.svg";
import sql from "../assets/sql.svg";
import mysql from "../assets/mysql.svg";
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
	console.log(state)
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
            <h2 className="item-title">SOFTWARE DEVELOPMENT</h2>
            <p className="item-description">
				<ul>
					<li className="item-mini-title">
					AGILE SOFTWARE DEVELOPMENT <img src={DownArrow} alt="DownArrow"/>
					</li>
					For customers’ scalable software projects, we offer agile software development services to cater to the needs of the growing industries. Our software development team keeps the clients engaged and updated each stage of the software project. 
					<li className="item-mini-title">
					CUSTOM SOFTWARE SOLUTIONS <img src={DownArrow} alt="DownArrow"/>
					</li>
					In order to cater to the specific needs within a company, we develop custom-based softwares which specifically deal as per the needs of an enterprise. With specific technical support, custom-based softwares help increase the productivity of a company.
					<li className="item-mini-title">
					MANAGED SERVICES & DEVOPS <img src={DownArrow} alt="DownArrow"/>
					</li>
					We provide technical and managing service on a regular basis for all types of softwares and applications. It is vital for large companies to remain updated with the latest technology. 
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

const Platforms = [
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

const PlatformsItem = ({ data }) => (
    <div className="platform-item">
        <div className="platform-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
          	  <p>{data.text}</p>
            <span className="circle" />
        </div>
    </div>
);

const Platform = () =>
	Platforms.length > 0 && (
        <div className="platform-container ">
            {Platforms.map((data, idx) => (
                <PlatformsItem data={data} key={idx} />
            ))}
        </div>
    );

const App = () => <>
 		
    <br></br>
	<br></br>
	<br></br>
	<Product />
	<div className="page" style={{marginTop: '-15px'}}>
		<div className="container">
	<section className="career-heading">
      <h2 className="font-center-title">
        Platforms we use
      </h2> 
	  </section>
     <br></br>
	<Platform />
	</div>
	</div>

</>;

export default App;
