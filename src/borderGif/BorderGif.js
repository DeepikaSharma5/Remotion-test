/* eslint-disable @remotion/warn-native-media-tag */
import './BorderGif.styles.css';

export const BorderGif = ({video}) => {
	return (
		<>
			<video
				autoPlay
				className="slide-top"
				src={video}
				style={{
					maxHeight: '70%',
					marginLeft: '65%',
					marginTop: '15%',
					border: '5px solid white',
				}}
			/>
		</>
	);
};
