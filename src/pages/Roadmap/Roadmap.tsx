import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import styles from './styles.module.scss';
import roadmapImg from './../../assets/images/roadmap (2).png';
import chick6 from './../../assets/images/chick6.svg';

const Roadmap: FC = () => {
	return (
		<>
			<section id="roadmap" className={`${styles['roadmap-section']}`}>
				<div className={`${styles['content']}`}>
					<div className={`${styles['rainbow']}`}>
						<video className={`${styles['video']}`} autoPlay playsInline muted loop preload="" poster="./../../assets/video/rainbow-circle.f18153c.png">
							<source src={require('./../../assets/video/rainbow1.mp4')} type="video/mp4"/>
						</video>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 200" preserveAspectRatio="xMidYMid slice">
							<defs>
								<mask id="maskblack" x="0" y="0" width="100%" height="100%">
									<rect x="0" y="0" width="100%" height="100%"></rect>
									<text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"> ROADMAP </text>
								</mask>
							</defs>
							<rect className={`${styles['rect']}`} x="0" y="0" width="100%" height="100%"></rect>
						</svg>
					</div>
					<p className={`${styles['heading-text-bold-oxanium']} ${styles['purple-color']}`}>  WHERE DREAMS COME TRUE  </p>
				</div>
				<div className={`${styles['roadmap-img']}`}>
					<img src={roadmapImg} alt=""/>
					<div className={`${styles['chick6']}`}>
						<img src={chick6} alt=''/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Roadmap;
