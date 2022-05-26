import {AbsoluteFill, interpolate, Img, staticFile} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

const Logo = () => {
	const frame = useCurrentFrame(); // 10

	const translation = interpolate(frame, [0, 70], [0, 4], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<div
				style={{
					margin: 0,
					position: 'relative',
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
					alignItems: 'center',
					transform: `scale(${translation})  `,
				}}
			>
				<Img src={staticFile('stageclip.png')} />
			</div>
		</AbsoluteFill>
	);
};

export default Logo;
