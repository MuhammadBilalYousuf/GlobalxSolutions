import React from 'react';
import "../styles/pages/corporate-videos.scss";
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
					The audience of modern era demands for video messages which are highly engaging in online publishing communities and delivering a lucid and succinct message to the consumers. We produce corporate messages with the experts of graphics, production and script at Zeroland. 
					<li className="item-mini-title">
					BRAND STORY <img src={DownArrow} alt="DownArrow"/>
					</li>
					The trend of publishing a successful brand’s story is getting popular in Pakistan. Large and multinational companies are already using a story concept for their successful brands. The digital media has given an extra edge for small and large enterprises to share the brand story in order to leave an impactful message in the minds of the audience. 
				<br>
				</br>
				Zeroland team will write the story concept, produce it, and Share on digital media. 
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
<div className="page">
<div className="container">
    <div className="row">
	<Product />
    </div>
</div>
</div>

</>;

export default App;
