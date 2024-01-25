/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Card({ person, size }) {
  return (
    <>
      <h1>{person.intro}</h1>
      <img
        className="avatar"
        src={person.url}
        alt={person.name}
        width={size}
        height={size}
      />
      <p>{person.description}</p>
    </>
  );
}

function ExtractCardComp_03() {
  return (
    <>
      <Card
        person={{
          intro: "Photo",
          url: "https://i.imgur.com/OKS67lhm.jpg",
          name: "Aklilu Lemma",
        }}
        size={70}
      />
      <Card
        person={{
          intro: "About",
          description:
            "Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.",
        }}
      />
    </>
  );
}

export default ExtractCardComp_03;

//Also see the solution in the documentation
