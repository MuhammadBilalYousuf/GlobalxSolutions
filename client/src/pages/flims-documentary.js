import React from 'react';
import "../styles/pages/flims-documentary.scss";
// import ProductImage from "../assets/production/Portfolio-Book.jpeg";


const Product = () => {
	return (
		<div className='product'>
		<div className="page">
		<div className="container">
      		<div className="row">
			<section className="career-heading">
            <h2 className="item-title">FLIMS DOCUMENTARY</h2>
            <p className="item-description">
			A documentary or film has no comparison with other video productions. The Documentaries and film content are utilized by media houses and companies for the same purpose. Companies sponsor films and documentaries for their brands' promotion. Film production in Pakistan has seen a great demand recently. Our expert production team brainstorms ideas and share the complete film production strategy with our clients. 
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
