/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import { people } from "./data";
import { getImageUrl } from "./utils";

function Lists() {
  //This method takes an array of items, passes them through a “test” (a function that returns true or false),
  //and returns a new array of only those items that passed the test (returned true).
  const chemists = people.filter((person) => person.profession === "chemist");

  //Mapping over chemists
  const listItems = chemists.map((chemist) => (
    //JSX elements directly inside a map() call always need keys!
    <li key={chemist.id}>
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
