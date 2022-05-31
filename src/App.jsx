import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { PlayerProvider } from './context/PlayerContext'
import Home from './pages/Home'
import NavComponent from './components/NavComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	return (
		<PlayerProvider>
			<NavComponent />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</PlayerProvider>
	)
}

export default App
