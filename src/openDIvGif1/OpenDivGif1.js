/* eslint-disable @remotion/warn-native-media-tag */
import React from 'react';

export const OpenDivGif1 = ({video, filter}) => {
	return (
		<>
			<video
				autoPlay
				style={{
					filter,
				}}
				src={video}
			/>
		</>
	);
};
