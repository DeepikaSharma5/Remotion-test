import {Img} from 'remotion';
import {useVideoConfig} from 'remotion';
import {spring} from 'remotion';
import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import MyLogo from '../assets/stageclip.png';

export const TopToMiddleLogo = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		fps,
		frame,
		config: {
			mass: 10,
			damping: 200,
		},
	});

	const opacity = interpolate(progress, [0, 0.5], [-1000, -250], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<div
				style={{
					display: 'flex',
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Img
					style={{
						display: 'block',
						transform: `translateY(${opacity}px)`,
						lineHeight: 1.1,
					}}
					src={MyLogo}
				/>
			</div>
		</>
	);
};
