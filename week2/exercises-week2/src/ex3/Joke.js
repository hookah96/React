import React from "react";
import RandomJoke from "./RandomJoke";

const Joke = (props) => {
  return (
    <div>
      <p>Setup: {props.setup}</p>
      <p>Punchline: {props.punchline}</p>
    </div>
  );
};

export default Joke;
