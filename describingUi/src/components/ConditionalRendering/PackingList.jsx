/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

//Both of the conditional branches return <li className="item">...</li>
/*
    if (isPacked) {
    return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
*/
//While this duplication isn’t harmful, it could make your code harder to maintain.
//What if you want to change the className? You’d have to do it in two places in your code!
//In such a situation, you could conditionally include a little JSX to make your code more DRY.

function Item({ name, isPacked }) {
  //Conditional (ternary) operator (? :)
  return <li className="item">{isPacked ? name + "✔" : name}</li>;
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
