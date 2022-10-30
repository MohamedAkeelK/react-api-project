import { React } from "react";

export default function Modal(props) {
  // if(props.)
  return (
    <div className="modal">
      <h1>Modal</h1>
      <button
        onClick={() => {
          props.setOpen(false);
        }}
      >
        CLOSEEEEE
      </button>
    </div>
  );
}
