// import { useState, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { levels } from '../assets/Levels';
import '../Styles/GameContainer.css';
import CharDropdown from './CharacterDropdown/CharDropdown';
import Header from './Header';

const GameContainer = () => {
  const { id } = useParams();
  const [posLeft, setPosLeft] = useState();
  const [posTop, setPosTop] = useState();
  const [divClass, setDivClass] = useState('position hidden');

  const getLvl = () => {
    for (const element of levels) {
      if (id === element.title) {
        return element;
      }
    }
  };

  const lvl = getLvl();
  const [chars, setChars] = useState(
    lvl.chars.map((obj) => ({ ...obj, found: false }))
  );

  const handleClick = (e) => {
    e.preventDefault();

    const newArr = chars.map((obj) => {
      if (obj.char === e.currentTarget.dataset.type) {
        return { ...obj, found: true };
      }

      return obj;
    });

    setChars(newArr);
  };

  const selectChar = (e) => {
    console.log(e.clientY);
    setPosTop(e.clientY);
    setPosLeft(e.clientX);

    if (divClass === 'position hidden') {
      setDivClass('position');
    } else {
      setDivClass('position hidden');
    }
  };

  return (
    <>
      <Header inGame={true} chars={chars} />
      <div className="waldo-container">
        <img className="waldo-img" src={lvl.src} alt="" onClick={selectChar} />
        <div className={divClass} style={{ left: posLeft, top: posTop }}>
          <CharDropdown chars={lvl.chars} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default GameContainer;
