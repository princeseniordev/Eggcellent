import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed'

import purpleBall from '../../assets/images/purple-ball.png';
import orangeBall from '../../assets/images/orange-ball.png';
import aquaBall from '../../assets/images/aqua-ball.png';
import pinkBall from '../../assets/images/pink-ball.png';
import chick1 from '../../assets/images/chick1.svg';
import chick2 from '../../assets/images/chick2.svg';
import chick3 from '../../assets/images/chick3.svg';
import chick4 from '../../assets/images/chick4.svg';
import chick5 from '../../assets/images/chick5.svg';

import styles from './styles.module.scss';

const Documentation: FC = () => {
	return (
		<>
			<section id="documentation" className={`${styles['about-project-section']}`}>
				<div className={`${styles['outer-div']}`}>
					<div className={`${styles['content']}`}>
						<LightSpeed>
							<h1 className={`${styles['what-title']}`}>
								What is
							</h1>
						</LightSpeed>
						<p className={`${styles['yellow-color']} ${styles['small-title']}`}>
							EGGCELLENT
							<span className={`${styles['rotating-text']}`}>
								<span className={`${styles['text']} ${styles['text-1']}`}> NFT </span>
								<span aria-hidden="true" className={`${styles['text']} ${styles['text-2']}`}> NFT </span>
								<span aria-hidden="true" className={`${styles['text']} ${styles['text-3']}`}> NFT </span>
								<span aria-hidden="true" className={`${styles['text']} ${styles['text-5']}`}> NFT </span>
							</span>
							CLUB?
						</p>
						<p className={`${styles['small-text-normal-poppins']} ${styles['white-color']}`}>
							Eggcellent NFT Club is a new project by Minetopia NFT Mining Club, located in Sabah, Malaysia. It aims to meet the increasing demand for quality and nutrient-rich chicken eggs by offering locally-produced premium eggs. 
						</p>
						<p className={`${styles['small-text-normal-poppins']} ${styles['white-color']}`}>
							The farm will have a modern and automated 1-acre facility with high-quality feed production, state-of-the-art chicken houses, and experts to ensure ethical and sustainable farming practices. The initial production will begin with 10,000 chickens in multiple batches, ensuring high egg production at 16-18 weeks of age, with an anticipated production of 2.925 million eggs for the first year.  
						</p>
						<p className={`${styles['small-text-normal-poppins']} ${styles['white-color']}`}>
							The entire farm will be fitted with security cameras and alarms, visible 24/7 to each NFT holder. Eggcellent NFT Club is committed to transparency, growth, and animal welfare, and NFT holders can join the exciting journey and start earning monthly profits.	
						</p>
					</div>
				</div>
				<div className={`${styles['purple-ball']} ${styles['animation-1']} ${styles['ball-animation']}`}>
					<img src={purpleBall} alt="" />
				</div>
				<div className={`${styles['orange-ball']} ${styles['animation-3']} ${styles['ball-animation']}`}>
					<img src={orangeBall} alt="" />
				</div>
				<div className={`${styles['chick1']} ${styles['animation-2']} ${styles['ball-animation']}`}>
					<img src={chick1} alt="" />
				</div>
				<Fade bottom>
					<div className={`${styles['chick2']}`}>
						<img src={chick2} alt="" />
					</div>
				</Fade>
				<Fade bottom>
					<div className={`${styles['chick3']}`}>
						<img src={chick3} alt="" />
					</div>
				</Fade>
			</section>
			<section className={`${styles['about-project-section-2']}`}>
				<div className={`${styles['outer-div']}`}>
					<div className={`${styles['content']}`}>
						<p className={`${styles['heading-text-bold-oxanium']} ${styles['yellow-color']}`}>  EGGCELLENT  </p>
						<div className={`${styles['good-marquee']}`}>
							<div className={`${styles['marquee-inner']}`}>
								<span>Eggcellent NFT Club is a new project by Minetopia NFT Mining Club, located in Sabah, Malaysia. It aims to meet the increasing demand for quality and nutrient-rich chicken eggs by offering locally-produced premium eggs.</span>
							</div>
						</div>
						{/* <p className={`${styles['heading']} ${styles['heading-text-bold-oxanium']} ${styles['purple-color']}`}> PHASE 2 </p> */}
						<p className={`${styles['small-text-normal-poppins']} ${styles['black-color']}`}>
							Eggcellent NFT Club is a new project by Minetopia NFT Mining Club, located in Sabah, Malaysia. It aims to meet the increasing demand for quality and nutrient-rich chicken eggs by offering locally-produced premium eggs. 
						</p>
						<p className={`${styles['small-text-normal-poppins']} ${styles['black-color']}`}>
							The farm will have a modern and automated 1-acre facility with high-quality feed production, state-of-the-art chicken houses, and experts to ensure ethical and sustainable farming practices. The initial production will begin with 10,000 chickens in multiple batches, ensuring high egg production at 16-18 weeks of age, with an anticipated production of 2.925 million eggs for the first year.  
						</p>
						<p className={`${styles['small-text-normal-poppins']} ${styles['black-color']}`}>
							The entire farm will be fitted with security cameras and alarms, visible 24/7 to each NFT holder. Eggcellent NFT Club is committed to transparency, growth, and animal welfare, and NFT holders can join the exciting journey and start earning monthly profits. 
						</p>
					</div>
				</div>
				<div className={`${styles['aqua-ball']} ${styles['animation-1']} ${styles['ball-animation']}`}>
					<img src={aquaBall} alt="" />
				</div>
				<div className={`${styles['pink-ball']} ${styles['animation-2']} ${styles['ball-animation']}`}>
					<img src={pinkBall} alt="" />
				</div>
				<div className={`${styles['chick4']}`}>
					<img src={chick4} alt="" />
				</div>
				<div className={`${styles['chick5']}`}>
					<img src={chick5} alt="" />
				</div>
			</section>
		</>
	);
}

export default Documentation;
