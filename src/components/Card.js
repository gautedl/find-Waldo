// import { useEffect, useState } from 'react';
import '../Styles/Card.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Card = (props) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [char, setChar] = useState();

  useEffect(() => {
    setImgLoaded(props.img !== '' ? true : false);
  }, [props.img, imgLoaded]);

  useEffect(() => {
    if (imgLoaded) {
      setChar(
        props.chars.map((x) => (
          <img className="char-img" src={x.src} alt="" key={x.char} />
        ))
      );
    }
  }, [imgLoaded, props.chars]);

  return (
    <>
      {imgLoaded && (
        <Link to={`game/${props.title}`}>
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
      )}
    </>
  );
};

export default Card;
