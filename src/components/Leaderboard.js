import { useParams } from 'react-router-dom';
import Header from './Header';
import { firestore } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import '../Styles/Leaderboard.css';
import { useEffect, useState } from 'react';
import LevelBtn from '../assets/LevelBtn';
import { levels } from '../assets/Levels';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  const { id } = useParams();
  const curLvl = id === undefined ? 'Level 1' : id;
  const data = firestore.collection(`leaderboard-${curLvl}`);
  const query = data.orderBy('time');
  const [scores] = useCollectionData(query, { idField: 'user' });
  const [leaderboard, setLeaderboard] = useState();
  const btnClass = 'single-level-btn';
  const curBtnClass = 'single-level-btn single-level-btn-active';

  const formatTime = (time) => {
    return (
      <>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </>
    );
  };

  const levelBtns = levels.map((x) =>
    x.title === curLvl ? (
      <LevelBtn key={x.title} class={curBtnClass} lvl={x.title} />
    ) : (
      <LevelBtn key={x.title} class={btnClass} lvl={x.title} />
    )
  );

  useEffect(() => {
    if (scores !== undefined) {
      try {
        setLeaderboard(
          scores.map((x) => (
            <tr key={x.user}>
              <td>{x.user}</td>
              <td>{formatTime(x.time)}</td>
            </tr>
          ))
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, [scores]);

  return (
    <>
      <Header inGame={false} chars={undefined} goHome={true} />
      <div className="leaderboard-container">
        <div className="level-btns">{levelBtns}</div>
        <div className="leaderboard-table-container">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th className="name-container table-header">Name</th>
                <th className="time-container table-header">Time (seconds)</th>
              </tr>
            </thead>
            <tbody className="leaderboard-body">{leaderboard}</tbody>
          </table>
        </div>
        <div className="footer-cont">
          <Link to={`/game/${curLvl}`}>
            <div className="play-level pulse-grow-on-hover">
              PLAY THIS LEVEL
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
