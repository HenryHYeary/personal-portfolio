import React from "react";

export default function Card(props) {
  return (
    <div>
      <img src={props.imageUrl}/>
      <h3>{props.location}</h3>
      <p>{props.description}</p>
    </div>
  );
}