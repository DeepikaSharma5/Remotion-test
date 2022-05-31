import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const LineDiv = ({color, marginTop, marginLeft, width, translate}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const config = useVideoConfig();

	const progress = spring({
		from: 163,
		to: width,
		frame,
		fps,
		config: {mass: 1, damping: 1800},
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
					viewBox={`0 0 ${config.width} ${config.height}`}
					width={`${width}px`}
					height="100px"
					transform={`translate(${translate}, 0)`}
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
