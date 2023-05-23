import React, { FC } from 'react';

import Home from '../Home/Home';
import Documentation from '../Documentation/Documentation';
import Roadmap from '../Roadmap/Roadmap';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';


const Dashboard: FC = () => {

	return (
		<>
			<Home></Home>
			<Documentation></Documentation>
			<Roadmap></Roadmap>
			<Team></Team>
			<Contact></Contact>
		</>
	);
}

export default Dashboard;
