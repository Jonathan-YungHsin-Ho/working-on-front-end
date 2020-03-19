import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Card } from '../card';
import { GET_ALL_USERS } from '../../queries';

export default function AllUsers() {
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
