import React, { Component } from 'react';

export class UserCard extends Component {
	render() {
		return (
			<div className='card grid-2'>
				<div className='all-center'>
					<img
						className='round-img'
						src='https://avatars.githubusercontent.com/u/89050736?v=4'
						alt=''
						style={{ width: '200px' }}
					/>
					<a
						href='https://github.com/roxanneweber'
						className='btn btn-light my-1'
					>
						Visit my Website
					</a>
				</div>
				<div>
					<h2>Roxanne Weber</h2>
					<h4>(roxanneweber)</h4>
					<h5>Bio: </h5>
					<p>
						My career skills include project management, software engineering,
						education and public administration.
					</p>
					<div className='card text-center'>
						<div className='badge badge-primary'>Repos: 101</div>
						<div className='badge badge-light'>Followers: 29</div>
						<div className='badge badge-success'>Following: 10</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UserCard;
