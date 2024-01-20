// Props are the information that you pass to a JSX tag. For example, className, src,
//alt, width, and height are some of the props you can pass to an <img>:

// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

function Intro_01() {
  return (
    <>
      <Avatar />
    </>
  );
}

export default Intro_01;
