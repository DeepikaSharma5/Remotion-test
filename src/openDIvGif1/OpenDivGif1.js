import React from 'react';
import {Video} from 'remotion';

export const OpenDivGif1 = ({video, filter}) => {
	return (
		<>
			<Video
				style={{
					filter,
				}}
				src={video}
			/>
		</>
	);
};
