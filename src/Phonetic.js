import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="blank">
        Listen
      </a>
      <br />
      <h3>{props.phonetic.text}</h3>
    </div>
  );
}
