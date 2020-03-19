import React from 'react';
import styled from 'styled-components';
import { useIsLoggedIn } from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalProject } from '../modals';
import { useModal } from '../../hooks';

export default function ProjectRow({ project }) {
	const { isLoggedIn } = useIsLoggedIn();

	const { showModal, handleModal } = useModal();

	return (
		!project.private && (
			<StyledProjectRow isLoggedIn={isLoggedIn}>
				<div className='project-row-top'>
					<div>
						{/* {isLoggedIn && (
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
						)} */}
						<div
							className='project-name'
							onClick={() => handleModal({ type: 'open' })}>
							{project.name}
						</div>
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
								color='cornflowerblue'
								className='icon-feedback'
							/>
						)}
						{project.completed && (
							<FontAwesomeIcon
								icon={['fas', 'check']}
								size='lg'
								color='green'
								className='icon-feedback'
							/>
						)}
					</div>
				</div>
				<div className='project-status'>{project.status}</div>
				{showModal && (
					<ModalProject
						handleCloseModal={() => handleModal({ type: 'close' })}
						id={project?.id}
					/>
				)}
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

		.project-name {
			cursor: pointer;
		}

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
