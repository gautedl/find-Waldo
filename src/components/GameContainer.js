// import { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { levels } from '../assets/Levels';
import '../Styles/GameContainer.css';
import CharDropdown from './CharacterDropdown/CharDropdown';
import Header from './Header';
import { firestore } from '../firebase/config';
import Errormsg from '../assets/Errormsg';
import Successmsg from '../assets/Successmsg';
import FinishedGamePop from './FinishedGamePop';
import { finishedTime } from '../assets/Stopwatch';

const boundaryCheck = (coord, pos) => {
  if (coord - pos >= -1 && coord - pos <= 1) return true;
  return false;
};

const isGameDone = (arr) => {
  return arr.every((obj) => obj.found === true);
};

const GameContainer = () => {
  const { id } = useParams();
  const [posLeft, setPosLeft] = useState();
  const [posTop, setPosTop] = useState();
  const [divClass, setDivClass] = useState('position hidden');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [foundChar, setFoundChar] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [endTime, setEndTime] = useState(0);

  const selectChar = (e) => {
    setError(false);
    setSuccess(false);
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

  const fetchData = async (level, char) => {
    const data = await firestore.collection(level).doc(char).get();

    return data.data();
  };

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

  const handleClick = async (e) => {
    e.preventDefault();
    const charName = e.currentTarget.dataset.type;

    try {
      const coords = await fetchData(id, charName);

      if (
        boundaryCheck(coords.pos[0], posLeft) &&
        boundaryCheck(coords.pos[1], posTop)
      ) {
        const newArr = chars.map((obj) => {
          if (obj.char === charName) {
            return { ...obj, found: true };
          }

          return obj;
        });
        if (isGameDone(newArr)) {
          console.log(finishedTime);
          setFinished(true);

          setTimeout(() => {
            setEndTime(finishedTime);
            setShowModal(true);
          }, 10);
        }

        setFoundChar(charName);
        setChars(newArr);

        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleWindowClick = (e) => {
    if (e.target.dataset.type !== 'image') {
      setDivClass('position hidden');
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <>
      <Header inGame={true} chars={chars} finished={finished} />

      {error && (
        <div className="feedback-message">
          <Errormsg />
        </div>
      )}
      {success && (
        <div className="feedback-message">
          <Successmsg char={foundChar} />
        </div>
      )}
      <div className="finished" style={{ left: '50%', top: '30%' }}>
        {showModal && <FinishedGamePop lvl={id} time={endTime} />}
      </div>
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
