import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const MiddleToOpenDiv = ({color}) => {
	const frame = useCurrentFrame(); // 10
	const opacity = interpolate(frame, [0, 8], [0.5, 100]);
	return (
		<>
			<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '1%',
						width: '200%',

						transform: `scale(${opacity})`,
					}}
				/>
			</AbsoluteFill>
		</>
	);
};
