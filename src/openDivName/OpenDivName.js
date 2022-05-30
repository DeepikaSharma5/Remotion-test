import './OpenDivName.styles.css';
import {AbsoluteFill} from 'remotion';

export const OpenDivName = ({titleText, titleColor, bottom, size, weight}) => {
	return (
		<AbsoluteFill
			className="typewriter"
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				fontWeight: weight,
			}}
		>
			<h1
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					fontWeight: weight,
					fontSize: size,
					textAlign: 'center',
					position: 'absolute',
					bottom,
					width: '100%',
					color: titleColor,
				}}
			>
				{titleText}
			</h1>
		</AbsoluteFill>
	);
};
