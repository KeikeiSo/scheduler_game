import {useEffect, useState} from 'react';
import Main from './components/Main'
import Game from './components/Game'

function App() {
  const [frame, setFrame] = useState(null);

  useEffect(() => setFrame('main'), []);

  const game = () => setFrame('game');

  return (
    <div className="App">
      {frame === 'main' && <Main next={game} />}
      {frame === 'game' && <Game />}
    </div>
  );
}

export default App;