import {useEffect, useState} from 'react';
import Main from './components/Main'
import Naming from './components/Naming';
import Game from './components/Game'

function App() {
  const [frame, setFrame] = useState(null);

  useEffect(() => setFrame('main'), []);

  const namepet = () => setFrame('namepet')
  const game = () => setFrame('game');

  return (
    <div className="App">
      {frame === 'main' && <Main next={namepet} />}
      {frame === 'naming' && <Naming next={game}/>}
      {frame === 'game' && <Game />}
    </div>
  );
}

export default App;