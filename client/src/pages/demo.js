import React from 'react';
// import  img  from "../assets/main-logo.png";
// import  imgSecond  from "../assets/main-logo-white.png";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			shown: true,
		};
	}	
	
	toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}
		
	render() {
		var shown = {
			display: this.state.shown ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.shown ? "none" : "block"
		}
		
		return (
			<div>
				<h2 style={ shown }> true</h2>
				<h2 style={ hidden }>false</h2>
				<button onClick={this.toggle.bind(this)}>Toggle</button>
			</div>
		)
	}
}

const Video = () => <>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<App/>
</>;

export default Video;
