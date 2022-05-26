import {Img} from 'remotion';
import React from 'react';
import Background from '../assets/background.jpg';
import Logo from './Logo';

export const ZoomLogo = () => {
	return (
		<div>
			<div>
				<Img
					style={{
						filter: 'grayscale(100%)',
						opacity: '1',
						position: 'absolute',
					}}
					src={Background}
				/>
			</div>
			<div>
				<Logo />
			</div>
		</div>
	);
};
