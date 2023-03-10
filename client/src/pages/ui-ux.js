import React, { useEffect, useState } from 'react';
import "../styles/pages/ui-ux.scss";
import invision from "../assets/invision.svg";
import sketch from "../assets/sketch.svg";
import adobexd from "../assets/adobe-xd.svg";
import figma from "../assets/figma.svg";
import marvel from "../assets/marvel.svg";
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
            <h2 className="item-title">UI/UX DESIGNS</h2>
            <p className="item-description">
				<ul>
					<li className="item-mini-title">
					UX STRATEGY & DESIGN <img src={DownArrow} alt="DownArrow"/>
					</li>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					<li className="item-mini-title">
					MOTION GRAPHICS <img src={DownArrow} alt="DownArrow"/>
					</li>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					<li className="item-mini-title">
					BRANDING & CORPORATE IDENTITY DESIGN <img src={DownArrow} alt="DownArrow"/>
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
			<img src={adobexd} alt="adobexd"/>, ' Adobe XD', <br></br> , 
			<img src={invision} alt="invision"/>, ' Invision', <br></br> ,
			<img src={sketch} alt="sketch"/>, ' Sketch', <br></br> , 
			  ],
        category: {
			tag: 'Tools',
			color: '#6AC4DB'
		}
	},
	{
		text: [
			'Figma' ,<img src={figma} alt="figma"/>, <br></br> , 
			'Marvel', <img src={marvel} alt="marvel"/>,
		],
        category: {
			tag: 'Tools',
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
