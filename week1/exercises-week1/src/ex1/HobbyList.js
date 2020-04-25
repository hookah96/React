import React from "react";
import Hobbies from "./Hobbies";

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return hobbies.map((i) => <Hobbies hobbies={i} />);
}

export default HobbyList;
