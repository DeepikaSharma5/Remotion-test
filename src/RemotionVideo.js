import {Composition} from 'remotion';
import {MyRemotion} from './MyRemotion';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="remotion-video"
				component={MyRemotion}
				durationInFrames={1120}
				fps={20}
				width={1920}
				height={1080}
			/>
		</>
	);
};
