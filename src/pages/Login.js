import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { StyledForm, StyledInput, StyledButton } from '../styled-components';
import { Logo } from '../components/navbar';
import { Loading } from '../components/misc';
import { LOGIN } from '../mutations';
// import { useIsLoggedIn } from '../hooks';

export default function Login() {
	const history = useHistory();

	// const { isLoggedIn } = useIsLoggedIn();

	const initialLogin = { email: '', password: '' };

	const [user, setUser] = useState(initialLogin);

	const [login, { loading, error, client }] = useMutation(LOGIN);

	const handleChange = e =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const res = await login({ variables: { ...user } });

			const {
				data: {
					login: { token },
				},
			} = res;

			localStorage.setItem('token', token);
			client.resetStore().then(() => {
				client.writeData({ data: { isLoggedIn: true } });
				history.push('/home');
			});
		} catch (err) {
			// console.log(err.graphQLErrors.map(err => err.message));
			setUser(initialLogin);
		}
	};

	// if (isLoggedIn) return <Redirect to='/home' />;
	if (!!localStorage.getItem('token')) return <Redirect to='/home' />;

	return (
		<StyledForm>
			<div>
				<Logo className='logo' />
				{loading && <Loading />}
				{!loading && (
					<form onSubmit={handleSubmit}>
						<StyledInput
							type='text'
							name='email'
							value={user.email}
							placeholder='Email'
							onChange={handleChange}
						/>
						<StyledInput
							type='password'
							name='password'
							value={user.password}
							placeholder='Password'
							onChange={handleChange}
						/>
						<StyledButton type='submit'>Log In</StyledButton>
					</form>
				)}
				{error && (
					<div>
						{error.graphQLErrors.map((err, index) => (
							<p className='error' key={index}>
								{err.message}
							</p>
						))}
					</div>
				)}
			</div>
			<div>
				Don't have an account? <Link to='/signup'>Sign up</Link>
			</div>
		</StyledForm>
	);
}
