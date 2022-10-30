import { React, useEffect, useState } from "react";
// import axios from "axios";
// import Character from "./components/Character";

export default function App() {
  const [user, setUser] = useState(null);

  async function fetchUserData() {
    const response = await fetch(
      "https://www.breakingbadapi.com/api/characters"
    );
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!user) {
    return "loading...";
  } else {
    console.log("complete");
    // user.map((item) => {
    //   return <img src={item.img} />;
    // });
  }
  console.log(user.length);
  return (
    <div>
      {user.map((item, i) => {
        console.log(item.img);
        return (
          <img
            src={item.img}
            width="200px"
            height="300px"
            key={i}
            alt={item.name}
          />
        );
      })}
    </div>
  );
}
