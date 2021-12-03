import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Search from './components/layout/Search';
import UserCard from './components/user/UserCard';
import FollowerList from './components/followers/FollowerList';
import './app.css';

class App extends Component {
	state = {
		currentUser: 'roxanneweber',
		user: {
			avatar_url: 'https://avatars.githubusercontent.com/u/89050736?v=4',
			html_url: 'https://github.com/roxanneweber',
			name: 'Roxanne Weber',
			login: 'roxanneweber',
			public_repos: 96,
			followers: 22,
			following: 31,
			bio: 'this is my bio',
		},

		followers: [
			{
				login: 'michelle',
				avatar_url: 'https://avatars.githubusercontent.com/u/45055471?v=4',
				html_url: 'lsdkjsld',
			},
			{
				login: 'michellesom',
				avatar_url: 'https://avatars.githubusercontent.com/u/45496047?v=4',
				html_url: 'lsdkjsld',
			},
			{
				login: 'michellesomething',
				avatar_url: 'https://avatars.githubusercontent.com/u/51681480?v=4',
				html_url: 'lsdkjsld',
			},
		],
	};

	render() {
		return (
			<>
				<nav className='navbar bg-primary'>
					<NavBar />
				</nav>
				<div className='container'>
					<Search />
					<UserCard user={this.state.user} />
				</div>
				<FollowerList followers={this.state.followers} />
			</>
		);
	}
}

export default App;
