// JavaScript source code
import React, { Component } from 'react';
import './LandscapeCaption.css';
import Like from '../Like/Like.js';
import LikeReply from '../LikeReply/LikeReply.js';
import ReplyRow from '../ReplyRow/ReplyRow.js';
import Action from '../Action/Action.js';
import user1 from '../../images/profile.jpg';
import { Link } from 'react-router-dom';
import { displayDataL } from '../../App.js';
import { displayData } from '../../App.js';

class LandscapeCaption extends Component {
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
		displayData.push(
			<div className="Post-caption-comment-text">
				<span><strong>Henry</strong> {this.state.postVal}</span>
				<LikeReply />
			</div>
		);
		displayDataL.push(
			<div className="Whole-row">
				<div className="Post-caption-comment-text">
					<span><strong>Henry</strong> {this.state.postVal}</span>
					<LikeReply />
				</div>
				<ReplyRow time="1s" likes="0" username="@Henry"/>
			</div>
		);

        this.setState((prevState, props) => {
			return {
				showdata: displayData,
				postVal: "",
				posting: "empty",
				comments: prevState.comments + 1
			};
		});

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
			<div className="Post-and-caption">
				<div className="Post-caption">
					<div className="LPost-caption-box">
						<div className="Post-user-avatar">
							<img src={user1} alt="Andrew" />
						</div>
						<div className="LPost-caption-caption">
							<a href=""><strong> Andrew</strong></a> Teaching a dance workshop tonight. Come through!
						</div>
					</div>
					<div className="Post-caption-comment-section">
					{displayDataL}
					</div>
				</div>
				<div className="Post-and-caption-bottom">
					<Action />
					<div className="LPost-caption-comment-time">
						42 MINUTES AGO
					</div>
					<div className="Post-input">
						<input type="text" onChange={this.handleChange} placeholder="Add a comment..." />
						<button id={this.state.posting} onClick={this.appendData} disabled={!this.state.postVal}><strong>Post</strong></button>
					</div>
				</div>
			</div>
		);
	}
}
export default LandscapeCaption;
