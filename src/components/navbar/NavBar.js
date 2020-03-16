import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
	Logo,
	// Search,
	NavRight,
} from './';

export default function NavBar() {
	const history = useHistory();

	const handleClick = () => history.push('/');

	const logoStyle = { cursor: 'pointer' };

	return (
		<StyledNav>
			<div className='nav-wrapper'>
				<Logo onClick={handleClick} style={logoStyle} />
				{/* <Search /> */}
				<NavRight />
			</div>
		</StyledNav>
	);
}

const StyledNav = styled.div`
	background-color: white;
	border-bottom: 1px solid silver;

	.nav-wrapper {
		max-width: 98rem;
		margin: 0 auto;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
	}
`;
