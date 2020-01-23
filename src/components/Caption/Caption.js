// JavaScript source code
import React, { Component } from 'react';
import './Caption.css';
import Like from '../Like/Like.js';
import LikeReply from '../LikeReply/LikeReply.js';
import Action from '../Action/Action.js';
import { Link } from 'react-router-dom';

class Caption extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			posting: "empty",
			showdata: this.displayData,
			postVal: "",
			comments: 3
		};
		this.displayData = [];
		this.appendData = this.appendData.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.displayData.push(
			<div className="Post-caption-comment-text">
				<span><strong>Ryan</strong> Let's go!</span>
				<LikeReply />
			</div>
		);

		this.displayData.push(
			<div className="Post-caption-comment-text">
				<span><strong>Rong</strong> I'll be there!</span>
				<LikeReply />
			</div>
		);

		this.displayData.push(
			<div className="Post-caption-comment-text">
				<span><strong>Jenny</strong> You're so cool!</span>
				<LikeReply />
			</div>
		);
	}
	
	appendData() {
		this.displayData.push(
			<div className="Post-caption-comment-text">
				<span><strong>Henry</strong> {this.state.postVal}</span>
				<LikeReply />
			</div>
		);
        this.setState((prevState, props) => {
			return {
				showdata: this.displayData,
				postVal: "",
				posting: "empty",
				comments: prevState.comments + 1
			};
		});
		/*
		localStorage.setItem(this.state.comments, 
			<div className="Post-caption-comment-text">
				<span><strong>Henry</strong> {this.state.postVal}</span>
				<LikeReply />
			</div>
		);

		for (var i = 0; i < localStorage.length; i++) {  
			var key = localStorage.key(i);
			this.displayData.push(localStorage.getItem(key));
		}
		*/
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
						<Link to="/landscape"><button>{"View all " + this.state.comments + " comments"}</button></Link>
					</div>
					<div className="Post-caption-comment-section">
					{this.displayData}
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