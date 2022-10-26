// import { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
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
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleWindowClick = (e) => {
    console.log(e.target.dataset.type);
    if (e.target.dataset.type !== 'image') {
      setDivClass('position hidden');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

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
    setPosTop(e.clientY + scrollPosition);
    setPosLeft(e.clientX);

    setDivClass('position');
  };

  return (
    <>
      <Header inGame={true} chars={chars} />
      <div className="waldo-container">
        <img
          className="waldo-img"
          src={lvl.src}
          alt=""
          onClick={selectChar}
          data-type="image"
        />
        <div className={divClass} style={{ left: posLeft, top: posTop }}>
          <CharDropdown chars={lvl.chars} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default GameContainer;
