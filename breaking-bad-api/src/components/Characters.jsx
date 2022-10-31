import { React, useState } from "react";
import Character from "./Character";
import Modal from "./Modal";


export default function Characters(props) {
  
  const [open, setOpen] = useState(false);
  const [clickedImg, setClickedImg] = useState("");
  const [charName, setCharName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nickName, setNickName] = useState("");
  const [portrayed, setPortrayed] = useState("");

  return (
    <div className="char-section" >
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
              setCharName={setCharName}
              setBirthday={() => setBirthday(char.birthday)}
              setNickName={()=> setNickName(char.nickname)}
              setPortrayed={()=> setPortrayed(char.portrayed)}
            />
          </div>
        );
      })}
      {open && <Modal setOpen={setOpen} img={clickedImg} charName={charName} birthday={birthday} nickName={nickName} portrayed={portrayed} />}
    </div>
  );
}
