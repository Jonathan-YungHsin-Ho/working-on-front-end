import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScreenOverlay } from '.';
import { GET_PROJ_BY_ID } from '../../queries';

export default function ModalProject({ handleCloseModal, id }) {
	const { loading, error, data } = useQuery(GET_PROJ_BY_ID, {
		variables: { id },
	});

	return (
		<div>
			<StyledProject>
				{loading && <p>Loading...</p>}
				{error && <p>Error!</p>}
				{data && (
					<>
						<div className='project-left'>
							<div className='project-info-top'>
								<h2>{data.projectByID.name}</h2>
								{data.projectByID?.status && (
									<div className='project-field'>
										<h3>Status</h3>
										<p>{data.projectByID.status}</p>
									</div>
								)}
								{data.projectByID?.description && (
									<div className='project-field'>
										<h3>Description</h3>
										<p>{data.projectByID.description}</p>
									</div>
								)}
								{data.projectByID?.techStack && (
									<div className='project-field'>
										<h3>Tech stack</h3>
										<p>{data.projectByID.techStack}</p>
									</div>
								)}
								<div className='project-field links'>
									{(data.projectByID.designURL ||
										data.projectByID.frontEndRepoURL ||
										data.projectByID.backEndRepoURL ||
										data.projectByID.deploymentURL) && <h3>Links</h3>}
									{data.projectByID?.designURL && (
										<div className='link'>
											<FontAwesomeIcon
												icon={['fab', 'figma']}
												size='lg'
												color='black'
											/>
											<a
												href={data.projectByID.designURL}
												target='_blank'
												rel='noopener noreferrer'>
												Design files
											</a>
										</div>
									)}
									{data.projectByID?.frontEndRepoURL && (
										<div className='link'>
											<FontAwesomeIcon
												icon={['fab', 'github']}
												size='lg'
												color='black'
											/>
											<a
												href={data.projectByID.frontEndRepoURL}
												target='_blank'
												rel='noopener noreferrer'>
												Front-end code repo
											</a>
										</div>
									)}
									{data.projectByID?.backEndRepoURL && (
										<div className='link'>
											<FontAwesomeIcon
												icon={['fab', 'github']}
												size='lg'
												color='black'
											/>
											<a
												href={data.projectByID.backEndRepoURL}
												target='_blank'
												rel='noopener noreferrer'>
												Back-end code repo
											</a>
										</div>
									)}
									{data.projectByID?.deploymentURL && (
										<div className='link'>
											<FontAwesomeIcon
												icon={['fas', 'globe']}
												size='lg'
												color='black'
											/>
											<a
												href={data.projectByID.deploymentURL}
												target='_blank'
												rel='noopener noreferrer'>
												Deployed project
											</a>
										</div>
									)}
								</div>
							</div>
							<div className='project-booleans'>
								{data.projectByID.wantAssistance && (
									<div className='project-boolean'>
										<FontAwesomeIcon
											icon={['fas', 'plus-circle']}
											size='lg'
											color='#ed1b2e'
										/>
										<p>Help wanted</p>
									</div>
								)}
								{data.projectByID.wantFeedback && (
									<div className='project-boolean'>
										<FontAwesomeIcon
											icon={['fas', 'comment-dots']}
											size='lg'
											color='cornflowerblue'
										/>
										<p>Feedback wanted</p>
									</div>
								)}
								{data.projectByID.completed && (
									<div className='project-boolean'>
										<FontAwesomeIcon
											icon={['fas', 'check']}
											size='lg'
											color='green'
										/>
										<p>Completed</p>
									</div>
								)}
							</div>
						</div>
						<div className='project-comments'></div>
					</>
				)}
			</StyledProject>
			<ScreenOverlay onClick={handleCloseModal} />
		</div>
	);
}

const StyledProject = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;

	width: 80rem;
	height: 50rem;

	background-color: white;
	border-radius: 0.3rem;
	border: 1px solid silver;

	display: flex;

	.project-left {
		width: 50rem;
		padding: 2rem;
		border-right: 1px solid silver;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.project-info-top {
			.project-field {
				margin-top: 2rem;
			}

			.links {
				display: flex;
				flex-direction: column;

				a {
					margin-left: 0.75rem;
				}
			}
		}

		.project-booleans {
			display: flex;
			justify-content: space-between;

			.project-boolean {
				display: flex;
				p {
					margin-left: 0.75rem;
				}
			}
		}
	}
`;
