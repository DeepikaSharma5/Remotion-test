/* eslint-disable @remotion/warn-native-media-tag */
import React from 'react';

export const VideoWords = ({gif}) => {
	return (
		<>
			<video autoPlay src={gif} />
		</>
	);
};
