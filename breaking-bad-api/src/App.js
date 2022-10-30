import { React, useEffect, useState } from "react";
import Characters from "./components/Characters";
// import Character from "./components/Character";
// import Modal from "./components/Modal";

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
      <Characters chars={chars} />
    </div>
  );
}
