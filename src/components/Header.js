import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stopwatch from '../assets/Stopwatch';
import '../Styles/Header.css';

const Header = ({ inGame, chars }) => {
  const [char, setChar] = useState([]);
  console.log(chars);

  useEffect(() => {
    if (chars === null || chars === undefined) {
      setChar(<></>);
    } else {
      setChar(
        chars.map((x) => (
          <img className="char-img-header" src={x.src} alt="" key={x.char} />
        ))
      );
    }
  }, [chars]);

  return (
    <nav className="header">
      <Link to="/">
        <div className="logo-container">
          <span className="blue">Where's</span>
          <span className="red">Waldo</span>
        </div>
      </Link>
      <div className="character-container">{char}</div>
      <div className="leaderboard-container">
        {inGame === false ? (
          <button className="to-leaderboard" type="button">
            Leaderboard
          </button>
        ) : (
          <Stopwatch running={true} />
        )}
      </div>
    </nav>
  );
};

export default Header;
