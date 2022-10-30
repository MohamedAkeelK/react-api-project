import React from "react";

export default function Character(props) {
  return (
    <div className="char-block">
      <img src={props.img} width="250px" height="300px" />
      <h5>{props.name }</h5>

    </div>
  );
}
