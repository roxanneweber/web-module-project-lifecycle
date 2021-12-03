import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Search from './components/layout/Search';
import UserCard from './components/user/UserCard';
import FollowerList from './components/followers/FollowerList';
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
					<UserCard />
				</div>
				<FollowerList />
			</>
		);
	}
}

export default App;
