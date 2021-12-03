import React, { Component } from 'react';

class Follower extends Component {
	render() {
		const { follower } = this.props;
		return (
			<div className='card text-center'>
				<img
					src={follower.avatar_url}
					alt=''
					className='round-img'
					style={{ width: '60px' }}
				/>
				<h3>Jmz0127</h3>
				<div>
					<a href={follower.html_url} className='btn-dark btn-sm my-1'>
						more
					</a>
				</div>
			</div>
		);
	}
}

export default Follower;
