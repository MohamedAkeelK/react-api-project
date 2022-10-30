import { React } from "react";

export default function Modal(props) {
  console.log("hereddd ", props);
  return (
    <div className="modal">
      <button
        className="close-modal"
        onClick={() => {
          props.setOpen(false);
        }}
      >
        CLOSEEEEE
      </button>
      <section className="modal-content">
        <h1>{props.charName}</h1>
        <img src={props.img} width="200px" />
      </section>
    </div>
  );
}
