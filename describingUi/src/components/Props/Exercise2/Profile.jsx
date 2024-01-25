/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../utils";

function Profile({ person, imageSize = 70 }) {
  return (
    <>
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b>
          {person.profession}
        </li>
        <li>
          <b>Awards:{person.awards.length}</b>({person.awards})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </>
  );
}

export default Profile;
