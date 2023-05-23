import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';

import styles from './styles.module.scss';
import blueBall from './../../assets/images/blue-ball.png';
import purpleBall from './../../assets/images/purple-ball.png';
import pic1 from './../../assets/images/Pic_1.png';
import pic2 from './../../assets/images/Pic_2.png';
import pic3 from './../../assets/images/Pic_3.png';
import pic4 from './../../assets/images/Pic_4.png';

const Team: FC = () => {
	return (
		<>
			<section id="team" className={`${styles['team-profile-section']}`}>
				<RubberBand>
					<p className={`${styles['section-heading']} ${styles['purple-color']} ${styles['edited-text']}`}> TEAM PROFILE </p>
				</RubberBand>
				<p className={`${styles['sub-text']} ${styles['small-text-normal-poppins']} ${styles['black-color']} ${styles['edited-text']}`}> Lörem ipsum tirinar ambitism agnostivision dise, ontoform ett neling. Göföd dysvalens. </p>
				<div className={`${styles['team']}`}>
					<div className={`${styles['first-row']}`}>
						<div className={`${styles['team-profile-card']}`}>
							<img src={pic1} alt=''/>
							<p _ngcontent-ng-c1728332637="" className={`${styles['name']}`}> WESTIE(Kenny) </p>
							<p _ngcontent-ng-c1728332637="" className={`${styles['designation']}`}>Founder (Operation)</p>
						</div>
						<div className={`${styles['team-profile-card']}`}>
							<img src={pic2} alt=''/>
							<p _ngcontent-ng-c1728332637="" className={`${styles['name']}`}>  CHUY  </p>
							<p _ngcontent-ng-c1728332637="" className={`${styles['designation']}`}>Co-Founder (Marketing)</p>
						</div>
					</div>
					<div className={`${styles['first-row']}`}>
						<div className={`${styles['team-profile-card']}`}>
							<img src={pic3} alt=''/>
							<p _ngcontent-ng-c1728332637="" className={`${styles['name']}`}>  Tommy  </p>
							<p _ngcontent-ng-c1728332637="" className={`${styles['designation']}`}>Team (Sales)</p>
						</div>
						<div className={`${styles['team-profile-card']}`}>
							<img src={pic4} alt=''/>
							<p _ngcontent-ng-c1728332637="" className={`${styles['name']}`}>   Jordan   </p>
							<p _ngcontent-ng-c1728332637="" className={`${styles['designation']}`}>Team (Poultry Expert)</p>
						</div>
					</div>
				</div>
				<Zoom>
					<div className={`${styles['blue-ball']}`}>
						<img src={blueBall} alt="" />
					</div>
				</Zoom>
				<Zoom>
					<div className={`${styles['purple-ball']}`}>
						<img src={purpleBall} alt="" />
					</div>
				</Zoom>
			</section>
		</>
	);
}

export default Team;
