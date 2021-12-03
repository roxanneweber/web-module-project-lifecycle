import React, { Component } from 'react';
import Follower from './Follower';

class FollowerList extends Component {
	render() {
		return (
			<div className='container'>
				<div className={userStyle}>
					<h3>Followers:</h3>
					<Follower />
				</div>
			</div>
		);
	}
}

export default FollowerList;

const userStyle = {
	diplay: 'grid',
	gridTemplateColumns: 'repeat(3,1fr)',
	gridGap: '1rem',
};
