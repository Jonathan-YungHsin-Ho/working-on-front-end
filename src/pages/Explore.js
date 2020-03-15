import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { Card } from '../components/card';

const GET_ALL_USERS = gql`
	query {
		allUsers {
			username
			projects {
				name
				id
				private
				status
				wantFeedback
				wantAssistance
				deploymentURL
				frontEndRepoURL
				backEndRepoURL
				# likes
				# comments
				createdAt
				lastUpdated
			}
		}
	}
`;

export default function Explore() {
	const { loading, error, data } = useQuery(GET_ALL_USERS);

	return (
		<CardWrapper>
			{loading && <p>Loading...</p>}
			{error && <p>Error!</p>}
			{data?.allUsers.map(user => (
				<Card key={user.username} user={user} />
			))}
		</CardWrapper>
	);
}

const CardWrapper = styled.div`
	display: flex;
	flex-direction: wrap;
	justify-content: space-around;
	align-items: flex-start;

	padding: 2rem;
`;
