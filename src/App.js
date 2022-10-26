import Home from './components/Home';
import GameContainer from './components/GameContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<GameContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
