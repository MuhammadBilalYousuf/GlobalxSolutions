import React, { useEffect, useState } from 'react';
import "../styles/pages/ecommerce.scss";
import magento from "../assets/magento.svg";
import opencart from "../assets/opencart.svg";
import shopify from "../assets/shopify.svg";
import woocommerce from "../assets/woocommerce.svg";
import drupal from "../assets/drupal.svg";
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
            <h2 className="item-title">Ecommerce Development</h2>
            <p className="item-description">
				<ul>
					<li className="item-mini-title">
					OPTIMIZED ECOMMERCE ENGINES <img src={DownArrow} alt="DownArrow"/>
					</li>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					<li className="item-mini-title">
					ECOMMERCE WEB CART <img src={DownArrow} alt="DownArrow"/>
					</li>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					<li className="item-mini-title">
					PLUGIN DEVELOPMENT <img src={DownArrow} alt="DownArrow"/>
					</li>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
			<img src={magento} alt="magento"/>, ' Magento', <br></br> , 
			<img src={opencart} alt="opencart"/>, ' Opencart', <br></br> , 
			<img src={shopify} alt="shopify"/>, ' Shopify' ,
			  ],
        category: {
			tag: 'Platforms',
			color: '#ee0e23'
		}
	},
    {
		text: [
			' Woocommerce' , <img src={woocommerce} alt="woocommerce"/>, <br></br> , 
			' Drupal Commerce' , <img src={drupal} alt="drupal"/>, <br></br> , 
			  ],
        category: {
			tag: 'Platforms',
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
