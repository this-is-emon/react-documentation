//Step 1: Pass props to the child component
/*
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
*/

//Step 2: Read props inside the child component
/*
function Avatar({ person, size }) {
  // person and size are available here
}
*/

// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "./utils";

// eslint-disable-next-line react-refresh/only-export-components
function Avatar(person, size) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function PassingProps_02() {
  return (
    <>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </>
  );
}

export default PassingProps_02;
