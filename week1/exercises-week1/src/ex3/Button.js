import React from "react";

function Button({ setCount }) {
  return (
    <button
      onClick={() => {
        setCount((count) => {
          return count + 1;
        });
      }}
    >
      Add 1!
    </button>
  );
}

export default Button;
