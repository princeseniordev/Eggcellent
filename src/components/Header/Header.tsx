import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import cn from 'classnames';

import logo from './../../assets/images/logo.png';
import metamask from './../../assets/images/logos_metamask-icon.svg';
import paper from './../../assets/images/paper-logo-icon.svg';

const Header: FC = () => {

	const [scrollPosition, setScrollPosition] = useState(0);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
        const onSize = () => setWidth(window.innerWidth);;
        const onScroll = () => setScrollPosition(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.removeEventListener('resize', onSize);
        window.addEventListener('resize', onSize, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    });

	const [showNav, setShowNav] = useState(false);

	const navItems = [
		<a href="#home" onClick={() => setShowNav(false)}> Home </a>,
		<a href="#documentation" onClick={() => setShowNav(false)}> Documentation </a>,
		<a href="#roadmap" onClick={() => setShowNav(false)}> Roadmap </a>,
		<a href="#team" onClick={() => setShowNav(false)}> Team </a>,
		<a href="#contact" onClick={() => setShowNav(false)}> Contact </a>,
		<a href="#home" style={{ display: 'flex', alignItems: 'center' }}><i style={{ backgroundImage: `url(${metamask})`, width: '26px', height: '26px', marginRight: '7px' }}></i>Mint</a>,
		<a href="#home" style={{ display: 'flex', alignItems: 'center' }}><i style={{ backgroundImage: `url(${paper})`, width: '26px', height: '26px', marginRight: '7px' }}></i>Mint</a>
	];

	const close = [<span onClick={() => setShowNav(false)} style={{ cursor: 'pointer' }}>&times;</span>];
	
	return (
		<>
			{
				(scrollPosition > 400 && width >= 1024)
				? 
				<div className={`${styles['header']}`}>
					<ul>
						<li><img src={logo} alt="logo"/></li>
						<div>
							<li><a href="#home">Home</a></li>
							<li><a href="#documentation">Documentation</a></li>
							<li><a href="#roadmap">Roadmap</a></li>
							<li><a href="#team">Team</a></li>
							<li><a href="#contact">Contact</a></li>
							<li className={`${styles['btn-content']}`}><button className={`${styles['metamask']}`}><i></i>Mint</button></li>
							<li className={`${styles['btn-content']}`}><button className={`${styles['paper']}`}><i></i>Mint</button></li>
						</div>
					</ul>
				</div>
				:
				<div 
					className={cn([
						styles['kut-header'],
						scrollPosition > 400 ? styles['kut-header-white'] : '',
					])}
				>
					<img src={logo} alt="logo" />
					<div className={`${styles['openNav']}`}  onClick={() => setShowNav(true)}>
						<MenuIcon/>
					</div>
					<SideNav
						showNav={showNav}
						openFromRight={true}
						onHideNav={() => setShowNav(false)}
						style={{'zIndex': 5000}}
						title={close}
						titleStyle={{ backgroundColor: '#8459FF', 'lineHeight': 0, padding: '40px', 'textAlign': 'right'}}
						items={navItems}
						itemStyle={{ backgroundColor: '#8459FF' }}
						itemHoverStyle={{ backgroundColor: '#CDDC39' }}
					/>
				</div>
			}
		</>
	)
};

export default Header;