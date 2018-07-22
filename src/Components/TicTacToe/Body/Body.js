import React,{ Component } from 'react';
import './Body.css';


	let count = 0;
class Body extends Component {

	state = {
		posSelected : 0,
		x: false,
		o: false,
		cnt: 0,
	}

	findPos = () => {
		//const X = this.state.x;
		//const O = this.state.o;
		(count%2 === 0) ? this.setState({ x : true, o : false }) : this.setState({ x : false, o : true });
		this.setState({posSelected: this.props.pos});
		/*this.setState({ cnt : count+1 });*/
		count++;
		this.setState({ cnt: count });
	}

	render() {
		let text = null;
		if(this.state.x)
			text = <div posSelected = {this.props.pos}>X</div>;
		if(this.state.o)
			text = <div posSelected = {this.props.pos}>O</div>;
		return (
			 <div className = "Body" onClick = {this.findPos} >
			 	{text}
			 </div> 
		);
	}
} 

export default Body;