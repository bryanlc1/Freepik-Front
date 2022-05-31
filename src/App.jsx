import {PlayerProvider} from './context/PlayerContext'
import Home from './components/Home';

function App() {
  return (
    <PlayerProvider>
      <Home/>
    </PlayerProvider>
  );
}

export default App;
