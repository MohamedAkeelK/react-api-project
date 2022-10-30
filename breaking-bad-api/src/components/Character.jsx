import React from "react";

export default function Character(props) {
  function handleClick(e) {
    console.log("clicked: ", e.target.src)

  }
  return (
    <div>
      {props.characters.map((char, i) => {
        return (
          <img
            src={char.img}
            width="200px"
            height="300px"
            key={i}
            alt={char.name}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
}
