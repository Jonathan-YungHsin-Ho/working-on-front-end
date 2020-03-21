import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export default function FeedbackButton() {
	return (
		<StyledFeedback>
			<Link to='/feedback' title='Share feedback about Werk.'>
				<FontAwesomeIcon
					icon={['far', 'comment-alt']}
					size='2x'
					color='black'
				/>
			</Link>
		</StyledFeedback>
	);
}

const StyledFeedback = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	padding: 2rem;

	background-color: white;
`;
