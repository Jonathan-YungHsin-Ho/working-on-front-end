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
	UpdateProfile,
	Projects,
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
			<Route path='/profile' component={Profile} />
			<PrivateRoute path='/home' component={Home} />
			<PrivateRoute path='/project' component={Project} />
			<PrivateRoute path='/updateprofile' component={UpdateProfile} />
			<PrivateRoute path='/projects' component={Projects} />
		</div>
	);
}

export default App;
