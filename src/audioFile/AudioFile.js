import {Audio} from 'remotion';

export const AudioFile = ({audio, start, end}) => {
	return <Audio src={audio} startFrom={start} endAt={end} />;
};
