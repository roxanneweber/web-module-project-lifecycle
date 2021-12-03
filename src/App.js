import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Search from './components/layout/Search';
import UserCard from './components/user/UserCard';
import FollowerList from './components/followers/FollowerList';
import axios from 'axios';
import './app.css';

class App extends Component {
	state = {
		currentUser: 'roxanneweber',
		user: {},
		followers: [],
	};

	componentDidMount() {
		axios
			.get(`https://api.github.com/users/${this.state.currentUser}`)
			.then((resp) => {
				this.setState({
					...this.state,
					user: resp.data,
				});
			});
	}

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
