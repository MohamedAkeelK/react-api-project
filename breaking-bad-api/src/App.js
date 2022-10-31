import { React, useEffect, useState, useRef } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  const [chars, setChars] = useState(null);
  const ref = useRef(null);

  const executeScroll = () =>
    ref.current.scrollIntoView({ behavior: "smooth" });

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

  console.log(chars);
  return (
    <div>
      <Header />
      <Hero executeScroll={executeScroll} />
      <div ref={ref}>
        <Characters chars={chars} />
      </div>
    </div>
  );
}
