import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const IS_LOGGED_IN = gql`
	query {
		isLoggedIn @client
	}
`;

export const useIsLoggedIn = () => {
	const {
		data: { isLoggedIn },
		client,
	} = useQuery(IS_LOGGED_IN);

	return { isLoggedIn, client };
};
