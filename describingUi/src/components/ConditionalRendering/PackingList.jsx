/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Item({ name, isPacked }) {
  //If the isPacked prop is true, this code returns a different JSX tree.
  if (isPacked) {
    return <li className="isPacked">{name} ✔</li>;
  }
  return <li className="isPacked">{name}</li>;
}

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
