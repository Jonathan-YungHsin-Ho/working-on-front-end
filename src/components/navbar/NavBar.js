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
			<Logo onClick={handleClick} style={logoStyle} />
			{/* <Search /> */}
			<NavRight />
		</StyledNav>
	);
}

const StyledNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;

	background-color: white;
	border-bottom: 1px solid silver;
`;
