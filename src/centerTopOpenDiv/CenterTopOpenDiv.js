import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const CenterTopOpenDiv = ({color}) => {
	const frame = useCurrentFrame(); // 10
	const opacity = interpolate(frame, [0, 8], [0, 80]);
	return (
		<>
			<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '0.6%',
						width: '0.2%',
						transform: `scale(${opacity})`,
					}}
				/>
			</AbsoluteFill>
		</>
	);
};
