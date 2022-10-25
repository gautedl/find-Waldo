import { Link } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <div className="logo-container">
          <span className="blue">Where's</span>
          <span className="red">Waldo</span>
        </div>
      </Link>
      <div className="character-container">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="timer">00:00</div>
    </nav>
  );
};

export default Header;
