// src/components/Header/index.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
			<nav className="Nav">
				<div className="Nav-menus">
					<div className="Nav-brand">
						<Link className="Nav-brand-logo" to="/">
						</Link>
					</div>
					<div className="Nav-search-bar">
					</div>
					<div className="Nav-others">
						<div className="Nav-others-explore"></div>
						<div className="Nav-others-notification"></div>
						<div className="Nav-others-profile"></div>
					</div>
                </div>
            </nav>
        );
    }   
}
export default Header;