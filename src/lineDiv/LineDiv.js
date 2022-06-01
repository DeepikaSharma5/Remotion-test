/* eslint-disable capitalized-comments */
import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const LineDiv = ({color, marginTop, marginLeft, width}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const config = useVideoConfig();

	const underscoreWidthRight = spring({
		from: 0,
		to: width,
		frame,
		fps,
		config: {mass: 10, damping: 500, stiffness: 300},
	});

	const underscoreWidthLeft = spring({
		from: 0,
		to: `-${width}`,
		frame,
		fps,
		config: {mass: 10, damping: 500, stiffness: 300},
	});

	return (
		<>
			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					justifyItems: 'center',
					marginTop,
					marginLeft,
				}}
			>
				<svg
					viewBox={`-400 70 ${config.width} ${config.height}`}
					width={width}
					height="200px"
					// transform={`translate(${translate}, 0)`}
				>
					<g id="g10">
						<path
							transform="scale(0.5)"
							style={{
								fill: `${color}`,
								fillRule: 'nonzero',
								stroke: 'none',
							}}
							d={`m 464.206,251.535 h ${underscoreWidthRight} v 64.653 H 464.206 Z`}
						/>
					</g>
				</svg>
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					justifyItems: 'center',
					marginTop,
					marginLeft,
				}}
			>
				<svg
					viewBox={`-400 70 ${config.width} ${config.height}`}
					width={width}
					height="200px"
					// transform={`translate(${translate}, 0)`}
				>
					<g id="g10">
						<path
							transform="scale(0.5)"
							style={{
								fill: `${color}`,
								fillRule: 'revert',
								stroke: 'none',
							}}
							d={`m 464.206,251.535 h ${underscoreWidthLeft} v 64.653 H 464.206 Z`}
						/>
					</g>
				</svg>
			</AbsoluteFill>
		</>
	);
};
