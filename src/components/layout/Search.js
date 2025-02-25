import React, { Component } from 'react';

class Search extends Component {
	state = {
		text: '',
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.text);
	};

	render() {
		const { onChange } = this.state;
		return (
			<div>
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
			</div>
		);
	}
}

export default Search;
