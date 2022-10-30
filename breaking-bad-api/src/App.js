import { React, useEffect, useState } from "react";
// import axios from "axios";
import Character from "./components/Character";
import Modal from "./components/Modal";

export default function App() {
  const [chars, setChars] = useState(null);
  const [open, setOpen] = useState(false);

  async function fetchCharsData() {
    const response = await fetch(
      "https://www.breakingbadapi.com/api/characters"
    );
    setChars(await response.json());
  }

  useEffect(() => {
    fetchCharsData();
  }, []);

  if (!chars) {
    return "loading...";
  } else {
    console.log("complete");
  }

  return (
    <div className="char-section">
      {chars.map((char, i) => {
        return (
          <div>
            <Character
              img={char.img}
              name={char.name}
              key={i}
              open={open}
              setOpen={setOpen}
            />
          </div>
        );
      })}
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
}
