import React, { Component } from 'react';
import Follower from './Follower';

class FollowerList extends Component {
	render() {
		return (
			<>
				<h3>Followers:</h3>
				<div className='userStyle'>
					{this.props.followers.map((follower) => {
						return <Follower key={follower.login} follower={follower} />;
					})}
				</div>
			</>
		);
	}
}

export default FollowerList;
