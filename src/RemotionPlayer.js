import {Player} from '@remotion/player';
import {AbsoluteFill} from 'remotion';
import {MyRemotion} from './MyRemotion';

export const RemotionPlayer = () => {
	return (
		<AbsoluteFill style={{maxWidth: '90%', maxHeight: '90%', margin: 'auto'}}>
			<Player
				controls
				component={MyRemotion}
				compositionWidth={1280}
				compositionHeight={720}
				durationInFrames={1250}
				fps={30}
				style={{
					width: '100%',
				}}
			/>
		</AbsoluteFill>
	);
};
