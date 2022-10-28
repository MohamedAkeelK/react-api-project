import { React, useEffect, useState } from "react";
import axios from "axios";

function App() {
  console.log("App component rendered");

  let [characters, setCharacters] = useState();
  let [characterImage, setCharacterImage] = useState();

  async function getCharacters() {
    console.log("... getting characters");
    axios
      .get("https://www.breakingbadapi.com/api/quotes")
      .then(async (response) => {
        setCharacters(response.data);
      });
  }

  async function getCharacterImage() {
    console.log("... getting images");
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then(async (response) => {
        setCharacterImage(response.data);
      });
  }

  useEffect(() => {
    console.log("use Effect Ran");
    getCharacters();
    getCharacterImage();
  }, []);

  console.log(characters);
  console.log(characterImage);

  let elem = () => {
    return characters !== undefined ? (
      <div>
        <h1>{characters[1].quote}</h1>
        <h1>{characters[1].author}</h1>
        {/* <h1>{characterImage[1].author}</h1> */}
      </div>
    ) : (
      ""
    );
  };
  return <div>{elem()}</div>;
}

export default App;
