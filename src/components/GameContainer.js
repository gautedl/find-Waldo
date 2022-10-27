// import { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { levels } from '../assets/Levels';
import '../Styles/GameContainer.css';
import CharDropdown from './CharacterDropdown/CharDropdown';
import Header from './Header';
import { firestore } from '../firebase/config';

const boundaryCheck = (coord, ref) => {
  //Checks if gisen set of coordinates are whitin +- 0.3 of ref coord
  const lowerRange = ref - 0.3;
  const upperRange = ref - 0.3;

  if (coord > lowerRange && coord <= upperRange) {
    return true;
  } else {
    return false;
  }
};

const GameContainer = () => {
  const { id } = useParams();
  const [posLeft, setPosLeft] = useState();
  const [posTop, setPosTop] = useState();
  const [divClass, setDivClass] = useState('position hidden');

  const getDataFromFirestore = (level, character) => {
    firestore
      .collection(level)
      .doc(character)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();

        return data;
      });
  };
  // getDataFromFirestore(id);

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
    setPosLeft(
      Math.round(
        (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
      )
    );

    setPosTop(
      Math.round(
        (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
      )
    );

    console.log(
      'left ' +
        Math.round(
          (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
        ),
      'top ' +
        Math.round(
          (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
        )
    );

    setDivClass('position');
  };

  return (
    <>
      <Header inGame={true} chars={chars} />
      <div className="waldo-container">
        <div className="relative">
          <img
            className="waldo-img"
            src={lvl.src}
            alt=""
            onClick={selectChar}
            data-type="image"
          />
          <div
            className={divClass}
            style={{ left: posLeft + '%', top: posTop + '%' }}
          >
            <CharDropdown chars={lvl.chars} handleClick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameContainer;
