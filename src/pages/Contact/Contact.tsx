import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import styles from './styles.module.scss';
import openSea from './../../assets/images/OpenSea.svg';
import discord from './../../assets/images/Discord.svg';
import twitter from './../../assets/images/Twitter.svg';
import youtube from './../../assets/images/YouTube.svg';
import joinCommunityImg from './../../assets/images/join-community-img.svg';
import orangeBall from './../../assets/images/orange-ball.png';
import purpleBall from './../../assets/images/purple-ball.png';

const Contact: FC = () => {
	return (
		<>
			<section id="contact" className={`${styles['join-our-community-section']}`}>
				<div className={`${styles['outer-div']}`}>
					<div className={`${styles['left-div']}`}>
						<h2  className={`${styles['heading-text-bold-oxanium']} ${styles['white-color']}`}> 
							 JOIN THE  
							<span className={`${styles['yellow-color']}`}> COMMUNITY <i className={`${styles['hat']}`}></i> </span>
						</h2>
						<p  className={`${styles['small-text-normal-poppins']} ${styles['white-color']}`}> 
							Lörem ipsum tirinar ambitism agnostivision dise, ontoform ett neling. Göföd dysvalens. Gamification reasion utan investeringsfrämjande psykofaktisk terration.
						</p>
						<div className={`${styles['icons-div']}`}>
							<a href="home">
								<img src={openSea} alt=''/>
							</a>
							<a href="home">
								<img src={discord} alt=''/>
							</a>
							<a href="home">
								<img src={twitter} alt=''/>
							</a>
							<a href="home">
								<img src={youtube} alt=''/>
							</a>
						</div>
					</div>
					<div className={`${styles['right-div']}`}>
						<img src={joinCommunityImg} alt=''/>
					</div>
				</div>
				<div className={`${styles['orange-ball']}`}>
					<img src={orangeBall} alt="" />
				</div>
				<div className={`${styles['purple-ball']}`}>
					<img src={purpleBall} alt="" />
				</div>
			</section>
		</>
	);
}

export default Contact;
