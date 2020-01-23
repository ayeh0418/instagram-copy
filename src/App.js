// src.App.js
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Post from './components/Post/Post.js';
import LikeReply from './components/LikeReply/LikeReply.js';
import Landscape from './pages/Landscape.js';
import Home from './pages/Home.js';
import {  
	BrowserRouter as Router,
	Switch,
	Route,
	Link 
} from 'react-router-dom';

export default function App() {

	localStorage.setItem(0, 
		<div className="Post-caption-comment-text">
			<span><strong>Ryan</strong> Let's go!</span>
			<LikeReply />
		</div>
	);
	localStorage.setItem(1, 
		<div className="Post-caption-comment-text">
			<span><strong>Rong</strong> I will be there!</span>
			<LikeReply />
		</div>);
	localStorage.setItem(2, 
		<div className="Post-caption-comment-text">
			<span><strong>Jenny</strong> You're so cool!</span>
			<LikeReply />
		</div>
	);

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