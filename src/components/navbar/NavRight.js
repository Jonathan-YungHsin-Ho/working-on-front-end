import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useIsLoggedIn } from '../../hooks';
import { Avatar } from '../user';

export default function NavRight() {
	const history = useHistory();
	const { isLoggedIn, client } = useIsLoggedIn();

	const handleLogout = () => {
		localStorage.clear();
		client.writeData({ data: { isLoggedIn: false } });
		history.push('/');
	};

	return (
		<StyledNavRight>
			{!isLoggedIn && (
				<>
					<NavLink to='/signup'>Sign Up</NavLink>
					<NavLink to='/login'>Login</NavLink>
				</>
			)}
			{isLoggedIn && (
				<>
					<NavLink to='/home'>Home</NavLink>
					<NavLink to='/explore'>Explore</NavLink>
					<div className='logout' onClick={handleLogout}>
						Logout
					</div>
					<NavLink to='/profile'>
						<Avatar className='avatar' />
					</NavLink>
				</>
			)}
		</StyledNavRight>
	);
}

const StyledNavRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	width: 16rem;

	a {
		margin-left: 2rem;

		color: inherit;
		text-decoration: none;
	}

	.avatar {
		cursor: pointer;
	}

	.logout {
		margin-left: 2rem;
		cursor: pointer;
	}
`;
