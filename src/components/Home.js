import '../Styles/Home.css';
import Card from './Card';
import { levels } from '../assets/Levels';
// import { useEffect, useState } from 'react';
import Header from './Header';
import { useEffect, useState } from 'react';

const Home = () => {
  const [gameCards, setGameCards] = useState();

  useEffect(() => {
    let interval;
    if (levels[0].src === '') {
      interval = setInterval(() => {
        setGameCards(
          levels.map((x) => (
            <Card img={x.src} title={x.title} chars={x.chars} key={x.title} />
          ))
        );
      }, 1000);
    } else if (levels[0].src !== '') {
      setGameCards(
        levels.map((x) => (
          <Card img={x.src} title={x.title} chars={x.chars} key={x.title} />
        ))
      );
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header inGame={false} chars={undefined} goHome={false} />
      <div className="home-screen">
        <div className="card-game-container">{gameCards}</div>
      </div>
    </>
  );
};

export default Home;
