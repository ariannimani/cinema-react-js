import React from "react";
import "./Favorites.styles.css";

export default function Favorites(props) {
  return (
    <section className="category" id="favorites">
      <h2 className="section-heading">Favorites</h2>
      <div className="favorites-grid">
        {props.movies.map((value, i) => (
          <div className="favorites-card" key={value.id}>
            <div className="card-head">
              <img
                src={"https://image.tmdb.org/t/p/w500" + value.backdrop_path}
                alt=""
                className="card-img"
              />

              <div className="card-overlay">
                <div className="bookmark">
                  <ion-icon
                    name="bookmark-outline"
                    onClick={() => props.handleFavouritesClick(value)}
                  ></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>{value.vote_average}</span>
                </div>

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">{value.title}</h3>

              <div className="card-info">
                <span className="genre">Action</span>
                <span className="year">
                  {new Date().getFullYear(value.release_date)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
