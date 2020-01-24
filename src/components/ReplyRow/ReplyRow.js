import React from 'react';
import "./ReplyRow.css";

class ReplyRow extends React.Component {

	constructor(props) {
		super(props);
	
		this.type = this.type.bind(this);
	}

	type() {
		var input = document.querySelector('input');
		input.value = this.props.username + " ";
	}

	render() {
		return(
			<div className="Reply-row">
				<span>{this.props.time} </span>
				<span> {this.props.likes + " likes"}</span>
				<button className="Reply" onClick={this.type}> Reply</button>
			</div>
		);
	}
}
export default ReplyRow;