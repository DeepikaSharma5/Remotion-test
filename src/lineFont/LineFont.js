import {spring, interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
export const LineFont = ({titleText, titleColor, bottom, size}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const progress = (i) =>
		spring({
			fps,
			frame: frame - 2 * i,
			config: {
				damping: 200,
				overshootClamping: true,
			},
		});
	return (
		<h1
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				fontSize: 70,
				textAlign: 'center',
				position: 'absolute',
				bottom,
				width: '100%',
			}}
		>
			{titleText.split('').map((t, i) => {
				return (
					<span
						key={t + i}
						style={{
							fontWeight: 'bold',
							color: titleColor,
							fontSize: Math.round(
								interpolate(progress(i), [0, size], [0, 80], {
									extrapolateRight: 'clamp',
								})
							),
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
