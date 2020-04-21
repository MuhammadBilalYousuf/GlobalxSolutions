import React from 'react';
import "../styles/pages/music-videos.scss";
// import ProductImage from "../assets/production/Portfolio-Book.jpeg";
import DownArrow from "../assets/down-arrow.svg";


const Product = () => {
	return (
		<div className='product'>
		<div className="page">
		<div className="container">
      		<div className="row">
			<section className="career-heading">
            <h2 className="item-title">MUSIC VIDEOS</h2>
            <p className="item-description">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
