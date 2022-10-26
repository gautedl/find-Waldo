import { useEffect, useState } from 'react';
import '../Styles/Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const [char, setChar] = useState([]);

  useEffect(() => {
    setChar(
      props.chars.map((x) => (
        <img className="char-img" src={x.src} alt="" key={x.char} />
      ))
    );
  }, [props.chars]);

  return (
    <Link to={props.title}>
      <div className="card-container">
        <div className="img-lvl-container">
          <img className="lvl-img" src={props.img} alt="img" />
          <div className="title-container">
            <span className="lvl-title">{props.title}</span>
          </div>
        </div>
        <div className="characters">{char}</div>
      </div>
    </Link>
  );
};

export default Card;
