// App.js
import React from 'react';
import "../styles/pages/digital.scss";
import nodejs from "../assets/node-js.svg";
import reactjs from "../assets/react.svg";
import angularjs from "../assets/angular.svg";
import python from "../assets/python.svg";
import ai from "../assets/ai.svg";
import mongodb from "../assets/mongo_db.svg";
import postgresql from "../assets/postgre_sql.svg";
import wordpress from "../assets/wordpress.svg";
import magento from "../assets/magento.svg";
import opencart from "../assets/opencart.svg";
import net from "../assets/net.svg";
import php from "../assets/php.svg";
import sql from "../assets/sql.svg";
import mysql from "../assets/mysql.svg";

const timelineData = [
    {
		text: [
			<img src={nodejs} alt="nodejs"/>, ' NodeJs', <br></br> , 
			<img src={net} alt="net"/>, ' .Net', <br></br> ,
			<img src={php} alt="php"/>, ' Php', <br></br> , 
			<img src={python} alt="python"/>, ' Python' , <br></br> , 
			  ],
		date: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        category: {
			tag: 'Server Technologies',
			color: '#FFDB14'
		}
    },
    {
		text: [
			' ReactJs', <img src={reactjs} alt="reactjs"/>, <br></br> , 
			' AngularJs' , <img src={angularjs} alt="angularjs"/>, <br></br> , 
			  ],
		date: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        category: {
			tag: 'Frontend Technologies',
			color: '#e17b77'
		}
	},
	{
		text: [
			<img src={wordpress} alt="wordpress"/>, ' WordPress', <br></br> , 
			<img src={magento} alt="magento"/>, ' Magento', <br></br> , 
			<img src={opencart} alt="opencart"/>, ' Opencart' , <br></br> , 
			  ],
		date: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        category: {
			tag: 'Content Management System',
			color: '#1DA1F2'
		}
	},
	{
		text: [
			'Ai', <img src={ai} alt="ai"/>, <br></br> , 
			'MongoDB', <img src={mongodb} alt="mongodb"/>, <br></br> , 
			'Sql' ,<img src={sql} alt="sql"/>, <br></br> , 
			'MySql' ,<img src={mysql} alt="mysql"/>, <br></br> , 
			'PostgreSql' ,<img src={postgresql} alt="postgresql"/>, 
			  ],
		date: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        category: {
			tag: 'Database',
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
			<time>{data.date}</time>
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
     
    <div className='page'>
    <section className='cases'>
    <div className='container'>
    <div className="wrapper">
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 className="font-center">
        Platforms we use
      </h2> 
      <h1 className="font-center">
      LoremFlickr provides placeholder images for 
        <br></br>
        every case, web or print, on almost any subject,
        <br></br>
        in any size. It's simple and free
      </h1>
     <br></br>
	<Timeline />
	</div>
	</div>
	</section>
	</div>
</>;

export default App;
