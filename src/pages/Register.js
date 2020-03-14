import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledForm } from '../styled-components/StyledComponents';
import { Logo } from '../components/navbar';

export default function Register() {
	return (
		<StyledForm>
			<div>
				<Logo className='logo' />
				<p>Sign up to see what projects your dev friends are working on.</p>
				<form>
					<input type='text' placeholder='Email' />
					<input type='text' placeholder='Username' />
					<input type='password' placeholder='Password' />
					<button>Sign up</button>
				</form>
			</div>
			<div>
				Have an account? <Link to='/login'>Log in</Link>
			</div>
		</StyledForm>
	);
}
