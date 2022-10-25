import '../Styles/Home.css';
import Card from './Card';
import { levels } from '../assets/Levels';
import { useEffect, useState } from 'react';

const Home = () => {
  const [gameCards, setGameCards] = useState([]);

  useEffect(() => {
    setGameCards(
      levels.map((x) => (
        <Card img={x.src} title={x.title} chars={x.chars} key={x.title} />
      ))
    );
  }, []);

  return (
    <div className="home-screen">
      <div className="card-game-container">
        {gameCards}
        <div className="button-container"></div>
      </div>
      <div className="leaderboard-container">
        <button className="to-leaderboard" type="button">
          Leaderboard
        </button>
      </div>
    </div>
  );
};

export default Home;
