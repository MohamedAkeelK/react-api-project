import {React, useState} from "react";
import Character from "./Character";
import Modal from "./Modal";


export default function Characters(props) {
  const [open, setOpen] = useState(false);
  const [clickedImg, setClickedImg] = useState("")
console.log(clickedImg)
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
              setClickedImg={setClickedImg }
            />
          </div>
        );
      })}
            {open && (
              <Modal setOpen={setOpen} img={clickedImg } />
            )}
    </div>
  );
}
