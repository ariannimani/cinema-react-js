import React from "react";

export default function StarBtn(props) {
  return (
    <div className="rating">
      <ion-icon name="star-outline"></ion-icon>
      <span>{props.valueAvg}</span>
    </div>
  );
}
