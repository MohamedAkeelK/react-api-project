import { React } from "react";

export default function Modal(props) {
  console.log("hereddd ", props.birthday);
  return (
    <div className="modal">
      <button
        className="close-modal"
        onClick={() => {
          props.setOpen(false);
        }}
      >
        CLOSE
      </button>
      <section className="modal-content">
        <h1>Name: {props.charName}</h1>
        <img src={props.img} width="200px" />
        <h2>Birthday: {props.birthday}</h2>
        <h2>Nickname: {props.nickName}</h2>
        <h2>Portrayed: {props.portrayed}</h2>
      </section>
    </div>
  );
}
