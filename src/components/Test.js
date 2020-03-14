import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_INFO = gql`
	query {
		info
	}
`;

export default function Test() {
	const { loading, error, data } = useQuery(GET_INFO);

	return (
		<div>
			<h2>TEST</h2>
			{loading && <p>Loading...</p>}
			{error && <p>Error! {error}</p>}
			{data && <p>{data.info}</p>}
		</div>
	);
}
