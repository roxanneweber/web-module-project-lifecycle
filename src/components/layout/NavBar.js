import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ icon, title }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon}></i> {title}
			</h1>
		</nav>
	);
};

NavBar.defaultProps = {
	title: 'GitHub User Card',
	icon: 'fab fa-github',
};

NavBar.defaultProps = {
	title: 'GitHub User Card',
	icon: 'fab fa-github',
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default NavBar;
