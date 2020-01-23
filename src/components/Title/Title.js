// JavaScript source code
import React from 'react';
import user1 from '../../images/profile.jpg';
import './Title.css';

export default function Title() {
	return (
		<header>
			<div className="Post-user">
				<div className="Post-user-avatar">
					<img src={user1} alt="Andrew" />
				</div>
				<div className="Post-user-nickname">
					<a href="">Andrew</a>
				</div>	
			</div>
			<div className="Post-option">
				<button></button>
			</div>
		</header>
	);
}