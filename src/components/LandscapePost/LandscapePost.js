import './LandscapePost.css';
import React, { Component } from 'react';
import post from '../../images/post.jpg';
import Title from '../Title/Title.js';
import Caption from '../Caption/Caption.js';
import LCaption from '../LandscapeCaption/LandscapeCaption.js';
import LikeReply from '../LikeReply/LikeReply.js';

// organize the layout of the post in landscape mode
class LandscapePost extends Component {
	render() {
		return (
			<article className="LPost" ref="Post">
				<div className="Post-image">
					<div className="Post-image-bg">
						<img alt="Flyer" src={post} />
					</div>
				</div>
				<div className="Info-section">
					<Title />
					<LCaption />
				</div>
			</article>
		);
    }
}
export default LandscapePost;