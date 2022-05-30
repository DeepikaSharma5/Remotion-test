import {Img} from 'remotion';
import React from 'react';
import Background from '../assets/img_5.jpg';

export const OpenDivGif1 = () => {
	return (
		<>
			<Img
				style={{
					filter: 'grayscale(100%)',
				}}
				src={Background}
			/>
		</>
	);
};
