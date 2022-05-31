import React from 'react';
import {Video} from 'remotion';

export const VideoWords = ({gif}) => {
	return (
		<>
			<Video src={gif} />
		</>
	);
};
