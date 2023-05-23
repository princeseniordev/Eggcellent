import { FC } from 'react';
import styles from './styles.module.scss';

interface ComProps {
	children?: any;
};

const Footer: FC<ComProps> = ({
	children = ""
}) => {
	return (
		<div className={`${styles['kut-footer']}`}>
			 © Copyright 2023. All Rights Reserved
		</div>
	)
};

export default Footer;
