import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <img src={props.imageUrl} className="card-image"/>
      <div className="info-container">
        <p className="location-bar"><img src="./pin.png" className="pin-icon" /><span className="location">{props.location.toUpperCase()}</span> <a href={props.googleMapsUrl} className="maps-url">View on Google Maps</a></p>
        <h1 className="title">{props.title}</h1>
        <h4 className="date-range">{props.startDate} - {props.endDate}</h4>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}