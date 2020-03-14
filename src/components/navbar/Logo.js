import React from 'react';
import styled from 'styled-components';

export default function Logo({ ...props }) {
	return <StyledLogo {...props}>Werk.</StyledLogo>;
}

const StyledLogo = styled.div`
	font-family: 'Pacifico', cursive;
	font-size: 1.8rem;
	/* color: #003366; */
`;
