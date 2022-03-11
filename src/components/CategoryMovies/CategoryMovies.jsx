import React, { useEffect } from "react";
import Movies from "../Movies/Movies";

export default function CategoryMovie(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(props.selectedGenre);
  return (
    <Movies
      movies={props.movies}
      errorMsg={props.errorMsg}
      handleFavouritesClick={props.handleFavouritesClick}
      searchValue={props.searchValue}
      genres={props.genres}
      selectedGenre={props.selectedGenre}
    ></Movies>
  );
}
