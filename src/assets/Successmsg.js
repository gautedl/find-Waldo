import './Successmsg.css';

const Successmsg = (props) => {
  return (
    <div className="success-content">
      <div className="msg">
        <span>Congrats!</span>
        <span>{props.char} found</span>
      </div>
    </div>
  );
};

export default Successmsg;
