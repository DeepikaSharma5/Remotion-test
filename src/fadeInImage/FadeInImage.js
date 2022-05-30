import {AbsoluteFill, Img} from 'remotion';
import './FadeInImage.styles.css';
export const FadeInImage = ({maxWidth, marginTop, img, marginLeft}) => {
	return (
		<>
			<AbsoluteFill>
				<Img
					className="text-focus-in"
					style={{
						maxWidth,
						marginTop,
						marginLeft,
					}}
					src={img}
				/>
			</AbsoluteFill>
		</>
	);
};
