import { Link } from 'react-router-dom';

const LevelBtn = (props) => {
  const id = props.lvl.at(-1);

  return (
    <Link to={`/leaderboard/Level%20${id}`}>
      <div className={props.class}>{props.lvl}</div>
    </Link>
  );
};

export default LevelBtn;
