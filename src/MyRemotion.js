import {Sequence} from 'remotion';
import {ZoomLogo} from './zoomLogo/ZoomLogo';
import {MiddleToOpenDiv} from './middleToTopOpenDiv/MiddleToTopOpenDiv';
import {VideoWords} from './videoWords/VideoWords';
import {RightLeftDiv} from './rightLeftDiv/RightLeftDiv';
import {CenterTopOpenDiv} from './centerTopOpenDiv/CenterTopOpenDiv';
import {TopToMiddleLogo} from './topToMiddleLogo/TopToMiddleLogo';
import {LineFont} from './lineFont/LineFont';
import {MiddleToTopTwoOpenDiv} from './middleToTopTwoOpenDiv/MiddleToTopTwoOpenDiv';
import {LineDiv} from './lineDiv/LineDiv';
import {OpenDivName} from './openDivName/OpenDivName';
import {OpenDivGif1} from './openDIvGif1/OpenDivGif1';
import {MiddleToRightLeftFullDiv} from './middleToRightLeftFullDiv/MiddleToRightLeftFullDiv';

export const MyRemotion = () => {
	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<Sequence from={0} durationInFrames={80}>
				<ZoomLogo />
			</Sequence>
			<Sequence from={65} durationInFrames={55}>
				<MiddleToOpenDiv color="#4c9419" />
			</Sequence>
			<Sequence from={74} durationInFrames={20}>
				<CenterTopOpenDiv color="#004766" />
			</Sequence>
			<Sequence from={94} durationInFrames={28}>
				<RightLeftDiv color="#004766" />
			</Sequence>
			<Sequence from={120} durationInFrames={75}>
				<VideoWords />
			</Sequence>
			<Sequence from={122} durationInFrames={78}>
				<TopToMiddleLogo />
			</Sequence>
			<Sequence from={135} durationInFrames={65}>
				<LineDiv color="#4c9419" />
			</Sequence>
			<Sequence from={140} durationInFrames={60}>
				<LineFont
					titleColor="white"
					titleText="WELLTECH"
					bottom={350}
					size={0.97}
				/>
			</Sequence>
			<Sequence from={150} durationInFrames={50}>
				<LineFont
					titleColor="white"
					titleText="HEY GOOD"
					bottom={250}
					size={1.2}
				/>
			</Sequence>
			<Sequence from={160} durationInFrames={40}>
				<LineFont
					titleColor="white"
					titleText="18 MAY 2022"
					bottom={150}
					size={1.5}
				/>
			</Sequence>
			<Sequence from={194} durationInFrames={11}>
				<MiddleToOpenDiv color="#4c9419" />
			</Sequence>
			<Sequence from={205} durationInFrames={9}>
				<MiddleToTopTwoOpenDiv color="#4c9419" />
			</Sequence>
			<Sequence from={210} durationInFrames={125}>
				<OpenDivGif1 />
			</Sequence>
			<Sequence from={206} durationInFrames={129}>
				<OpenDivName
					titleColor="white"
					titleText="PROUDLY RECOGNIZED BY:"
					bottom={850}
					size={0.97}
					weight="bold"
				/>
			</Sequence>
			<Sequence from={230} durationInFrames={105}>
				<OpenDivName
					titleColor="white"
					titleText="TYSON GAY"
					bottom={640}
					size={1.0}
					weight="bolder"
				/>
			</Sequence>
			<Sequence from={240} durationInFrames={95}>
				<OpenDivName
					titleColor="white"
					titleText="AND BSN SPORTS IN COLLABORATION WITH"
					bottom={540}
					size={1.5}
					weight="bold"
				/>
			</Sequence>
			<Sequence from={260} durationInFrames={85}>
				<OpenDivName
					titleColor="white"
					titleText="NIKE FOR GONG ABOVE AND BEYOND."
					bottom={470}
					size={1.5}
					weight="bold"
				/>
			</Sequence>
			<Sequence from={337} durationInFrames={40}>
				<MiddleToRightLeftFullDiv color="#004766" />
			</Sequence>
		</div>
	);
};
