import {Composition} from 'remotion';
import {MyRemotion} from './MyRemotion';
import {RightLeftDiv} from './rightLeftDiv/RightLeftDiv';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="remotion-video"
				component={MyRemotion}
				durationInFrames={350}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="side-div"
				component={RightLeftDiv}
				durationInFrames={350}
				fps={90}
				width={1920}
				height={1080}
			/>
		</>
	);
};
