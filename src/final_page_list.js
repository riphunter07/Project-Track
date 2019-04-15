import React from 'react';


export class FinalSpan extends React.Component{
	render(){
		const term = this.props.spanList.map((item)=><li>&#8377;{item[1]} to {item[0]}</li>);
			return(
			<div><ul>{term}</ul></div>);
	}
}