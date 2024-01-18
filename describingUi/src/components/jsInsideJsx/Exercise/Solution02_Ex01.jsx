// You can also move this expression into a separate function like getImageUrl below:

// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "./utils";

const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

function Solution02_Ex01() {
  return (
    <div style={person.theme}>
      <h1>{person.name}`s Todos</h1>
      <img className="avatar" src={getImageUrl(person)} alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export default Solution02_Ex01;
