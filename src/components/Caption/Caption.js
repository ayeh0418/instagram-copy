// JavaScript source code
import React, { Component } from 'react';
import './Caption.css';
import Like from '../Like/Like.js';
import LikeReply from '../LikeReply/LikeReply.js';
import Action from '../Action/Action.js';
import ReplyRow from '../ReplyRow/ReplyRow.js';
import { Link } from 'react-router-dom';
import { displayData } from '../../App.js';
import { displayDataL } from '../../App.js';

class Caption extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			posting: "empty",
			showdata: this.displayData,
			postVal: "",
			comments: 3
		};
		this.appendData = this.appendData.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	appendData() {		
        this.setState((prevState, props) => {
			return {
				showdata: displayData,
				postVal: "",
				posting: "empty",
				comments: prevState.comments + 1
			};
		});
		
		displayDataL.push(
			<div className="Whole-row">
				<div className="Post-caption-comment-text">
					<span><strong>Henry</strong> {this.state.postVal}</span>
					<LikeReply />
				</div>
				<ReplyRow time="1s" likes="0" username="@Henry"/>
			</div>
		);
		displayData.push(
			<div className="Post-caption-comment-text">
				<span><strong>Henry</strong> {this.state.postVal}</span>
				<LikeReply />
			</div>
		);

		var input = document.querySelector('input');
		input.value = "";
	}

	handleChange(e) {
		let getValue = e.target.value;
		this.setState({
			postVal: getValue
		});

		if (!getValue) {
			this.setState((prevState, props) => {
				return {
					posting: "empty"
				};
			});
		} else {
			this.setState((prevState, props) => {
				return {
					posting: "non-empty"
				};
			});
		}
	}

	render() {
		return (
			<span>
				<div className="Post-caption">
					<div className="Post-caption-caption">
						<a href=""><strong>Andrew</strong></a> Teaching a dance workshop tonight. Come through!
					</div>

					<div className="Post-caption-comment">
						<Link to="/landscape"><button>{"View all " + displayData.length + " comments"}</button></Link>
					</div>
					<div className="Post-caption-comment-section">
					{displayData}
					</div>
					<div className="Post-caption-comment-time">
						42 MINUTES AGO
					</div>
				</div>
				<div className="Post-input">
					<input type="text" onChange={this.handleChange} placeholder="Add a comment..." />
					<button id={this.state.posting} onClick={this.appendData} disabled={!this.state.postVal}><strong>Post</strong></button>
				</div>
			</span>
		);
	}
}
export default Caption;