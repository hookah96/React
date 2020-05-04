import React, { useState, useEffect } from "react";
import Button from "./Button.js";
import DogPhoto from "./DogPhoto.js";
import "./DogGallery.css";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const item = data.message;
    setDogPhotos((prevDogPhotos) => [...prevDogPhotos, item]);
  };

  useEffect(() => {
    getDogPhoto();
  }, []);

  return (
    <div>
      <Button getDogPhoto={getDogPhoto} />
      <ul className="imgList">
        {dogPhotos.map((img, index) => {
          return <li>{<DogPhoto key={index} dogPhoto={img} />}</li>;
        })}
      </ul>
    </div>
  );
};

export default DogGallery;
