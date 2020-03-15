import React from 'react';
import styled from 'styled-components';

export default function Avatar({ ...props }) {
	return <StyledAvatar {...props}></StyledAvatar>;
}

const StyledAvatar = styled.div`
	flex-shrink: 0;

	width: 3rem;
	height: 3rem;
	border-radius: 50%;

	background-color: rebeccapurple;
`;
