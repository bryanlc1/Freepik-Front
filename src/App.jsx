import {PlayerProvider} from './context/PlayerContext'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PlayerProvider>
      <Home/>
    </PlayerProvider>
  );
}

export default App;
