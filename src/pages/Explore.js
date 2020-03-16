import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { Card } from '../components/card';

const GET_ALL_USERS = gql`
	query {
		allUsers {
			username
			id
			projects {
				name
				id
				private
				status
				wantFeedback
				wantAssistance
				completed
				# likes
				# comments
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
	max-width: 98rem;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: flex-start;

	padding: 2rem;
`;
