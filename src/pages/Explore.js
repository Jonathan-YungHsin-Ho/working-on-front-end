import React from 'react';
import { LandingHeader, AllUsers } from '../components/explore';
import { useIsLoggedIn } from '../hooks/useIsLoggedIn';

export default function Explore() {
	const { isLoggedIn } = useIsLoggedIn();

	return (
		<div>
			{!isLoggedIn && <LandingHeader />}
			<AllUsers />
		</div>
	);
}
