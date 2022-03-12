import React from "react";
import "./MovieCard.styles.css";
import FavoriteBtn from "../../buttons/FavoriteBtn/FavoriteBtn";
import StarBtn from "../../buttons/StarBtn/StarBtn";

export default function MovieCard(props) {
  return (
    <div className="movie-grid">
      {props.errorMsg ? (
        <h1 className="errorMsg">
          "Error while loading data. Try again later"
        </h1>
      ) : (
        props.movies
          .filter((name) =>
            props.selectedGenre === "0"
              ? name.title
                  .toLowerCase()
                  .match(new RegExp(props.searchValue, "i"))
              : name.title
                  .toLowerCase()
                  .match(new RegExp(props.searchValue, "i")) &&
                name.genre_ids[0]
                  .toString()
                  .match(new RegExp(props.selectedGenre, "i"))
          )
          .map((value, i) => (
            <div className="movie-card" key={value.id}>
              <div className="card-head">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + value.backdrop_path}
                  alt=""
                  className="card-img"
                />

                <div className="card-overlay">
                  <FavoriteBtn
                    handleFavouritesClick={props.handleFavouritesClick}
                    valueF={value}
                  ></FavoriteBtn>

                  <StarBtn valueAvg={value.vote_average}></StarBtn>

                  <div className="play">
                    <ion-icon name="play-circle-outline"></ion-icon>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{value.title}</h3>

                <div className="card-info">
                  {props.genres
                    .filter((genrename) =>
                      genrename.id
                        .toString()
                        .match(new RegExp(value.genre_ids[0], "i"))
                    )
                    .map((genres, i) => (
                      <span className="genre" key={genres.id}>
                        {genres.name}
                      </span>
                    ))}

                  <span className="year">
                    {value.release_date.substring(0, 4)}
                  </span>
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  );
}
