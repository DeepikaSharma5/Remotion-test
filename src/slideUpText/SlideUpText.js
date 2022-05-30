import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
import {spring} from 'remotion';
import {interpolate} from 'remotion';
import {AbsoluteFill} from 'remotion';
import './SlideUpText.styles.css';

export const SlideUpText = ({text, size, top}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		fps,
		frame,
		config: {
			mass: 4,
			damping: 200,
		},
	});

	return (
		<AbsoluteFill>
			<h1
				className="text-focus-in"
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					fontWeight: 'bold',
					display: 'flex',
					justifyContent: 'center',
					fontSize: size,
					marginLeft: '50%',
					maxWidth: '50%',
					color: 'white',
					transform: `translateY(${interpolate(progress, [0, 1], [60, 0])}px)`,
				}}
			>
				{text.split('').map((t, i) => {
					return (
						<h1
							key={t + i}
							style={{
								color: 'white',
								marginRight: '1%',
								marginTop: top,
							}}
						>
							{t}
						</h1>
					);
				})}
			</h1>
		</AbsoluteFill>
	);
};
