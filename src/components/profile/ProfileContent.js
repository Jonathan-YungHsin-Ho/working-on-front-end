import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from '../home';
import { ProjectRow } from '../card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GET_USER_BY_ID } from '../../queries';

export default function ProfileContent() {
	const { id } = useParams();

	const { loading, error, data } = useQuery(GET_USER_BY_ID, {
		variables: { id },
	});

	return (
		<ProfilerWrapper>
			<div className='content'>
				<div className='content-left'>
					{loading && <p>Loading...</p>}
					{error && <p>Error!</p>}
					{data && (
						<>
							<div className='profile-header'>
								<h2>{data.userByID.username}</h2>
								<Avatar
									width='12'
									height='12'
									marginRight='2'
									avatarURL={data.userByID.avatarURL}
								/>
							</div>
							<div className='profile-fields'>
								{data.userByID.name && (
									<div className='profile-field'>
										<h3>Name</h3>
										<p>{data.userByID.name}</p>
									</div>
								)}
								<div className='profile-field'>
									<h3>Email</h3>
									<a href={`mailto:${data.userByID.email}`}>
										{data.userByID.email}
									</a>
								</div>
								{data.userByID.bio && (
									<div className='profile-field'>
										<h3>Bio</h3>
										<p>{data.userByID.bio}</p>
									</div>
								)}
								{data.userByID.techStack && (
									<div className='profile-field'>
										<h3>Preferred Tech Stack</h3>
										<p>{data.userByID.techStack}</p>
									</div>
								)}
								<div className='profile-field links'>
									{(data.userByID.githubURL ||
										data.userByID.linkedinURL ||
										data.userByID.portfolioURL ||
										data.userByID.twitterURL) && <h3>Links</h3>}
									{data.userByID.githubURL && (
										<div className='link'>
											<FontAwesomeIcon
												icon={['fab', 'github']}
												size='lg'
												color='black'
											/>
											<a
												href={data.userByID.githubURL}
												target='_blank'
												rel='noopener noreferrer'>
												GitHub
											</a>
										</div>
									)}
									{data.userByID.linkedinURL && (
										<div className='link'>
											<FontAwesomeIcon
												icon={['fab', 'linkedin']}
												size='lg'
												color='black'
											/>
											<a
												href={data.userByID.linkedinURL}
												target='_blank'
												rel='noopener noreferrer'>
												LinkedIn
											</a>
										</div>
									)}
									{data.userByID.portfolioURL && (
										<div className='link'>
											<FontAwesomeIcon
												icon={['fas', 'globe']}
												size='lg'
												color='black'
											/>
											<a
												href={data.userByID.portfolioURL}
												target='_blank'
												rel='noopener noreferrer'>
												Portfolio
											</a>
										</div>
									)}
									{data.userByID.twitterURL && (
										<div className='link'>
											<FontAwesomeIcon
												icon={['fab', 'twitter']}
												size='lg'
												color='black'
											/>
											<a
												href={data.userByID.twitterURL}
												target='_blank'
												rel='noopener noreferrer'>
												Twitter
											</a>
										</div>
									)}
								</div>
							</div>
						</>
					)}
				</div>
				<div className='content-right'>
					{data && (
						<div>
							<h3 className='profile-projects-header'>Current Projects</h3>
							<div className='profile-projects'>
								{data.userByID.projects.map(project => (
									<ProjectRow key={project.id} project={project} />
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</ProfilerWrapper>
	);
}

const ProfilerWrapper = styled.div`
	margin: 2rem auto;

	width: 100%;
	max-width: 98rem;

	border-radius: 0.3rem;
	border: 1px solid silver;

	.content {
		display: flex;

		.content-left {
			padding: 2rem;
			width: 60%;
			border-right: 1px solid silver;

			.profile-header {
				display: flex;
				justify-content: space-between;
			}

			.profile-fields {
				margin-top: -8rem;

				.profile-field {
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
		}

		.content-right {
			flex-grow: 1;

			.profile-projects-header {
				margin: 1rem;
			}

			.profile-projects {
				width: 100%;
				border-top: 1px solid silver;
			}
		}
	}
`;
