import '../Styles/FinishedGamePop.css';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const checkIfRegistered = (arr, user) => {
  if (arr.some((obj) => obj.user === user)) return true;
  return false;
};

const FinishedGamePop = (props) => {
  const inputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const leaderboardRef = firestore.collection(`leaderboard-${props.lvl}`);
  const query = leaderboardRef.orderBy('time');
  const [inputClass, setInputClass] = useState('finished-name');

  const [scores] = useCollectionData(query, { idField: 'user' });

  const formatTime = (
    <>
      <span>{('0' + Math.floor((props.time / 1000) % 60)).slice(-2)}.</span>
      <span>{('0' + ((props.time / 10) % 100)).slice(-2)}</span>
    </>
  );
  const onSubmit = async (e) => {
    const curUser = inputRef.current.value;
    const input = document.getElementById('finished-name');

    if (curUser === '') {
      input.placeholder = 'Please enter a name';
      setInputClass('finished-name placeholder');
      return;
    } else if (checkIfRegistered(scores, curUser)) {
      input.value = '';
      input.placeholder = 'Name Already taken';
      setInputClass('finished-name placeholder');
      return;
    } else {
      await leaderboardRef.add({
        user: curUser,
        time: props.time,
      });
    }

    setIsVisible(false);
  };

  const onCancel = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="finished-popup">
          <span className="finished-title">Congrats!</span>
          <span className="finished-text">
            You beat {props.lvl} in{' '}
            <span className="time-text">{formatTime}</span>
            <> </>s!
          </span>
          <input
            ref={inputRef}
            className={inputClass}
            type="text"
            placeholder="Enter name here"
            id="finished-name"
          />
          <div className="finished-btns">
            <Link to={`/leaderboard/${props.lvl}`}>
              <button className="finish-btn" type="button" onClick={onSubmit}>
                Submit
              </button>
            </Link>
            <Link to="/">
              <button className="cancel-btn" type="button" onClick={onCancel}>
                Cancel
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FinishedGamePop;
