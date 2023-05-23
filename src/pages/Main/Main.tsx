import { FC } from 'react';
import styles from './styles.module.scss';

const Main: FC = () => {
	
	return (
		<section id="main" className={`${styles['main-section']}`}>
			<a href="#main" className={`${styles['dashboard']}`}> 
				<div className={`${styles['btn-area']}`}>
					<div>
						<span> Dashboard </span>
					</div>
				</div>
			</a>
			<a href="#home" className={`${styles['home']}`}>
				<div className={`${styles['btn-area']}`}>
					<div>
						<span> Home </span>
					</div>
				</div>
			</a>
			<a href="#documentation" className={`${styles['documentation']}`}>
				 <div className={`${styles['btn-area']}`}>
					<div>
						<span> Documentation </span>
					</div>
				</div>
			</a>
			<a href="#roadmap" className={`${styles['roadmap']}`}>
				 <div className={`${styles['btn-area']}`}>
					<div>
						<span> Roadmap </span>
					</div>
				</div>
			</a>
			<a href="#team" className={`${styles['team']}`}>
				 <div className={`${styles['btn-area']}`}>
					<div>
						<span> Team </span>
					</div>
				</div>
			</a>
			<a href="#contact" className={`${styles['contact']}`}>
				 <div className={`${styles['btn-area']}`}>
					<div>
						<span> Contact </span>
					</div>
				</div>
			</a>
		</section>
	)
};

export default Main;
