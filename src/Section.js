import React, { Component } from 'react';
import classNames from 'classnames';

const Section = function(props) {

	return (
		<div className={classNames('section-container', props.color)}>
			<div className="section-title">
				<h3>{props.title}</h3>
			</div>
			<div className="section-content">
				{props.children}
			</div>
		</div>
	)
}

export default Section