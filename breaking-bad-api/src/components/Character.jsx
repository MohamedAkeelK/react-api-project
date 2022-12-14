import React from "react";

export default function Character(props) {
  return (
    <div className="char-block">
      <img src={props.img} width="250px" height="300px"/>
      <h5>{props.name}</h5>
      <button onClick={() => {
        props.setOpen(true)
        props.setClickedImg(props.img)
        props.setCharName(props.name)
        props.setBirthday(props.birthday)
        props.setNickName(props.nickName)
        props.setPortrayed(props.portrayed)


      }}>See More</button>
    </div>
  );
}
