import React, { FC } from 'react';

import Main from '../Main/Main';
import Home from '../Home/Home';
import Documentation from '../Documentation/Documentation';
import Roadmap from '../Roadmap/Roadmap';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';


const Dashboard: FC = () => {

	return (
		<>
			<div>
				<Main></Main>
				<Home></Home>
				<Documentation></Documentation>
				<Roadmap></Roadmap>
				<Team></Team>
				<Contact></Contact>
			</div>
		</>
	);
}

export default Dashboard;
