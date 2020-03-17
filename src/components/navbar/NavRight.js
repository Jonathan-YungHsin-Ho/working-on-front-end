import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from '../home';
import { ModalLogout } from '../modals';
import { useModal, useIsLoggedIn } from '../../hooks';

export default function NavRight() {
	const { isLoggedIn } = useIsLoggedIn();
	const { showModal, handleOpenModal, handleCloseModal } = useModal();

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
					{/* <NavLink to='/home'>Home</NavLink> */}
					<NavLink to='/explore'>Explore</NavLink>
					<div className='logout' onClick={handleOpenModal}>
						Logout
					</div>
					{/* <NavLink to='/profile'> */}
					<NavLink to='/home'>
						<Avatar className='avatar' width='3' height='3' />
					</NavLink>
				</>
			)}
			{showModal && <ModalLogout handleCloseModal={handleCloseModal} />}
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
