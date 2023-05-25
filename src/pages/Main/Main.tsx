import { FC } from 'react';
import styles from './styles.module.scss';

import banner from './../../assets/images/banner.jpg';

const Main: FC = () => {
	
	return (
		<section id="main" className={`${styles['main-section']}`} style={{ backgroundImage: `url(${banner})` }}>
		</section>
	)
};

export default Main;
