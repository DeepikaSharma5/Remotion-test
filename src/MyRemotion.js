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
import {FadeInImage} from './fadeInImage/FadeInImage';
import {SlideUpText} from './slideUpText/SlideUpText';
import Deepika from './assets/deepika.jpg';
import StageClip from './assets/stageclip.png';
import {DoubleLogo} from './doubleLogo/DoubleLogo';
import Gif1 from './assets/img_5.jpg';
import Gif2 from './assets/vid-0.gif';

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
				<LineDiv color="#4c9419" marginTop="25.4%" />
			</Sequence>
			<Sequence from={140} durationInFrames={60}>
				<LineFont
					titleColor="white"
					titleText="WELLTECH"
					bottom={320}
					size="90px"
				/>
			</Sequence>
			<Sequence from={150} durationInFrames={50}>
				<LineFont
					titleColor="white"
					titleText="HEY GOOD"
					bottom={230}
					size="80px"
				/>
			</Sequence>
			<Sequence from={160} durationInFrames={40}>
				<LineFont
					titleColor="white"
					titleText="18 MAY 2022"
					bottom={150}
					size="75px"
				/>
			</Sequence>
			<Sequence from={194} durationInFrames={11}>
				<MiddleToOpenDiv color="#4c9419" />
			</Sequence>
			<Sequence from={205} durationInFrames={9}>
				<MiddleToTopTwoOpenDiv color="#4c9419" />
			</Sequence>
			<Sequence from={210} durationInFrames={125}>
				<OpenDivGif1 filter="grayscale(100%)" video={Gif1} />
			</Sequence>
			<Sequence from={206} durationInFrames={129}>
				<OpenDivName
					titleColor="white"
					titleText="PROUDLY RECOGNIZED BY:"
					bottom={850}
					size="80px"
					weight="bold"
				/>
			</Sequence>
			<Sequence from={230} durationInFrames={105}>
				<OpenDivName
					titleColor="white"
					titleText="TYSON GAY"
					bottom={640}
					size="85px"
					weight="bolder"
				/>
			</Sequence>
			<Sequence from={240} durationInFrames={95}>
				<OpenDivName
					titleColor="white"
					titleText="AND BSN SPORTS IN COLLABORATION WITH"
					bottom={540}
					size="50px"
					weight="bold"
				/>
			</Sequence>
			<Sequence from={260} durationInFrames={75}>
				<OpenDivName
					titleColor="white"
					titleText="NIKE FOR GONG ABOVE AND BEYOND."
					bottom={470}
					size="50px"
					weight="bold"
				/>
			</Sequence>
			<Sequence from={337} durationInFrames={40}>
				<MiddleToRightLeftFullDiv color="#004766" />
			</Sequence>
			<Sequence from={383} durationInFrames={200}>
				<OpenDivGif1 filter="grayscale(100%) blur(15px)" video={Gif2} />
			</Sequence>
			<Sequence from={385} durationInFrames={200}>
				<SlideUpText size="40px" text="DEEPIKA" top="25%" />
			</Sequence>
			<Sequence from={390} durationInFrames={195}>
				<FadeInImage img={Deepika} marginTop="5.5%" maxWidth="45%" />
			</Sequence>
			<Sequence from={394} durationInFrames={191}>
				<LineDiv color="#004766" marginLeft="25%" marginTop="35%" />
			</Sequence>
			<Sequence from={395} durationInFrames={190}>
				<SlideUpText size="40px" text="SRINIVASAN" top="35%" />
			</Sequence>
			<Sequence from={400} durationInFrames={185}>
				<FadeInImage
					img={StageClip}
					marginTop="5.5%"
					maxWidth="10%"
					marginLeft="70%"
				/>
			</Sequence>
			<Sequence from={410} durationInFrames={174}>
				<DoubleLogo marginTop="40.5%" maxWidth="8%" marginLeft="63%" />
			</Sequence>
			<Sequence from={440} durationInFrames={145}>
				<LineFont
					titleColor="white"
					titleText="1st lane"
					bottom={480}
					size="50px"
					marginLeft="25%"
				/>
			</Sequence>
			<Sequence from={450} durationInFrames={135}>
				<LineFont
					titleColor="white"
					titleText="05"
					bottom={400}
					size="50px"
					marginLeft="25%"
				/>
			</Sequence>
		</div>
	);
};
