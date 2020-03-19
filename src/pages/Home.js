import React from 'react';
import {
	HomeHeader,
	// Following
} from '../components/home';
import { AllUsers } from '../components/explore';

export default function Home() {
	return (
		<div>
			<HomeHeader />
			<AllUsers />
			{/* <Following /> */}
		</div>
	);
}
