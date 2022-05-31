import {Img} from 'remotion';
import React from 'react';
import Background from '../assets/background.jpg';
import Logo from './Logo';

export const ZoomLogo = () => {
	return (
		<>
			<Img
				style={{
					filter: 'grayscale(100%)',
					opacity: '1',
					position: 'relative',
				}}
				src={Background}
			/>
			<>
				<Logo />
			</>
		</>
	);
};
