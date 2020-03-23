import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Card } from '../card';
import { Loading } from '../misc';
import { GET_ALL_USERS } from '../../queries';

export default function AllUsers() {
	const { loading, error, data } = useQuery(GET_ALL_USERS);

	return (
		<CardWrapper>
			{loading && <Loading />}
			{error && <p>Error!</p>}
			{data?.allUsers.map(user => (
				<Card key={user.username} user={user} />
			))}
		</CardWrapper>
	);
}

const CardWrapper = styled.div`
	/* width: 100%; */
	max-width: 98rem;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;

	/* flex-flow: column wrap;
	justify-content: flex-start;
	align-items: center; */

	padding: 2rem;
`;
