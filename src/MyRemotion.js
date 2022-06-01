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
import Gif2 from './assets/vid_0.mp4';
import Gif3 from './assets/football.mp4';
import Gif5 from './assets/vid_5.mp4';
import {SlideLeftText} from './slideLeftText/SlideLeftText';
import {BorderGif} from './borderGif/BorderGif';
import Gif6 from './assets/coach_video.mp4';
import Video1 from './assets/vid_8.mp4';
import Video2 from './assets/vid_6.mp4';
import Video3 from './assets/vid_7.mp4';
import {AudioFile} from './audioFile/AudioFile';
import BackgroundMusic from './assets/backaudi.mp3';
export const MyRemotion = () => {
	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<Sequence from={0} durationInFrames={2000}>
				<AudioFile audio={BackgroundMusic} />
			</Sequence>
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
			<Sequence from={120} durationInFrames={92}>
				<VideoWords gif={Video1} />
			</Sequence>
			<Sequence from={122} durationInFrames={78}>
				<TopToMiddleLogo />
			</Sequence>
			<Sequence from={135} durationInFrames={65}>
				<LineDiv color="#4c9419" marginTop="20.5%" width="1300" />
			</Sequence>
			<Sequence from={140} durationInFrames={60}>
				<LineFont
					titleColor="white"
					titleText="WELLTECH"
					bottom={300}
					size="60px"
				/>
			</Sequence>
			<Sequence from={150} durationInFrames={50}>
				<LineFont
					titleColor="white"
					titleText="HEY GOOD"
					bottom={230}
					size="50px"
				/>
			</Sequence>
			<Sequence from={160} durationInFrames={40}>
				<LineFont
					titleColor="white"
					titleText="18 MAY 2022"
					bottom={160}
					size="45px"
				/>
			</Sequence>
			<Sequence from={194} durationInFrames={11}>
				<MiddleToOpenDiv color="#4c9419" />
			</Sequence>
			<Sequence from={205} durationInFrames={130}>
				<OpenDivGif1 filter="grayscale(100%)" video={Gif3} />
			</Sequence>
			<Sequence from={205} durationInFrames={9}>
				<MiddleToTopTwoOpenDiv color="#4c9419" />
			</Sequence>

			<Sequence from={206} durationInFrames={129}>
				<OpenDivName
					titleColor="white"
					titleText="PROUDLY RECOGNIZED BY:"
					bottom={500}
					size="60px"
					weight="bold"
				/>
			</Sequence>
			<Sequence from={230} durationInFrames={105}>
				<OpenDivName
					titleColor="white"
					titleText="TYSON GAY"
					bottom={340}
					size="85px"
					weight="bolder"
				/>
			</Sequence>
			<Sequence from={240} durationInFrames={95}>
				<OpenDivName
					titleColor="white"
					titleText="AND BSN SPORTS IN COLLABORATION WITH"
					bottom={290}
					size="30px"
					weight="bold"
				/>
			</Sequence>
			<Sequence from={260} durationInFrames={75}>
				<OpenDivName
					titleColor="white"
					titleText="NIKE FOR GONG ABOVE AND BEYOND."
					bottom={250}
					size="30px"
					weight="bold"
				/>
			</Sequence>
			<Sequence from={337} durationInFrames={40}>
				<MiddleToRightLeftFullDiv color="#004766" />
			</Sequence>
			<Sequence from={383} durationInFrames={138}>
				<OpenDivGif1 filter="grayscale(100%) blur(15px)" video={Gif2} />
			</Sequence>
			<Sequence from={385} durationInFrames={135}>
				<SlideUpText size="30px" text="DEEPIKA" top="25%" />
			</Sequence>
			<Sequence from={390} durationInFrames={131}>
				<FadeInImage img={Deepika} marginTop="5.5%" maxWidth="45%" />
			</Sequence>
			<Sequence from={394} durationInFrames={126}>
				<LineDiv
					color="#004766"
					marginLeft="25%"
					marginTop="35%"
					width="1500"
				/>
			</Sequence>
			<Sequence from={395} durationInFrames={125}>
				<SlideUpText size="30px" text="SRINIVASAN" top="35%" />
			</Sequence>
			<Sequence from={400} durationInFrames={120}>
				<FadeInImage
					img={StageClip}
					marginTop="5.5%"
					maxWidth="10%"
					marginLeft="70%"
				/>
			</Sequence>
			<Sequence from={410} durationInFrames={110}>
				<DoubleLogo marginTop="40.5%" maxWidth="8%" marginLeft="63%" />
			</Sequence>
			<Sequence from={440} durationInFrames={80}>
				<LineFont
					titleColor="white"
					titleText="1st lane"
					bottom={320}
					size="30px"
					marginLeft="25%"
				/>
			</Sequence>
			<Sequence from={450} durationInFrames={70}>
				<LineFont
					titleColor="white"
					titleText="05"
					bottom={260}
					size="30px"
					marginLeft="25%"
				/>
			</Sequence>
			<Sequence from={513} durationInFrames={11}>
				<MiddleToOpenDiv color="#4c9419" />
			</Sequence>
			<Sequence from={524} durationInFrames={9}>
				<MiddleToTopTwoOpenDiv color="#4c9419" />
			</Sequence>
			<Sequence from={535} durationInFrames={140}>
				<VideoWords gif={Gif3} />
			</Sequence>
			<Sequence from={673} durationInFrames={155}>
				<VideoWords gif={Gif5} />
			</Sequence>
			<Sequence from={680} durationInFrames={150}>
				<SlideLeftText
					text1="CONGRATULATIONS"
					text2="A PROUD MESSAGE FROM"
					text3="TYSON GAY"
					color="white"
					fontSize1="50px"
					fontSize2="30px"
					fontSize3="50px"
				/>
			</Sequence>
			<Sequence from={715} durationInFrames={115}>
				<BorderGif video={Gif6} />
			</Sequence>
			<Sequence from={730} durationInFrames={100}>
				<LineFont
					titleColor="white"
					titleText="CONGRATULATION DEEPIKA"
					bottom={320}
					size="25px"
					fontWeight="normal"
					marginLeft="-28%"
				/>
			</Sequence>
			<Sequence from={825} durationInFrames={100}>
				<MiddleToTopTwoOpenDiv color="black" />
			</Sequence>
			<Sequence from={835} durationInFrames={100}>
				<VideoWords gif={Video2} />
			</Sequence>
			<Sequence from={935} durationInFrames={195}>
				<VideoWords gif={Gif3} />
			</Sequence>
			<Sequence from={940} durationInFrames={190}>
				<TopToMiddleLogo />
			</Sequence>

			<Sequence from={960} durationInFrames={170}>
				<LineFont
					titleColor="white"
					titleText="DEEPIKA SRINIVASAN"
					bottom={380}
					size="50px"
				/>
			</Sequence>
			<Sequence from={970} durationInFrames={160}>
				<LineFont
					titleColor="white"
					titleText="WELLTECH"
					bottom={330}
					size="40px"
					fontWeight="normal"
				/>
			</Sequence>
			<Sequence from={980} durationInFrames={30}>
				<LineFont
					titleColor="white"
					titleText="TEAMWORK."
					bottom={80}
					size="70px"
				/>
			</Sequence>
			<Sequence from={1010} durationInFrames={30}>
				<LineFont
					titleColor="white"
					titleText="RESPECT."
					bottom={80}
					size="70px"
				/>
			</Sequence>
			<Sequence from={1040} durationInFrames={30}>
				<LineFont
					titleColor="white"
					titleText="ENJOYMENT."
					bottom={80}
					size="70px"
				/>
			</Sequence>
			<Sequence from={1070} durationInFrames={30}>
				<LineFont
					titleColor="white"
					titleText="DISCIPLINE."
					bottom={80}
					size="70px"
				/>
			</Sequence>
			<Sequence from={1100} durationInFrames={30}>
				<LineFont
					titleColor="white"
					titleText="SPORTSMANSHIP."
					bottom={80}
					size="70px"
				/>
			</Sequence>
			<Sequence from={1130} durationInFrames={95}>
				<VideoWords gif={Video3} />
			</Sequence>
			<Sequence from={1130} durationInFrames={9}>
				<MiddleToTopTwoOpenDiv color="#4c9419" />
			</Sequence>
		</div>
	);
};
