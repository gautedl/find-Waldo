import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { levels } from '../assets/Levels';
import '../Styles/GameContainer.css';
import Header from './Header';

const GameContainer = () => {
  const { id } = useParams();
  const [lvl, setLvl] = useState({});

  useEffect(() => {
    for (const element of levels) {
      if (id === element.title) {
        setLvl(element);
        return;
      }
    }
  }, [id]);

  return (
    <>
      <Header inGame={true} chars={lvl.chars} />
      {console.log(lvl)}
      <div className="waldo-container">
        <img className="waldo-img" src={lvl.src} alt="" />
      </div>
    </>
  );
};

export default GameContainer;
