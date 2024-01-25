/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { getImageUrl } from "../utils2";

function Avatar({ person, size }) {
  let thumbNailImage = "s";
  if (size > 90) {
    thumbNailImage = "b";
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbNailImage)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function ImageSizeChange_02() {
  return (
    <>
      <Avatar
        size={40}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
      <br />
      <br />
      <Avatar
        size={100}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </>
  );
}

export default ImageSizeChange_02;
