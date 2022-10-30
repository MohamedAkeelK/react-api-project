import {React, useState} from "react";
import Character from "./Character";
import Modal from "./Modal";


export default function Characters(props) {
  const [open, setOpen] = useState(false);

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
            />
            {open && (
              <Modal setOpen={setOpen} />
            )}
          </div>
        );
      })}
    </div>
  );
}
