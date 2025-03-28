import React from "react";

export default function Root(props) {
  return (
    <>
      DTD Planets
      <button
        onClick={() => {
          alert("clicked DTD Planets");
        }}
      >
        Click me
      </button>
    </>
  );
}
