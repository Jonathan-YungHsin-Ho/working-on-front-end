import React from 'react';
import styled from 'styled-components';

export default function Avatar({ ...props }) {
	return <StyledAvatar {...props}></StyledAvatar>;
}

const StyledAvatar = styled.div`
	flex-shrink: 0;

	width: ${props => props.width + 'rem'};
	height: ${props => props.height + 'rem'};
	margin-right: ${props => props.marginRight + 'rem'};

	border-radius: 50%;

	background-color: rebeccapurple;
`;
