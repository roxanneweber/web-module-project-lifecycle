import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = () => {
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
				<Link
					to={`https://api.github.com/users/Jmz0127`}
					className='btn-dark btn-sm my-1'
				>
					more
				</Link>
			</div>
		</div>
	);
};
