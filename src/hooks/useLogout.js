import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

export const useLogout = () => {
	const history = useHistory();

	const client = useApolloClient();

	const logout = () => {
		client.clearStore();
		client.writeData({ data: { isLoggedIn: false } });
		history.push('/');
		localStorage.clear();
	};

	return logout;
};
