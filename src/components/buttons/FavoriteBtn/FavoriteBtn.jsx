import React from "react";

export default function FavoriteBtn(props) {
  return (
    <div className="bookmark">
      <ion-icon
        name="bookmark-outline"
        onClick={() => props.handleFavouritesClick(props.valueF)}
      ></ion-icon>
    </div>
  );
}
