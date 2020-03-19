import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from '../home';
import { ProjectRow } from './';

export default function Card({ user }) {
	const { username, id, projects } = user;

	return (
		<StyledCard>
			<div className='card-user'>
				<Link to={`/profile/${id}`} className='card-user-left'>
					<Avatar width='3' height='3' marginRight='1' />
					{username}
				</Link>
				{/* <button>Follow</button> */}
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
	margin-bottom: 2rem;

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

			color: inherit;
			text-decoration: none;
		}
	}
`;
