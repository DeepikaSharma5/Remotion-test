import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TriangleTest} from './TriangleTest';

export const TriangleTestMain = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	return (
		<TriangleTest showMask={false} progress={entrance}>
			<AbsoluteFill style={{backgroundColor: 'black'}}>
				<h1>hello</h1>{' '}
			</AbsoluteFill>
		</TriangleTest>
	);
};
