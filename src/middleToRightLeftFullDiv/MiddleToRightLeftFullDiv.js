import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const MiddleToRightLeftFullDiv = ({color}) => {
	const frame = useCurrentFrame(); // 10
	const opacity = interpolate(frame, [60, 100], [0, 2]);
	return (
		<>
			<AbsoluteFill
				style={{
					justifyContent: 'start',
					alignItems: 'start',
				}}
			>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '100%',
						width: '25%',
						transform: `scale(${opacity})`,
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill style={{justifyContent: 'start', alignItems: 'end'}}>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '100%',
						width: '25%',
						transform: `scale(${opacity})`,
					}}
				/>
			</AbsoluteFill>
		</>
	);
};
