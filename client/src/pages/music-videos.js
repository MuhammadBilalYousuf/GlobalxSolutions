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
            <h2 className="item-title">CORPORATE VIDEOS</h2>
            <p className="item-description">
				<ul>
					<li className="item-mini-title">
					CORPORATE MESSAGES <img src={DownArrow} alt="DownArrow"/>
					</li>
                    Today audiences are smarter, more savvy and hungry for tailored videos that answer their specific needs. Knowing why you’re creating content, who you’re creating it for and what you want it to achieve is essential.
					<li className="item-mini-title">
					BRAND STORY <img src={DownArrow} alt="DownArrow"/>
					</li>
                    TVC Television Video Commercial (TVC) is consid- ered the most effective video content. There is a huge audience that watches TV channels regularly will be knowing about your brand through your TVC. We create marvelous concepts for TVC which compete in the market and bring countless consumers with a single campaign.
				</ul>
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
