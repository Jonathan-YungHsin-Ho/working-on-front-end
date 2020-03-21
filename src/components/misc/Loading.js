import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Loading() {
	return (
		<StyledLoading>
			<FontAwesomeIcon
				icon={['fas', 'cog']}
				color='silver'
				class='fa-spin fa-2x fa-fw'
			/>
			<p>Loading...</p>
		</StyledLoading>
	);
}

const StyledLoading = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding-bottom: 2rem;
`;
