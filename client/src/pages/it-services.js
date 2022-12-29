import React, { useEffect, useState } from 'react';
import "../styles/pages/it-services.scss";
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
            <h2 className="item-title">IT Support & Services</h2>
            <p className="item-description">
				<ul>
					<li className="item-mini-title">
					OPTIMIZED ECOMMERCE ENGINES <img src={DownArrow} alt="DownArrow"/>
					</li>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					<li className="item-mini-title">
					CLOUD SERVICES <img src={DownArrow} alt="DownArrow"/>
					</li>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					<li className="item-mini-title">
					SECURITY SERVICES <img src={DownArrow} alt="DownArrow"/>
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



const Card = ({ title, className, description }) => {
  return (
      <div className="StyledCard">
      <h2>{title}</h2>
      <p>{description}</p>
      </div>
  );
};

const Box = () => {
  var { one, two, three } = cardDescriptions;
  return (
      <div className="StyledContainer">
      <Card title="RESOURCE PLANNING" description={one} />
      <Card title="RESOURCE MANAGEMENT" description={two} />
      <Card title="Network & Server Management" description={three} />
      </div>
  );
};

var cardDescriptions = {
  one:
    "Lorem ipsum dolor amet dreamcatcher kale chips skateboard unicorn semiotics affogato pinterest. Organic chambray street art before they sold out squid hammock, flannel freegan church-key irony pok pok poke thundercats.",
  two:
    "Lorem ipsum dolor amet dreamcatcher kale chips skateboard unicorn semiotics affogato pinterest. Organic chambray street art before they sold out squid hammock, flannel freegan church-key irony pok pok poke thundercats.",
  three:
    "Lorem ipsum dolor amet dreamcatcher kale chips skateboard unicorn semiotics affogato pinterest. Organic chambray street art before they sold out squid hammock, flannel freegan church-key irony pok pok poke thundercats.",
};




const App = () => <>
	<Product />
    <Box />
	<div className="cursor">
      <div className="cursor-media">
        <video
          src={require(`../homepage/videos/websites.mp4`)}
          preload="auto"
          autoPlay
          muted
          loop
          id="entrepreneur"
        ></video>
        <video
          src={require(`../homepage/videos/apps.mp4`)}
          preload="auto"
          autoPlay
          muted
          loop
          id="investor"
        ></video>
        <video
          src={require(`../homepage/videos/branding.mp4`)}
          preload="auto"
          autoPlay
          muted
          loop
          id="philanthropist"
        ></video>
      </div>
    </div>
   
</>;

export default App;
