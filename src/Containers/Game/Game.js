import React, { Component } from 'react';
import EnterName from '../../Components/EnterName/EnterName';
import TicTacToe from '../../Components/TicTacToe/TicTacToe';

class Game extends Component {
	constructor(props)
	{
		super(props);
		this.p1setName = this.p1setName.bind(this);
		this.p2setName = this.p2setName.bind(this);	

		this.state = {
			gameStarted: false,
			p1 : null,
			p2 : null,
			tiles : 
						['','','',
						 '','','',
						 '','','',],
						 
		}
	}

		p1setName = (event) => {
		this.setState({ p1: event.target.value});
	};

		p2setName = (event) => {
		this.setState({ p2: event.target.value});
	};

	startGame = () => {
		this.setState({ gameStarted: true });
	};

	render() {
		let enterName = null;
		if(!this.state.gameStarted)
			enterName = <EnterName clicked = {this.startGame} p1set = {this.p1setName} p2set = {this.p2setName}/>;
		let ticTacToe = null;
		if(this.state.gameStarted)
			ticTacToe = <TicTacToe p1 = {this.state.p1} p2 = {this.state.p2}  />
		return (
			<div>
				{enterName}
				{ticTacToe}
			</div>	
		);
	}
}

export default Game;