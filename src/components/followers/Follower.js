import React, { Component } from 'react';

class Follower extends Component {
	render() {
		return (
			<div className='card text-center'>
				<img
					src='https://avatars.githubusercontent.com/u/45055471?v=4'
					alt=''
					className='round-img'
					style={{ width: '60px' }}
				/>
				<h3>Jmz0127</h3>
				<div>
					<a href='https://github.com/Jmz0127' className='btn-dark btn-sm my-1'>
						more
					</a>
				</div>
			</div>
		);
	}
}

export default Follower;
