import React from 'react';
import { Route } from 'react-router-dom';
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
} from './pages';
import { useIsLoggedIn } from './hooks';

function App() {
	const { isLoggedIn } = useIsLoggedIn();

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
		</div>
	);
}

export default App;
