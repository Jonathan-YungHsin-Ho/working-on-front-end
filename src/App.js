import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './styled-components';
import { NavBar } from './components/navbar';
import {
	Home,
	Signup,
	Login,
	Explore,
	PrivateRoute,
	Profile,
	Projects,
	Account,
	Feedback,
} from './pages';
import { FeedbackButton } from './components/feedback';
import { useIsLoggedIn } from './hooks';

function App() {
	const { isLoggedIn } = useIsLoggedIn();
	const { pathname } = useLocation();

	return (
		<div className='App'>
			<GlobalStyle />
			<NavBar />
			<Route exact path='/' component={isLoggedIn ? Home : Explore} />
			<Route path='/signup' component={Signup} />
			<Route path='/login' component={Login} />
			<Route path='/profile/:id' component={Profile} />
			<PrivateRoute path='/home' component={Home} />
			<PrivateRoute path='/explore' component={Explore} />
			<PrivateRoute path='/projects' component={Projects} />
			<PrivateRoute path='/account' component={Account} />
			<PrivateRoute path='/feedback' component={Feedback} />
			{isLoggedIn && pathname !== '/feedback' && <FeedbackButton />}
		</div>
	);
}

export default App;
