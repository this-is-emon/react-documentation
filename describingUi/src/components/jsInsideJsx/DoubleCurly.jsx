//The next time you see {{ and }} in JSX, know that it’s nothing more than an
//object inside the JSX curlies!
// eslint-disable-next-line no-unused-vars
import React from "react";

function DoubleCurly() {
  return (
    <>
      <div
        //Inline style properties are written in camelCase. For example,
        //HTML <ul style="background-color: black"> would be written as
        //<ul style={{ backgroundColor: 'black' }}>  in your component.
        style={{
          backgroundColor: "black",
          color: "pink",
          borderRadius: "10px",
        }}
      >
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
