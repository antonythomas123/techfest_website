import React from "react";

import "./Cards.css";

function EventCard(props) {
  return (
    <div className="event_card">
      <img src={props.imgsrc} alt="workshop" />
      <h2 className="event_title">{props.title}</h2>
      <div className="event_details">
        <p>{props.text}</p>
        <div className="event_btns">
          <button className="btn">View</button>
          <button className="btn">Register</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
