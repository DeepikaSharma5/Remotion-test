import './SlideLeftText.styles.css';
export const SlideLeftText = ({
	text1,
	text2,
	text3,
	color,
	fontSize1,
	fontSize2,
	fontSize3,
}) => {
	return (
		<div
			className="slide-left"
			style={{
				display: 'flex',
				marginTop: '5%',
				flexDirection: 'column',
				width: '50%',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<h1
				style={{
					color,
					fontSize: fontSize1,
					fontWeight: 'normal',
					textAlign: 'center',
					marginBottom: 0,
				}}
			>
				{text1}
			</h1>
			<h1
				style={{
					color,
					fontSize: fontSize2,
					fontWeight: 'normal',
					textAlign: 'center',
					marginBottom: 0,
				}}
			>
				{text2}
			</h1>
			<h1
				style={{
					color,
					fontSize: fontSize3,
					fontWeight: 'normal',
					textAlign: 'center',
					marginBottom: 0,
				}}
			>
				{text3}
			</h1>
		</div>
	);
};
