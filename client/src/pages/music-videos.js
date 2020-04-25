import React from 'react';
import "../styles/pages/music-videos.scss";
// import ProductImage from "../assets/production/Portfolio-Book.jpeg";


const Product = () => {
	return (
		<div className='product'>
		<div className="page">
		<div className="container">
      		<div className="row">
			<section className="career-heading">
            <h2 className="item-title">MUSIC VIDEOS</h2>
            <p className="item-description">
			We are specialized in music video production. A good number of music videos have been created from our house. Zeroland team has its own digital song recording setup and that’s makes us a complete video production service center. 
Song videos and signatures songs are considered superb video content for a loud shout out in the market, and in result, the engagement of the audience increase and inspire the buyers to think upon to do some action. 
		    </p>
      		</section>
      		</div>
    	</div>
		</div>
		</div>
	);
};


const App = () => <>
<div className="container">
    <div className="row">
	<Product />
    </div>
</div>

</>;

export default App;
