import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import aquaBall from './../../assets/images/aqua-ball.png';
import orangeBall from './../../assets/images/orange-ball.png';
import pinkBall from './../../assets/images/pink-ball.png';
import yellowBall from './../../assets/images/yellow-ball.png';
import blueBall from './../../assets/images/blue-ball.png';
import purpleBall from './../../assets/images/purple-ball.png';
import chick1 from './../../assets/images/chick1.svg';
import chick2 from './../../assets/images/chick2.svg';
import chick3 from './../../assets/images/chick3.svg';
import chick4 from './../../assets/images/chick4.svg';
import polygon from './../../assets/images/polygon.png';

interface ComProps {
	children?: any;
};

const IntroducePage: FC<ComProps> = ({
	children = ""
}) => {
	return (
		<>
			<div className={`${styles['container']}`}>
				<div className={`${styles['content']}`}>
					<div className={`${styles['rainbow']}`}>
						<video className={`${styles['video']}`} autoPlay playsInline muted loop preload="" poster="./../../assets/video/rainbow-circle-black.25ba983.jpg">
							<source src={require('./../../assets/video/rainbow1.mp4')} type="video/mp4"/>
						</video>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 100" preserveAspectRatio="xMidYMid slice">
							<defs>
								<mask id="maskblack" x="0" y="0" width="100%" height="100%">
									<rect x="0" y="0" width="100%" height="100%"></rect>
									<text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"> EGGCELLENT NFT CLUB </text>
								</mask>
							</defs>
							<rect className={`${styles['rect']}`} x="0" y="0" width="100%" height="100%"></rect>
						</svg>
					</div>
					<p className={`${styles['heading-sm']}`}> Backed by Real-World Chicken Eggs Farming Business </p>
					<img src={polygon} alt="polygon" className={`${styles['polygon']}`}/>
				</div>
				<Link to="/eggcellent" className={`${styles['btn-start']}`}><button> LET'S EXPLORE </button></Link>
				<div className={`${styles['aqua-ball']} ${styles['animation-1']} ${styles['ball-animation']}`}>
					<img src={aquaBall} alt="" />
				</div>
				<div className={`${styles['orange-ball']} ${styles['animation-2']} ${styles['ball-animation']}`}>
					<img src={orangeBall} alt="" />
				</div>
				<div className={`${styles['pink-ball']} ${styles['animation-2']} ${styles['ball-animation']}`}>
					<img src={pinkBall} alt="" />
				</div>
				<div className={`${styles['yellow-ball']} ${styles['animation-1']} ${styles['ball-animation']}`}>
					<img src={yellowBall} alt="" />
				</div>
				<div className={`${styles['blue-ball']} ${styles['animation-1']} ${styles['ball-animation']}`}>
					<img src={blueBall} alt="" />
				</div>
				<div className={`${styles['purple-ball']} ${styles['animation-1']} ${styles['ball-animation']}`}>
					<img src={purpleBall} alt="" />
				</div>
				<div className={`${styles['chick1']} ${styles['animation-2']} ${styles['ball-animation']}`}>
					<img src={chick1} alt="" />
				</div>
				<div className={`${styles['chick2']} ${styles['animation-1']} ${styles['ball-animation']}`}>
					<img src={chick2} alt="" />
				</div>
				<div className={`${styles['chick3']} ${styles['animation-1']} ${styles['ball-animation']}`}>
					<img src={chick3} alt="" />
				</div>
				<div className={`${styles['chick4']} ${styles['animation-2']} ${styles['ball-animation']}`}>
					<img src={chick4} alt="" />
				</div>
			</div>
		</>
	)
};

export default IntroducePage;
