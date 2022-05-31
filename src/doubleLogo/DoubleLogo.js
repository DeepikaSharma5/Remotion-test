import {AbsoluteFill, Img} from 'remotion';
import './DoubleLogo.styles.css';
import Nike from '../assets/img_3.png';
import BSN from '../assets/img_4.png';
export const DoubleLogo = ({maxWidth, marginTop, marginLeft}) => {
	return (
		<div>
			<AbsoluteFill>
				<Img
					className="text-focus-in"
					style={{
						maxWidth,
						marginTop,
						marginLeft,
						filter: 'brightness(0) invert(1)',
						opacity: '1',
					}}
					src={BSN}
				/>
			</AbsoluteFill>
			<AbsoluteFill>
				<Img
					className="text-focus-in"
					style={{
						maxWidth,
						marginTop,
						marginLeft: '78%',
						filter: 'brightness(0) invert(1)',
						opacity: '1',
					}}
					src={Nike}
				/>
			</AbsoluteFill>
		</div>
	);
};
