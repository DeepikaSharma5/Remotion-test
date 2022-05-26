import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const LineDiv = ({color}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const config = useVideoConfig();

	const progress = spring({
		from: 163,
		to: 3600,
		frame,
		fps,
		config: {mass: 1, damping: 1800},
	});

	const opacity = interpolate(progress, [0, 0.01], [-200, -50], {
		extrapolateRight: 'clamp',
	});
	return (
		<>
			{/* <AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'start',
					marginTop: '15rem',
				}}
			>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '1%',
						width: '30%',
						transform: `translateY(${opacity}px, 0px)`,
					}}
				/>
			</AbsoluteFill> */}
			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					justifyItems: 'center',
					marginTop: '25.4%',
				}}
			>
				<svg
					viewBox={`0 0 ${config.width} ${config.height}`}
					width="3600px"
					height="200px"
					transform={`translate(${-240}, 0)`}
				>
					<g id="g10">
						<path
							transform="scale(1.0)"
							style={{
								fill: `${color}`,
								fillOpacity: 1,
								fillRule: 'nonzero',
								stroke: 'none',
							}}
							d={`m 464.206,251.535 h ${progress} v 64.653 H 464.206 Z`}
						/>
					</g>
				</svg>
			</AbsoluteFill>
		</>
	);
};
