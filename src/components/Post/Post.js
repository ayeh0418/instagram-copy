import './Post.css';
import React, { Component } from 'react';
import post from '../../images/post.jpg';
import Title from '../Title/Title.js';
import Caption from '../Caption/Caption.js';
import Action from '../Action/Action.js';
import LikeReply from '../LikeReply/LikeReply.js';

// layout the normal view
class Post extends Component {
	render() {
		return (
			<article className="Post" ref="Post">
				<Title />
				<div className="Post-image">
					<div className="Post-image-bg">
						<img alt="Flyer" src={post} />
					</div>
				</div>
				<Action />
				<Caption />
			</article>
		);
    }
}
export default Post;