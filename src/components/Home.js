import '../Styles/Home.css';
import Card from './Card';
import { levels } from '../assets/Levels';
// import { useEffect, useState } from 'react';
import Header from './Header';

const Home = () => {
  const gameCards = levels.map((x) => (
    <Card img={x.src} title={x.title} chars={x.chars} key={x.title} />
  ));

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
