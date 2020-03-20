import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from '.';
import { StyledButton } from '../../styled-components';
import { GET_USER } from '../../queries';

export default function HomeHeader() {
	const history = useHistory();

	const { loading, error, data } = useQuery(GET_USER);

	const handleViewProjects = () => history.push('/projects');

	return (
		<StyledUserWrapper>
			{loading && <p>Loading...</p>}
			{error && <p>Error!</p>}
			{data && (
				<>
					<Link to={`/profile/${data.me.id}`}>
						<Avatar
							width='12'
							height='12'
							marginRight='2'
							avatarURL={data.me.avatarURL}
						/>
					</Link>
					<div className='user-right-panel'>
						<div className='user-right-top'>
							<h2 className='user-username'>
								<Link to='/account'>{data.me.username}</Link>
							</h2>
							{/* <button onClick={handleEditProfile}>Edit Profile</button> */}
							<ProjectsButton onClick={handleViewProjects}>
								View Projects
							</ProjectsButton>
						</div>
						<div className='user-right-middle'>
							<div>
								{data.me.projects.length} project
								{data.me.projects.length !== 1 && 's'}
							</div>
							{/* <div>{data.me.followers.length} followers</div>
							<div>{data.me.following.length} following</div> */}
						</div>
						<div>{data.me.bio}</div>
					</div>
				</>
			)}
		</StyledUserWrapper>
	);
}

const StyledUserWrapper = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid silver;

	.user-right-panel {
		display: flex;
		flex-direction: column;
	}

	.user-right-top,
	.user-right-middle {
		width: 30rem;
		margin-bottom: 1rem;

		display: flex;
		justify-content: space-between;
	}

	.user-right-top {
		.user-username {
			a {
				color: inherit;
				text-decoration: none;
			}
		}

		button {
			/* margin-left: 2rem; */
			cursor: pointer;
		}
	}
`;

const ProjectsButton = styled(StyledButton)`
	margin: 0;
	width: 12rem;
`;
