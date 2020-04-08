import React from 'react';
import styled from 'styled-components';

export default function ScreenOverlay({ ...props }) {
	return <StyledScreen {...props} />;
}

const StyledScreen = styled.div`
	position: absolute;

	width: 100vw;
	height: 100%;
	top: 0;
	left: 0;

	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;
