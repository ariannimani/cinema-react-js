import React from "react";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import Category from "../Category/Category";
import AddFavorites from "../Favorites/Favorites";

export default function Home(props) {
  return (
    <div>
      <Banner selectFeatured={props.movies}></Banner>
      <Movies
        movies={props.movies}
        changePopularAPI={props.changePopularAPI}
        loadMoreMovies={props.loadMoreMovies}
        isLoading={props.isLoading}
        errorMsg={props.errorMsg}
        handleFavouritesClick={props.addFavouriteMovie}
        searchValue={props.searchValue}
      ></Movies>
      <AddFavorites
        movies={props.favourites}
        handleFavouritesClick={props.removeFavouriteMovie}
      ></AddFavorites>
      <Category></Category>
    </div>
  );
}
