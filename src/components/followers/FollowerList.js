import React, { Component } from 'react';
import Follower from './Follower';

class FollowerList extends Component {
	render() {
		console.log(this.props);
		return (
			<div className={userStyle}>
				<h3>Followers:</h3>
				{this.props.followers.map((follower) => {
					return <Follower key={follower.login} follower={follower} />;
				})}
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
