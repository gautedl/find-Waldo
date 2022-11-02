import Home from './components/Home';
import GameContainer from './components/GameContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-Waldo" element={<Home />} />
          <Route path="/game/:id" element={<GameContainer />} />
          <Route path="/find-Waldo/game/:id" element={<GameContainer />} />
          <Route path="/leaderboard/Level%201" element={<Leaderboard />} />
          <Route path="/leaderboard/:id" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
