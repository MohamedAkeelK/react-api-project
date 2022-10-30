import React from "react";
// import Modal from "./Modal";

export default function Character(props) {

  
  // function handleClick(e) {
    // console.log(e.target.parentElement);
    // return(<Modal />)
  // }
  // onClick={showModal}

  return (
    <div className="char-block">
      <img src={props.img} width="250px" height="300px"/>
      <h5>{props.name}</h5>
      <button onClick={()=> props.setOpen(true)}>See More</button>
      {/* {<Modal /> && props.open} */}
    </div>
  );
}
