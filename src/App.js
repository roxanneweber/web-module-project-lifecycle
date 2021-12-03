import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Search from './components/layout/Search';
import './app.css';

class App extends Component {
	render() {
		return (
			<>
				<nav className='navbar bg-primary'>
					<NavBar />
				</nav>
				<div className='container'>
					<Search />
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
								My career skills include project management, software
								engineering, education and public administration.
							</p>
							<div className='card text-center'>
								<div className='badge badge-primary'>Repos: 101</div>
								<div className='badge badge-light'>Followers: 29</div>
								<div className='badge badge-success'>Following: 10</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className={userStyle}>
						<h3>Followers:</h3>
						<div className='card text-center'>
							<img
								src='https://avatars.githubusercontent.com/u/45055471?v=4'
								alt=''
								className='round-img'
								style={{ width: '60px' }}
							/>
							<h3>Jmz0127</h3>
							<div>
								<a
									href='https://github.com/Jmz0127'
									className='btn-dark btn-sm my-1'
								>
									more
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

const userStyle = {
	diplay: 'grid',
	gridTemplateColumns: 'repeat(3,1fr)',
	gridGap: '1rem',
};

export default App;
