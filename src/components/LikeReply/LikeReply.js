import React from 'react';
import './LikeReply.css';
import ReplyRow from '../ReplyRow/ReplyRow.js'

var likes = 2; // trying to pass this to ReplyRow to show the number of likes for the reply

class likeReply extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: 2,
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
					likes:prevState.likes - 1,
					updated: false
				};
			});
			this.button = <button id="unlike" onClick={this.updateLikes}></button>;
		}
		likes = this.state.likes;
	}

	render() {
		return(
			<div className="likeReply">
				<div>
					{this.button}
				</div>
			</div>
		);
	}
}	
export { likes };
export default likeReply;