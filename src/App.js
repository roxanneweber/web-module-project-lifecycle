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

	componentDidUpdate(prevProps, prevState) {
		if (this.state.user !== prevState.user) {
			axios
				.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
				.then((resp) => {
					this.setState({
						...this.state,
						followers: resp.data,
					});
				});
		}
	}

	onChange = (e) => {
		this.setState({
			...this.state,
			currentUser: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.text);
	};

	render() {
		return (
			<>
				<nav className='navbar bg-primary'>
					<NavBar />
				</nav>
				<div className='container'>
					<form onSubmit={this.onSubmit} className='form'>
						<input
							type='text'
							name='text'
							placeholder='Search for a Username...'
							value={this.state.text}
							onChange={this.onChange}
						/>
						<input
							type='submit'
							value='Search'
							className='btn btn-dark btn-block'
						/>
					</form>
					<UserCard user={this.state.user} />
					<FollowerList followers={this.state.followers} />
				</div>
			</>
		);
	}
}

export default App;
