import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Zoom from 'react-reveal/Zoom';

import banner from './../../assets/images/banner-imagee.svg';
import aquaBall from './../../assets/images/aqua-ball.png';
import pinkBall from './../../assets/images/pink-ball.png';
import yellowBall from './../../assets/images/yellow-ball.png';

import styles from './styles.module.scss';

const Home: FC = () => {

	return (
		<>
			<section id="home" className={`${styles['banner-section']}`}>
				<div className={`${styles['outer-div']}`}>		
					<Zoom bottom>
						<div className={`${styles['zoom-in-right']}`}>
							<p className={`${styles['heading-text-bold-oxanium']}`}>
								EGGCELENT PROJECT 
								<br />
								<span className={`${styles['purple-color']}`}> NET COLLECTION </span>
							</p>
							<p className={`${styles['small-text-normal-poppins']}`}>
								Lörem ipsum sMF hykaligt athleisure facial recognition vertikal, tillväxtföretag inte computer vison. RFID personalisering.
							</p>
							<div className={`${styles['btn-banner-div']}`}>
								<button className={`${styles['btn-filled']}`}>Join Discord</button>
								<button className={`${styles['btn-hollow']}`}>Check Twitter</button>
							</div>
						</div>
					</Zoom>
					<Zoom bottom ssrFadeout>
						<div>
							<img src={banner} alt="" />
						</div>
					</Zoom>
				</div>
				<div className={`${styles['pink-ball']}  ${styles['animation-1']} ${styles['ball-animation']}`}>
					<img src={pinkBall} alt="" />
				</div>
				<div className={`${styles['yellow-ball']}  ${styles['animation-2']} ${styles['ball-animation']}`}>
					<img src={yellowBall} alt="" />
				</div>
				<div className={`${styles['aqua-ball']}  ${styles['animation-3']} ${styles['ball-animation']}`}>
					<img src={aquaBall} alt="" />
				</div>
			</section>
		</>
	);
}

export default Home;
