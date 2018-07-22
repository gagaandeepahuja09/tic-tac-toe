import React from 'react';
import Body from './Body/Body';
import Header from './Header/Header';

const ticTacToe = (props) => {
	/*let footer = <div>{this.props.p2} Turn</div>
		if(props.cnt%2 == 1)
			footer = <div>{this.props.p2} Turn</div>;
	*/return (
		<div>
			<Header x = {props.p1} y = {props.p2}/>
			<div><Body pos = "1" x = {props.x} o = {props.o}  />
			<Body pos = "2"  x = {props.x} o = {props.o}  />
			<Body pos = "3"/></div>
			<div><Body pos = "4"  x = {props.x} o = {props.o} />
			<Body pos = "5"/>
			<Body pos = "6"/></div>
			<div><Body pos = "7"/>
			<Body pos = "8"/>
			<Body pos = "9"/></div>
			Footer
		</div>
	);
}

export default ticTacToe;