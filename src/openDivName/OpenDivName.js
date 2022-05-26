import {spring, interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
export const OpenDivName = ({titleText, titleColor, bottom, size, weight}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

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
				fontWeight: weight,
				fontSize: size,
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
							fontWeight: weight,
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
