import React from "react";

export default function Character(props) {
  return (
    <div>
      <h1>{props.name }</h1>
      <img src={props.img} width="200px" height="300px" />
    </div>
  );
}
