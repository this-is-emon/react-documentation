/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";

import Avatar from "./Avater";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function JsxAsChildren_03() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

export default JsxAsChildren_03;
