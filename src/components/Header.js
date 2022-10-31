// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stopwatch from '../assets/Stopwatch';
import '../Styles/Header.css';

const Header = ({ inGame, chars, finished, goHome }) => {
  // const [char, setChar] = useState([]);
  const [runStopwatch, setRunStopwatch] = useState(inGame);

  const getChars = () => {
    if (chars === undefined) {
      return <></>;
    } else {
      return chars.map((x) =>
        x.found === false ? (
          <img className="char-img-header" src={x.src} alt="" key={x.char} />
        ) : (
          <img
            className="char-img-header found"
            src={x.src}
            alt=""
            key={x.char}
          />
        )
      );
    }
  };

  const goHomeBtn = (
    <Link to="/">
      <button className="to-leaderboard" type="button">
        Go Home
      </button>
    </Link>
  );

  const leaderboardBtn = (
    <Link to="/leaderboard/Level%201">
      <button className="to-leaderboard" type="button">
        Leaderboard
      </button>
    </Link>
  );

  const btn = goHome === true ? goHomeBtn : leaderboardBtn;

  const characters = getChars();

  useEffect(() => {
    if (finished === true) {
      setRunStopwatch(false);
    }
  }, [finished]);

  return (
    <nav className="header">
      <Link to="/">
        <div className="logo-container">
          <span className="blue">Where's</span>
          <span className="red">Waldo</span>
        </div>
      </Link>
      <div className="character-container">{characters}</div>

      {runStopwatch === false ? (
        btn
      ) : (
        <Stopwatch running={runStopwatch} finished={finished} />
      )}
    </nav>
  );
};

export default Header;
