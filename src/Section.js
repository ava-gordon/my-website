import React, { Component } from 'react';
import classNames from 'classnames';

const Section = function(props) {

	const divStyle = props.imgUrl ? {
	  	backgroundImage: 'url(' + props.imgUrl + ')',
	} : {};

	return (
		<div className={classNames('section-container')}>
			<div className="section-title">
				<h3>{props.title}</h3>
			</div>
			<div className="section-content" style={divStyle}>
				<div className="section-card">
					{props.children}
				</div>
			</div>
		</div>
	)
}

export default Section