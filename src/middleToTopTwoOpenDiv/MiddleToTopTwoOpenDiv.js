import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const MiddleToTopTwoOpenDiv = ({color}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		fps,
		frame,
		config: {
			mass: 50,
			damping: 600,
		},
	});

	const opacity = interpolate(progress, [0, 0.05], [-70, -650], {
		extrapolateRight: 'clamp',
	});
	const opacity1 = interpolate(progress, [0, 0.05], [70, 650], {
		extrapolateRight: 'clamp',
	});
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
						height: '60%',
						width: '100%',
						transform: `translateY(${opacity}px)`,
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill style={{justifyContent: 'end', alignItems: 'end'}}>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '60%',
						width: '100%',
						transform: `translateY(${opacity1}px)`,
					}}
				/>
			</AbsoluteFill>
		</>
	);
};
