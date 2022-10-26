// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stopwatch from '../assets/Stopwatch';
import '../Styles/Header.css';

const Header = ({ inGame, chars }) => {
  // const [char, setChar] = useState([]);

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

  const characters = getChars();

  // useEffect(() => {
  //   if (chars === undefined) {
  //     setChar(<></>);
  //   } else {
  //     setChar(

  //     );
  //   }
  // }, [chars]);

  return (
    <nav className="header">
      <Link to="/">
        <div className="logo-container">
          <span className="blue">Where's</span>
          <span className="red">Waldo</span>
        </div>
      </Link>
      <div className="character-container">{characters}</div>
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
