import React from 'react';
import { Route } from 'react-router-dom';
import { useIsLoggedIn } from './hooks';
import './App.css';
import GlobalStyle from './styled-components/GlobalStyle';
import { NavBar } from './components/navbar';
import {
	Home,
	Signup,
	Login,
	Explore,
	PrivateRoute,
	Profile,
	Project,
	AddProject,
} from './pages';

function App() {
	const { isLoggedIn } = useIsLoggedIn();

	return (
		<div className='App'>
			<GlobalStyle />
			<NavBar />
			<Route exact path='/' component={isLoggedIn ? Home : Explore} />
			<Route path='/signup' component={Signup} />
			<Route path='/login' component={Login} />
			<Route path='/explore' component={Explore} />
			<PrivateRoute path='/home' component={Home} />
			<PrivateRoute path='/profile' component={Profile} />
			<PrivateRoute path='/project' component={Project} />
			<PrivateRoute path='/addproject' component={AddProject} />
		</div>
	);
}

export default App;
