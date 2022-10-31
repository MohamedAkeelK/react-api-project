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

  chars[13].img =
    "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-18051-breakingbad-624-1380209485.jpg";

  chars[16].img =
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/e/e2/Skinny_Pete.jpg";

  chars[38].img =
    "https://external-preview.redd.it/AGoRf6tSmKYoGxRFj6RevVEmLlp9Z5hdWOj9aZ3I7Qc.jpg?auto=webp&s=ea73d28e012c05fba8cce7ad1f2a0ec83ceb64bf";

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
