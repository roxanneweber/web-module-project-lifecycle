import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Search from './components/layout/Search';
import './app.css';

class App extends Component {
	render() {
		return (
			<>
				<nav>
					<NavBar />
				</nav>
				<div className='container'>
					<Search />
				</div>
			</>
		);
	}
}

export default App;
