import React from "react";
import Modal from "./Modal";

export default function Character(props) {
  // console.log(props.img)
  return (
    <div className="char-block">
      <img src={props.img} width="250px" height="300px"/>
      <h5>{props.name}</h5>
      <button onClick={() => {
        props.setOpen(true)
        props.setClickedImg(props.img)
      }}>See More</button>
    </div>
  );
}
