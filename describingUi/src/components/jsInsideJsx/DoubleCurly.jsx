// eslint-disable-next-line no-unused-vars
import React from "react";
//In this example, the person JavaScript object contains a name string and a theme object:
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
    margin: "auto",
  },
};

function DoubleCurly() {
  return (
    <>
      <div
        //The component can use these values from person like so:
        style={person.theme}
      >
        <h2>Dr. Gregorio Y. Zara</h2>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}

export default DoubleCurly;

// Recap:
// Now you know almost everything about JSX:

// 1. JSX attributes inside quotes are passed as strings.
// 2. Curly braces let you bring JavaScript logic and variables into your markup.
// 3. They work inside the JSX tag content or immediately after = in attributes.
// 4. {{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.
