// import { useEffect, useState } from 'react';
import '../../Styles/CharDropdown.css';

const CharField = (props) => {
  return (
    <>
      <div
        className="char-field"
        onClick={props.handleClick}
        data-type={props.data}
      >
        <img className="dropdown-img" src={props.src} alt={props.char} />
        <span className="dropdown-title">{props.title}</span>
      </div>
    </>
  );
};

const CharDropdown = (props) => {
  const getChars = () => {
    if (props.chars === undefined) {
      return <></>;
    } else {
      return props.chars.map((x) => (
        <CharField
          src={x.src}
          alt={x.char}
          key={x.char}
          title={x.char}
          data={x.char}
          handleClick={props.handleClick}
        />
      ));
    }
  };

  const characters = getChars();

  return <div className="dropdown-menu">{characters}</div>;
};

export default CharDropdown;
