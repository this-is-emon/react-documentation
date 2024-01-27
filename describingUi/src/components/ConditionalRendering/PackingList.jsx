/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Item({ name, isPacked }) {
  //If isPacked is true, the component will return nothing, null.
  //Otherwise, it will return JSX to render.
  if (isPacked) {
    return null;
  }
  return <li className="isPacked">{name}</li>;
}
//In practice, returning null from a component isn’t common
//because it might surprise a developer trying to render it.

function PackingList() {
  return (
    <section>
      <h1>Sally Ride`s Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

export default PackingList;
