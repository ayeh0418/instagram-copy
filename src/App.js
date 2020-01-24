// src.App.js
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Post from './components/Post/Post.js';
import LikeReply from './components/LikeReply/LikeReply.js';
import ReplyRow from './components/ReplyRow/ReplyRow.js';
import Landscape from './pages/Landscape.js';
import Home from './pages/Home.js';
import {  
	BrowserRouter as Router,
	Switch,
	Route,
	Link 
} from 'react-router-dom';

// array to store all comments
var displayDataL = [];
var	displayData =[];

displayDataL.push(
	<div className="Whole-comment">
		<div className="Post-caption-comment-text">
			<span><strong>Ryan</strong> Let's go!</span>
			<LikeReply />
		</div>
		<ReplyRow time="40m" likes="2" username="@Ryan"/>
	</div>
);
displayData.push(
	<div className="Post-caption-comment-text">
		<span><strong>Ryan</strong> Let's go!</span>
		<LikeReply />
	</div>
);

displayDataL.push(
	<div className="Whole-comment">
		<div className="Post-caption-comment-text">
			<span><strong>Rong</strong> I'll be there!</span>
			<LikeReply />	
		</div>
		<ReplyRow time="38m" likes="3" username="@Rong"/>
	</div>
);
displayData.push(
	<div className="Post-caption-comment-text">
		<span><strong>Rong</strong> I'll be there!</span>
		<LikeReply />
	</div>
);

displayDataL.push(
	<div className="Whole-comment">
		<div className="Post-caption-comment-text">
			<span><strong>Jenny</strong> You're so cool!</span>
			<LikeReply />
		</div>
		<ReplyRow time="24m" likes="4" username="@Jenny"/>
	</div>
);
displayData.push(
	<div className="Post-caption-comment-text">
		<span><strong>Jenny</strong> You're so cool!</span>
		<LikeReply />
	</div>
);
export { displayDataL };
export { displayData };

export default function App() {

	return (
		<Router>
			<div>
				<Header />
				{/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/landscape">
						<Landscape />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}