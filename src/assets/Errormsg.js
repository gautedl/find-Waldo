import './Errormsg.css';

const Errormsg = () => {
  return (
    <div className="error-content">
      <div className="msg">
        <span>Wrong guess</span>
        <span>Try again!</span>
      </div>
    </div>
  );
};

export default Errormsg;
