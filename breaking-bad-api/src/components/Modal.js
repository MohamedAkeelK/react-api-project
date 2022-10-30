import { React } from "react";

export default function Modal(props) {
  return (
    <div className="modal">
      <button
        onClick={() => {
          props.setOpen(false);
        }}
      >
        CLOSEEEEE
      </button>
      <h1>Modal</h1>
      <img src={props.img}></img>
    </div>
  );
}
