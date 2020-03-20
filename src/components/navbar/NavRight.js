import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '../home';
import { ModalLogout } from '../modals';
import { useModal, useIsLoggedIn } from '../../hooks';
import { GET_IMG } from '../../queries';

export default function NavRight() {
	const { isLoggedIn } = useIsLoggedIn();

	const { showModal, handleModal } = useModal();

	const { data } = useQuery(GET_IMG);

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
					{/* <NavLink to='/explore'>
						<FontAwesomeIcon
							icon={['fas', 'search']}
							size='lg'
							color='black'
						/>
					</NavLink> */}
					<NavLink to='/home' title='Home'>
						<FontAwesomeIcon icon={['fas', 'home']} size='lg' color='black' />
					</NavLink>
					<NavLink to={`/profile/${data?.me.id}`} title='Profile'>
						<FontAwesomeIcon
							icon={['far', 'address-card']}
							size='lg'
							color='black'
						/>
					</NavLink>
					<NavLink to='/projects' title='Projects'>
						<FontAwesomeIcon
							icon={['far', 'list-alt']}
							size='lg'
							color='black'
						/>
					</NavLink>
					<NavLink to='/account' title='Account'>
						<FontAwesomeIcon
							icon={['fas', 'user-cog']}
							size='lg'
							color='black'
						/>
					</NavLink>
					<div
						className='logout'
						title='Logout'
						onClick={() => handleModal({ type: 'open' })}>
						<FontAwesomeIcon
							icon={['fas', 'sign-out-alt']}
							size='lg'
							color='black'
						/>
					</div>
					{/* <NavLink to='/home'>
						<Avatar
							className='avatar'
							width='3'
							height='3'
							avatarURL={data?.me.avatarURL}
						/>
					</NavLink> */}
				</>
			)}
			{showModal && (
				<ModalLogout handleCloseModal={() => handleModal({ type: 'close' })} />
			)}
		</StyledNavRight>
	);
}

const StyledNavRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

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
