import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import GlobalStyle from './styled-components/GlobalStyle';
import { NavBar } from './components/navbar';
import { Main, Register, Login, PrivateRoute, Profile, Project } from './pages';
import Test from './components/Test';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<NavBar />
			<Test />
			<Route exact path='/' component={Main} />
			<Route path='/register' component={Register} />
			<Route path='/login' component={Login} />
			<PrivateRoute path='/profile' component={Profile} />
			<PrivateRoute path='/project' component={Project} />
		</div>
	);
}

export default App;
