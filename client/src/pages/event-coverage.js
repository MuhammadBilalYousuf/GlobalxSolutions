import React from 'react';
import "../styles/pages/event-coverage.scss";
// import ProductImage from "../assets/production/Portfolio-Book.jpeg";


const Product = () => {
	return (
		<div className='product'>
		<div className="page">
		<div className="container">
      		<div className="row">
			<section className="career-heading">
            <h2 className="item-title">EVENT COVERAGE</h2>
            <p className="item-description">
			Let us show our expertise in covering all types of family, corporate, educational, and social events. We cover trade shows, awards galas, and fashion shows. You may contact us to provide complete video coverage for weddings and other social gatherings.
		    </p>
      		</section>
      		</div>
    	</div>
		</div>
		</div>
	);
};


const App = () => <>
<div className="page">
<div className="container">
    <div className="row">
	<Product />
    </div>
    </div>
</div>

</>;

export default App;
