import { FC } from 'react';
import styles from './styles.module.scss';

import banner from './../../assets/images/banner.jpg';

const Main: FC = () => {
	
	return (
		<section id="main" className={`${styles['main-section']}`}>
			<img src={banner} alt="" />
		</section>
	)
};

export default Main;
