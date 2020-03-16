import React from 'react';
import {
	HomeHeader,
	// Following
} from '../components/home';
import { Explore } from './';

export default function Home() {
	return (
		<div>
			<HomeHeader />
			<Explore />
			{/* <Following /> */}
		</div>
	);
}
