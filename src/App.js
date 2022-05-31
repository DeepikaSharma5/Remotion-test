import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {RemotionPlayer} from './RemotionPlayer';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route element={<RemotionPlayer />} path="/" />
			</Routes>
		</Router>
	);
};

export default App;
