import React from 'react';
//import TicTacToe from '../TicTacToe/TicTacToe';

const EnterName  = (props) => {
	//let header = null;
	//const p1 = this.state.p1;
	//const p2 = this.state.p2;
	//if(p1 != null && p2 != null)
	//	header = <Header x = {this.state.p1} y = {this.state.p2} />;	
		return (
			<div>
				<h1>Enter Names</h1>
				<h2>Player1:<input type = "text" onChange = {props.p1set}></input></h2>
				<h2>Player2:<input type = "text" onChange = {props.p2set}></input></h2>
				<button onClick = {props.clicked}>Let's Get Started</button>
			</div>
		);	
};

export default EnterName;