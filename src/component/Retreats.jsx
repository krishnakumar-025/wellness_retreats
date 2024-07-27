import React from "react";

const Retreats = ({ retreats }) => {
  return (
    <div className="retreats-view">
      {retreats.map((retreat) => {
        return (
          <div className="retreat-section">
            <img src={retreat.image} alt={retreat.title} />
            <p>{retreat.title}</p>
            <span>{retreat.description}</span>
            <span>Date: {new Date(retreat.date).toDateString()}</span>
            <span>Location: {retreat.location}</span>
            <span>Price: ${retreat.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Retreats;
