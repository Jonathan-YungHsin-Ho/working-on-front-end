import React from 'react';
import styled from 'styled-components';
import { ProjectRow } from './';

export default function Card({ user }) {
	const { username, projects } = user;

	return (
		<StyledCard>
			<div className='card-user'>
				<div className='card-user-left'>
					<StyledUserPic></StyledUserPic>
					{username}
				</div>
				<button>Follow</button>
			</div>
			{projects[0] && (
				<div className='card-projects'>
					{projects.map(project => (
						<ProjectRow key={project.id} project={project} />
					))}
				</div>
			)}
		</StyledCard>
	);
}

const StyledCard = styled.div`
	width: 30rem;
	padding-bottom: 0.5rem;

	display: flex;
	flex-direction: column;

	border-radius: 0.3rem;
	border: 1px solid silver;

	.card-user {
		padding: 1rem 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid silver;

		font-weight: bold;

		.card-user-left {
			display: flex;
			align-items: center;
		}
	}
`;

const StyledUserPic = styled.div`
	margin-right: 1rem;
	flex-shrink: 0;

	width: 4rem;
	height: 4rem;
	border-radius: 50%;

	background-color: rebeccapurple;
`;
