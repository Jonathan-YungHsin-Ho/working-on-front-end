import React from 'react';
import styled from 'styled-components';
import { useIsLoggedIn } from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectRow({ project }) {
	const { isLoggedIn } = useIsLoggedIn();

	return (
		!project.private && (
			<StyledProjectRow>
				<div className='project-row-top'>
					<div>
						{isLoggedIn && (
							<>
								<FontAwesomeIcon
									icon={['far', 'star']}
									size='sm'
									color='silver'
									className='icon-star'
								/>
								<FontAwesomeIcon
									icon={['far', 'heart']}
									size='sm'
									color='silver'
									className='icon-heart'
								/>
							</>
						)}
						{project.name}
					</div>
					<div>
						{project.wantAssistance && (
							<FontAwesomeIcon
								icon={['fas', 'plus-circle']}
								size='lg'
								color='#ed1b2e'
								className='icon-help'
							/>
						)}
						{project.wantFeedback && (
							<FontAwesomeIcon
								icon={['fas', 'comment-dots']}
								size='lg'
								color='gray'
								className='icon-feedback'
							/>
						)}
					</div>
				</div>
				<div className='project-status'>{project.status}</div>
			</StyledProjectRow>
		)
	);
}

const StyledProjectRow = styled.div`
	padding: 0.5rem 1rem;

	border-bottom: 1px solid silver;

	.project-row-top {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.icon-star,
		.icon-heart {
			margin-right: 0.75rem;
		}

		.icon-help,
		.icon-feedback {
			margin-left: 1rem;
		}
	}

	.project-status {
		margin-top: 0.5rem;
		font-size: 1.1rem;
	}
`;
