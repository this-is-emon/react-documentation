/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import { getImageUrl } from "./utils";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

function Lists() {
  //This method takes an array of items, passes them through a “test” (a function that returns true or false),
  //and returns a new array of only those items that passed the test (returned true).
  const chemists = people.filter((person) => person.profession === "chemist");
  console.log(chemists);

  //Mapping over chemists
  const listItems = chemists.map((chemist) => (
    <li>
      <img src={getImageUrl(chemist)} alt={chemist.name} />
      <p>
        <b>{chemist.name}:</b>
        {" " + chemist.profession + " "}
        known for {chemist.accomplishment}
      </p>
    </li>
  ));

  //returning the listItems from the component
  return <ul>{listItems}</ul>;
}

export default Lists;
