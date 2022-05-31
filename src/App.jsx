import {PlayerProvider} from './context/PlayerContext'
import Home from './pages/Home';
import Nav from './pages/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PlayerProvider>
      <Nav/>
      <Home/>
    </PlayerProvider>
  );
}

export default App;
