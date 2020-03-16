import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from '.';

const GET_USER = gql`
	query {
		me {
			username
			avatarURL
			bio
			projects {
				id
			}
			followers {
				id
			}
			following {
				id
			}
		}
	}
`;

export default function HomeHeader() {
	const history = useHistory();
	const { loading, error, data } = useQuery(GET_USER);

	// const handleEditProfile = () => history.push('/updateprofile');

	const handleViewProjects = () => history.push('/projects');

	return (
		<StyledUserWrapper>
			{loading && <p>Loading...</p>}
			{error && <p>Error!</p>}
			{data && (
				<>
					<Avatar
						width='12'
						height='12'
						marginRight='2'
						avatarURL={data.me.avatarURL}
					/>
					<div className='user-right-panel'>
						<div className='user-right-top'>
							<h2>{data.me.username}</h2>
							{/* <button onClick={handleEditProfile}>Edit Profile</button> */}
							<button onClick={handleViewProjects}>Add Projects</button>
						</div>
						<div className='user-right-middle'>
							<div>{data.me.projects.length} projects</div>
							<div>{data.me.followers.length} followers</div>
							<div>{data.me.following.length} following</div>
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
		button {
			/* margin-left: 2rem; */
			cursor: pointer;
		}
	}
`;
