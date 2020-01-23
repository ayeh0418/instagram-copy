import React from 'react';
import "./LikeReply.css";

class likeReply extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			updated: false
		}
		this.updateLikes = this.updateLikes.bind(this);
		this.button = <button id="unlike" onClick={this.updateLikes}></button>;
	}

	updateLikes() {
		if (!this.state.updated) {
			this.setState((prevState, props) => {
				return {
					updated: true
				};
			});
			this.button = <button id="like" onClick={this.updateLikes}></button>;
		} else {
			this.setState((prevState, props) => {
				return {
					updated: false
				};
			});
			this.button = <button id="unlike" onClick={this.updateLikes}></button>;
		}
	}

	render() {
		return(
			<div className="likeReply">
				{this.button}
			</div>
		);
	}
}
export default likeReply;