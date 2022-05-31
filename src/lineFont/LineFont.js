import './LineFont.styles.css';
import {AbsoluteFill} from 'remotion';

export const LineFont = ({
	titleText,
	titleColor,
	bottom,
	size,
	marginLeft,
	fontWeight,
}) => {
	return (
		<AbsoluteFill
			className="typewriter"
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				marginLeft,
			}}
		>
			<h1
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					fontWeight: fontWeight || 'bold',
					textAlign: 'center',
					position: 'absolute',
					bottom,
					fontSize: size,
					width: '100%',
					color: titleColor,
				}}
			>
				{titleText}
			</h1>
		</AbsoluteFill>
	);
};
