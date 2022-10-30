import { React, useState } from "react";
import Character from "./Character";
import Modal from "./Modal";

export default function Characters(props) {
  const [open, setOpen] = useState(false);
  const [clickedImg, setClickedImg] = useState("");
  const [charName, setCharName] = useState("")

  return (
    <div className="char-section">
      {props.chars.map((char, i) => {
        return (
          <div>
            <Character
              img={char.img}
              name={char.name}
              key={i}
              open={open}
              setOpen={setOpen}
              setClickedImg={setClickedImg}
              setCharName={setCharName }
            />
          </div>
        );
      })}
      {open && <Modal setOpen={setOpen} img={clickedImg} charName={charName } />}
    </div>
  );
}
