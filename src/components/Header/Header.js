// src/components/Header/index.js
import React from "react";
import "./Header.css";

class Header extends React.Component{
    render(){
        return (
			<nav className="Nav">
				<div className="Nav-menus">
					<div className="Nav-brand">
						<a className="Nav-brand-logo" href="/">
						</a>
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