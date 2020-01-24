import React from 'react';
import './Like.css';

// like the post functionality
class like extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			likes: 10,
			updated: false
		}
		this.updateLikes = this.updateLikes.bind(this);
		this.button = <button id="unlike" onClick={this.updateLikes}></button>;
	}

	// determine like or unlike
	updateLikes() {
		// like
		if (!this.state.updated) {
			this.setState((prevState, props) => {
				return {
					likes: prevState.likes + 1,
					updated: true
				};
			});
			this.button = <button id="like" onClick={this.updateLikes}></button>;
		// unlike
		} else {
			this.setState((prevState, props) => {
				return {
					likes: prevState.likes - 1,
					updated: false
				};
			});
			this.button = <button id="unlike" onClick={this.updateLikes}></button>;
		}
	}

	render() {
		return(
			<div className="likes">
				{this.button}
				<strong>{this.state.likes + " likes"}</strong>
			</div>
		);
	}
}
export default like;