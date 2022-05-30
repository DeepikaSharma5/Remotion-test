import {Img} from 'remotion';
import React from 'react';

export const OpenDivGif1 = ({video, filter}) => {
	return (
		<>
			<Img
				style={{
					filter,
				}}
				src={video}
			/>
		</>
	);
};
