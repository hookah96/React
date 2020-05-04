import React, { useState, useEffect } from "react";
import Joke from "./Joke";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});

  const getJoke = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setJoke(data);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
};

export default RandomJoke;
