import { React, useEffect, useState } from "react";
// import axios from "axios";
import Characters from "./components/Characters";

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
      {chars.map((char, i) => {
        console.log(char.img);
        return <Characters img={char.img} name={char.name} key={i} />;
      })}
    </div>
  );
}
