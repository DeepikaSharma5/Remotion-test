import {interpolate, Img} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';
import Background from '../assets/img_5.jpg';

export const OpenDivGif1 = () => {
	const frame = useCurrentFrame(); // 10

	const translation = interpolate(frame, [0, 70], [0, 4], {
		extrapolateRight: 'clamp',
	});

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
		</div>
	);
};
