import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const getToken = () => {
	const token = localStorage.getItem('token');
	return token ? `Bearer ${token}` : '';
};

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: process.env.REACT_APP_BACKEND,
	request: operation =>
		operation.setContext({ headers: { Authorization: getToken() } }),
	cache,
	resolvers: {},
});

const data = {
	isLoggedIn: !!localStorage.getItem('token'),
};

cache.writeData({ data });

client.onResetStore(() => cache.writeData({ data }));

library.add(fas, far, fab);

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<App />
		</Router>
	</ApolloProvider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
