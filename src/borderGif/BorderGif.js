import {Video} from 'remotion';
import './BorderGif.styles.css';

export const BorderGif = ({video}) => {
	return (
		<>
			<Video
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
