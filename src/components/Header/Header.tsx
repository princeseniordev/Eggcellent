import { FC } from 'react';
import styles from './styles.module.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/images/logo2.png';
import metamask from './../../assets/images/logos_metamask-icon.svg';
import paper from './../../assets/images/paper-logo-icon.svg';

interface ComProps {
	children?: any;
};

const Header: FC<ComProps> = ({
	children = ""
}) => {
	return (
		<div className={`${styles['kut-header']}`}>
			<Navbar collapseOnSelect expand="lg" bg="right" variant="right">
				<Container>
					<Navbar.Brand href="#home"><img className={`${styles['logo']}`} src={logo} alt=""/></Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" /> 
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Nav.Link href="#home" className={`${styles['nav-str']}`}>Home</Nav.Link>
							<Nav.Link href="#documentation" className={`${styles['nav-str']}`}>Documentation</Nav.Link>
							<Nav.Link href="#roadmap" className={`${styles['nav-str']}`}>Roadmap</Nav.Link>
							<Nav.Link href="#team" className={`${styles['nav-str']}`}>Team</Nav.Link>
							<Nav.Link href="#contact" className={`${styles['nav-str']}`}>Contact</Nav.Link>
							<Nav.Link href="#deets" className={`${styles['btn-nav']}`}>
								<button className={`${styles['btn-metamask']}`}>
									<img src={metamask} alt="" className={`${styles['nav-img']}`}/>
									Mint
								</button>
							</Nav.Link>
							<Nav.Link href="#deets" className={`${styles['btn-nav']}`}>
								<button className={`${styles['btn-paperWallet']}`}>
									<img src={paper} alt=""  className={`${styles['nav-img']}`}/>
									Mint
								</button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
};

export default Header;
