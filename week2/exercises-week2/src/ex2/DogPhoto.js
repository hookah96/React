import React from "react";

const DogPhoto = (props) => {
  return (
    <div>
      <img src={props.dogPhoto} alt="dog" />
    </div>
  );
};

export default DogPhoto;
