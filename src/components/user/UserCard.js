import React, { Component } from 'react';

export class UserCard extends Component {
	render() {
		const { user } = this.props;
		console.log(user);
		return (
			<div className='card grid-2'>
				<div className='all-center'>
					<img
						className='round-img'
						src={user.avatar_url}
						alt=''
						style={{ width: '200px' }}
					/>
					<a href={user.html_url} className='btn btn-light my-1'>
						Visit my Website
					</a>
				</div>
				<div>
					<h2>{user.name}</h2>
					<h4>({user.login})</h4>
					<h5>Bio: </h5>
					<p>{user.bio} </p>
					<div className='card text-center'>
						<div className='badge badge-primary'>
							Repos: {user.public_repos}
						</div>
						<div className='badge badge-light'>Followers: {user.followers}</div>
						<div className='badge badge-success'>
							Following: {user.following}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UserCard;
