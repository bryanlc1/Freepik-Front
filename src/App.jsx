import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PlayerProvider } from './context/PlayerContext'
import Home from './pages/Home'
import ResultsPage from './pages/ResultsPage'
import Players from './pages/Players'
import NavComponent from './components/NavComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";


function App() {
	return (
		<PlayerProvider>
			<Router>
				<NavComponent />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="results" element={<ResultsPage />} />
					<Route path="players" element={<Players />} />
				</Routes>
			</Router>
		</PlayerProvider>
	)
}

export default App
