// JavaScript source code
import React from 'react';
import './Action.css';
import Like from '../Like/Like.js';
import { Link } from 'react-router-dom';

export default function Action() {
	return (
		<div className="Post-actions">
			<div className="Post-actions-main">
				<Like />
				<div className="Post-actions-main-comment">
					<Link to="/landscape"><button></button></Link>
				</div>
				<div className="Post-actions-main-send">
					<button></button>
				</div>
			</div>
			<div className="Post-actions-bookmark">
				<button></button>
			</div>
		</div>
	);
}// JavaScript source code
