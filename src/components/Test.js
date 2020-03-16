import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_INFO } from '../queries';

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
