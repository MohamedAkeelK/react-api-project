import { React, useEffect, useState } from "react";
// import axios from "axios";
import Character from "./components/Character";

export default function App() {
  const [chars, setChars] = useState(null);

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
    <div>
      <Character characters={chars} />
      {/* {chars.map((char, i) => {
        console.log(char.img);
        return (
          <img
            src={char.img}
            width="200px"
            height="300px"
            key={i}
            alt={char.name}
          />
        );
      })} */}
    </div>
  );
}
